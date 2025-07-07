import { Request } from 'express';
import { RowDataPacket } from 'mysql2';

export type UserRole = 'ccm_admin' | 'editor' | 'checker';

export interface User extends RowDataPacket {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
}

export interface AuthUser extends User {
  password: string;
}

export interface JwtPayload {
  userId: string;
  role: UserRole;
}

// Use declaration merging to extend Express Request
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export interface AuthRequest extends Request {} 