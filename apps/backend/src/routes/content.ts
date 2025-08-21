import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import db from '../utils/db';
import { authenticateToken, validateRequest } from '../middleware/auth';
import { AuthRequest, User } from '../types/auth';

const router = Router();

// Content type validation
const ContentType = z.enum(['news', 'science', 'innovation', 'procurement', 'vacancies']);
const ContentStatus = z.enum(['draft', 'pending_review', 'changes_requested', 'approved', 'published']);

// Validation schemas
const contentSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3),
  content: z.string(),
  type: ContentType,
  status: ContentStatus.optional().default('draft')
});

// Get all content
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { type, status } = req.query;
    
    let query = `
      SELECT c.*, u.name as author_name, ch.name as checker_name
      FROM content c
      LEFT JOIN users u ON c.author_id = u.id
      LEFT JOIN users ch ON c.checker_id = ch.id
    `;
    const params: any[] = [];

    // Build where clause based on filters
    const conditions: string[] = [];
    if (type) {
      conditions.push('c.type = ?');
      params.push(type);
    }
    if (status) {
      conditions.push('c.status = ?');
      params.push(status);
    }

    // Non-admin users can only see their own content or published content
    if (authReq.user?.role !== 'ccm_admin') {
      conditions.push('(c.author_id = ? OR c.status = \'published\')');
      params.push(authReq.user?.id);
    }

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' ORDER BY c.created_at DESC';

    const content = await db.query(query, params);
    res.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Get single content
router.get('/:id', authenticateToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    const content = await db.queryOne(`
      SELECT c.*, u.name as author_name, ch.name as checker_name
      FROM content c
      LEFT JOIN users u ON c.author_id = u.id
      LEFT JOIN users ch ON c.checker_id = ch.id
      WHERE c.id = ?
    `, [id]);

    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    // Check access rights
    if (authReq.user?.role !== 'ccm_admin' && 
        content.author_id !== authReq.user?.id && 
        content.status !== 'published') {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({ error: 'Failed to fetch content' });
  }
});

// Create content
router.post(
  '/',
  authenticateToken,
  validateRequest(contentSchema),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const { title, slug, content, type, status } = req.body;

      // Check if slug is unique
      const existingContent = await db.queryOne(
        'SELECT id FROM content WHERE slug = ?',
        [slug]
      );

      if (existingContent) {
        return res.status(400).json({ error: 'Slug already exists' });
      }

      const contentId = uuidv4();
      await db.execute(
        `INSERT INTO content (id, title, slug, content, type, status, author_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [contentId, title, slug, content, type, status, authReq.user?.id]
      );

      // Create history record
      await db.execute(
        `INSERT INTO content_history (id, content_id, title, content, status, user_id)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [uuidv4(), contentId, title, content, status, authReq.user?.id]
      );

      res.status(201).json({ message: 'Content created successfully', id: contentId });
    } catch (error) {
      console.error('Error creating content:', error);
      res.status(500).json({ error: 'Failed to create content' });
    }
  }
);

// Update content
router.put(
  '/:id',
  authenticateToken,
  validateRequest(contentSchema),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const { id } = req.params;
      const { title, slug, content, type, status } = req.body;

      // Check if content exists and user has access
      const existingContent = await db.queryOne(
        'SELECT * FROM content WHERE id = ?',
        [id]
      );

      if (!existingContent) {
        return res.status(404).json({ error: 'Content not found' });
      }

      if (authReq.user?.role !== 'ccm_admin' && existingContent.author_id !== authReq.user?.id) {
        return res.status(403).json({ error: 'Access denied' });
      }

      // Check if new slug is unique (if changed)
      if (slug !== existingContent.slug) {
        const slugExists = await db.queryOne(
          'SELECT id FROM content WHERE slug = ? AND id != ?',
          [slug, id]
        );

        if (slugExists) {
          return res.status(400).json({ error: 'Slug already exists' });
        }
      }

      // Update content
      await db.execute(
        `UPDATE content 
         SET title = ?, slug = ?, content = ?, type = ?, status = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [title, slug, content, type, status, id]
      );

      // Create history record
      await db.execute(
        `INSERT INTO content_history (id, content_id, title, content, status, user_id)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [uuidv4(), id, title, content, status, authReq.user?.id]
      );

      res.json({ message: 'Content updated successfully' });
    } catch (error) {
      console.error('Error updating content:', error);
      res.status(500).json({ error: 'Failed to update content' });
    }
  }
);

// Update content status
router.patch(
  '/:id/status',
  authenticateToken,
  validateRequest(z.object({ status: ContentStatus, comment: z.string().optional() })),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const { id } = req.params;
      const { status, comment } = req.body;

      // Check if content exists
      const content = await db.queryOne(
        'SELECT * FROM content WHERE id = ?',
        [id]
      );

      if (!content) {
        return res.status(404).json({ error: 'Content not found' });
      }

      // Check permissions based on role and status transition
      const isChecker = authReq.user?.role === 'checker';
      const isAdmin = authReq.user?.role === 'ccm_admin';
      const isAuthor = content.author_id === authReq.user?.id;

      if (!isAdmin) {
        if (status === 'published' && !isChecker) {
          return res.status(403).json({ error: 'Only checkers can publish content' });
        }
        if (status === 'pending_review' && !isAuthor) {
          return res.status(403).json({ error: 'Only authors can submit for review' });
        }
      }

      // Update content status
      await db.execute(
        `UPDATE content 
         SET status = ?, checker_id = ?, published_at = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [
          status,
          status === 'published' ? authReq.user?.id : content.checker_id,
          status === 'published' ? new Date() : content.published_at,
          id
        ]
      );

      // Create history record
      await db.execute(
        `INSERT INTO content_history (id, content_id, title, content, status, user_id, comment)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [uuidv4(), id, content.title, content.content, status, authReq.user?.id, comment]
      );

      res.json({ message: 'Content status updated successfully' });
    } catch (error) {
      console.error('Error updating content status:', error);
      res.status(500).json({ error: 'Failed to update content status' });
    }
  }
);

// Get content history
router.get('/:id/history', authenticateToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    // Check if content exists and user has access
    const content = await db.queryOne(
      'SELECT * FROM content WHERE id = ?',
      [id]
    );

    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }

    if (authReq.user?.role !== 'ccm_admin' && content.author_id !== authReq.user?.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const history = await db.query(`
      SELECT ch.*, u.name as user_name
      FROM content_history ch
      LEFT JOIN users u ON ch.user_id = u.id
      WHERE ch.content_id = ?
      ORDER BY ch.created_at DESC
    `, [id]);

    res.json(history);
  } catch (error) {
    console.error('Error fetching content history:', error);
    res.status(500).json({ error: 'Failed to fetch content history' });
  }
});

export default router; 