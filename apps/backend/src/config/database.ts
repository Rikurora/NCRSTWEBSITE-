import { createPool, Pool, PoolOptions } from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config: PoolOptions = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ncrst_cms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
};

let pool: Pool;

try {
  pool = createPool(config);
  console.log('Database pool created successfully');
} catch (error) {
  console.error('Error creating database pool:', error);
  process.exit(1);
}

// Test the connection
pool.getConnection()
  .then((connection) => {
    console.log('Database connected successfully');
    connection.release();
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

export default pool; 