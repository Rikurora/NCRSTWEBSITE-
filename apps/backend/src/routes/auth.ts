import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import db from '../utils/db';
import { authenticateToken, validateRequest } from '../middleware/auth';
import { AuthRequest, User, JwtPayload } from '../types/auth';

const router = Router();

// JWT Configuration
const JWT_SECRET: Secret = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = 86400; // 24 hours in seconds

// Validation schemas
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['ccm_admin', 'editor', 'checker'])
});

// Login route
router.post('/login', validateRequest(loginSchema), async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await db.queryOne<User & { password: string }>(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const payload: JwtPayload = { userId: user.id, role: user.role };
    const options: SignOptions = { expiresIn: JWT_EXPIRES_IN };
    const token = jwt.sign(payload, JWT_SECRET, options);

    const { password: _, ...userWithoutPassword } = user;
    res.json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Register route (admin only)
router.post(
  '/register',
  authenticateToken,
  validateRequest(registerSchema),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      if (authReq.user?.role !== 'ccm_admin') {
        return res.status(403).json({ error: 'Only admins can register new users' });
      }

      const { name, email, password, role } = req.body;

      // Check if user already exists
      const existingUser = await db.queryOne<User>(
        'SELECT id FROM users WHERE email = ?',
        [email]
      );

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const userId = uuidv4();

      await db.execute(
        'INSERT INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
        [userId, name, email, hashedPassword, role]
      );

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Registration failed' });
    }
  }
);

// Get current user
router.get('/me', authenticateToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const user = await db.queryOne<User>(
      'SELECT id, name, email, role, created_at FROM users WHERE id = ?',
      [userId]
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
});

// Update user profile
router.put(
  '/profile',
  authenticateToken,
  validateRequest(
    z.object({
      name: z.string().min(2).optional(),
      email: z.string().email().optional(),
      currentPassword: z.string().min(6).optional(),
      newPassword: z.string().min(6).optional()
    })
  ),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const { name, email, currentPassword, newPassword } = req.body;
      const userId = authReq.user?.id;

      if (!userId) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      // Get current user data
      const user = await db.queryOne<User & { password: string }>(
        'SELECT * FROM users WHERE id = ?',
        [userId]
      );

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Verify current password if changing password or email
      if ((newPassword || email) && currentPassword) {
        const isValidPassword = await bcrypt.compare(currentPassword, user.password);
        if (!isValidPassword) {
          return res.status(401).json({ error: 'Current password is incorrect' });
        }
      }

      // Update user data
      const updates: Record<string, any> = {};
      if (name) updates.name = name;
      if (email) updates.email = email;
      if (newPassword) updates.password = await bcrypt.hash(newPassword, 10);

      if (Object.keys(updates).length > 0) {
        const setClause = Object.keys(updates)
          .map(key => `${key} = ?`)
          .join(', ');
        const values = [...Object.values(updates), userId];

        await db.execute(
          `UPDATE users SET ${setClause} WHERE id = ?`,
          values
        );

        res.json({ message: 'Profile updated successfully' });
      } else {
        res.status(400).json({ error: 'No updates provided' });
      }
    } catch (error) {
      console.error('Profile update error:', error);
      res.status(500).json({ error: 'Profile update failed' });
    }
  }
);

export default router; 