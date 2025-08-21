import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { config } from '../config/database';

// Create connection pool
const pool = mysql.createPool(config);

// Generic database utility functions
const db = {
  // Query that returns multiple rows
  async query<T extends RowDataPacket>(sql: string, values?: any[]): Promise<T[]> {
    const [rows] = await pool.query<T[]>(sql, values);
    return rows;
  },

  // Query that returns a single row
  async queryOne<T extends RowDataPacket>(sql: string, values?: any[]): Promise<T | null> {
    const [rows] = await pool.query<T[]>(sql, values);
    return rows[0] || null;
  },

  // Execute a query that modifies data (INSERT, UPDATE, DELETE)
  async execute(sql: string, values?: any[]): Promise<ResultSetHeader> {
    const [result] = await pool.execute<ResultSetHeader>(sql, values);
    return result;
  },

  // Transaction helper
  async transaction<T>(callback: (connection: mysql.Connection) => Promise<T>): Promise<T> {
    const connection = await pool.getConnection();
    await connection.beginTransaction();

    try {
      const result = await callback(connection);
      await connection.commit();
      return result;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  },

  // Helper to format dates for MySQL
  formatDate(date: Date): string {
    return date.toISOString().slice(0, 19).replace('T', ' ');
  }
};

export default db; 