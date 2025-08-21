import { Router, Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { authenticateToken } from '../middleware/auth';
import { AuthRequest } from '../types/auth';
import db from '../utils/db';

const router = Router();

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = uuidv4();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  // Accept images and documents
  const allowedMimes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

// Upload single file
router.post(
  '/file',
  authenticateToken,
  upload.single('file'),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const fileId = uuidv4();
      await db.execute(
        'INSERT INTO files (id, filename, original_name, mime_type, size, uploaded_by) VALUES (?, ?, ?, ?, ?, ?)',
        [fileId, file.filename, file.originalname, file.mimetype, file.size, authReq.user?.id]
      );

      res.json({
        id: fileId,
        filename: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        url: `/uploads/${file.filename}`
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'File upload failed' });
    }
  }
);

// Upload multiple files
router.post(
  '/files',
  authenticateToken,
  upload.array('files', 10),
  async (req: Request, res: Response) => {
    try {
      const authReq = req as AuthRequest;
      const files = req.files as Express.Multer.File[];

      if (!files || files.length === 0) {
        return res.status(400).json({ error: 'No files uploaded' });
      }

      const uploadedFiles = await Promise.all(
        files.map(async (file) => {
          const fileId = uuidv4();
          await db.execute(
            'INSERT INTO files (id, filename, original_name, mime_type, size, uploaded_by) VALUES (?, ?, ?, ?, ?, ?)',
            [fileId, file.filename, file.originalname, file.mimetype, file.size, authReq.user?.id]
          );

          return {
            id: fileId,
            filename: file.filename,
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            url: `/uploads/${file.filename}`
          };
        })
      );

      res.json(uploadedFiles);
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'File upload failed' });
    }
  }
);

// Delete file
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthRequest;
    const { id } = req.params;

    // Get file info
    const file = await db.queryOne(
      'SELECT * FROM files WHERE id = ?',
      [id]
    );

    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Check permissions
    if (authReq.user?.role !== 'ccm_admin' && file.uploaded_by !== authReq.user?.id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Delete file from disk
    const filePath = path.join(__dirname, '../../uploads', file.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete file record from database
    await db.execute('DELETE FROM files WHERE id = ?', [id]);

    res.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete file' });
  }
});

// Error handling middleware
router.use((err: Error, req: Request, res: Response, next: Function) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
    return res.status(400).json({ error: err.message });
  }
  
  if (err.message === 'Invalid file type') {
    return res.status(400).json({ error: 'Invalid file type' });
  }

  console.error(err);
  res.status(500).json({ error: 'File upload failed' });
});

export default router; 