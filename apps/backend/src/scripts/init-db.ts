import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';
import db from '../utils/db';
import { config } from '../config/database';
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

async function createDatabase() {
  const { database, ...connectionConfig } = config;
  const connection = await mysql.createConnection(connectionConfig);
  
  try {
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
    console.log(`Database '${database}' created or already exists`);
  } finally {
    await connection.end();
  }
}

async function initializeTables() {
  const schemaPath = '../db/schema.sql';
  const schema = fs.readFileSync(path.join(__dirname, schemaPath), 'utf8');
  
  const statements: string[] = schema
    .split(';')
    .map((statement: string) => statement.trim())
    .filter((statement: string) => statement.length > 0)
    .filter((statement: string) => !statement.toUpperCase().startsWith('CREATE DATABASE'))
    .filter((statement: string) => !statement.toUpperCase().startsWith('USE '));

  for (const statement of statements) {
    try {
      await db.execute(statement + ';');
    } catch (error: any) {
      // Skip duplicate key errors for INSERT IGNORE statements
      if (error.code !== 'ER_DUP_ENTRY') {
        console.error(`Error executing statement: ${statement.substring(0, 100)}...`);
        throw error;
      }
    }
  }
  
  console.log('Database tables created successfully');
}

async function createInitialUsers() {
  const users = [
    {
      id: uuidv4(),
      name: 'Admin User',
      email: 'admin@ncrst.na',
      password: await bcrypt.hash('admin123', 10),
      role: 'ccm_admin'
    },
    {
      id: uuidv4(),
      name: 'Editor User',
      email: 'editor@ncrst.na',
      password: await bcrypt.hash('editor123', 10),
      role: 'editor'
    },
    {
      id: uuidv4(),
      name: 'Checker User',
      email: 'checker@ncrst.na',
      password: await bcrypt.hash('checker123', 10),
      role: 'checker'
    }
  ] as const;

  for (const user of users) {
    try {
      await db.execute(
        'INSERT INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [user.id, user.name, user.email, user.password, user.role]
      );
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        console.log(`User ${user.email} already exists, skipping...`);
      } else {
        throw error;
      }
    }
  }

  console.log('Initial users created successfully');
}

async function createInitialDepartments() {
  const departments = [
    {
      id: uuidv4(),
      name: 'Science and Technology',
      description: 'Responsible for science and technology initiatives'
    },
    {
      id: uuidv4(),
      name: 'Innovation and Research',
      description: 'Handles innovation projects and research activities'
    },
    {
      id: uuidv4(),
      name: 'Administration',
      description: 'Manages administrative tasks and support'
    }
  ];

  for (const dept of departments) {
    try {
      await db.execute(
        'INSERT INTO departments (id, name, description) VALUES (?, ?, ?)',
        [dept.id, dept.name, dept.description]
      );
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY') {
        console.log(`Department ${dept.name} already exists, skipping...`);
      } else {
        throw error;
      }
    }
  }

  console.log('Initial departments created successfully');
}

async function main() {
  try {
    await createDatabase();
    await initializeTables();
    await createInitialUsers();
    await createInitialDepartments();
    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
}

main(); 