# NCRST CMS Backend

This is the backend service for the NCRST Content Management System. It provides RESTful APIs for managing website content, user authentication, and file uploads.

## Tech Stack

- Node.js with TypeScript
- Express.js for API routing
- MySQL for database
- Multer for file uploads
- JWT for authentication
- Zod for request validation

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ncrst_cms

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=24h

# File Upload Configuration
UPLOAD_DIR=uploads
MAX_FILE_SIZE=10485760 # 10MB in bytes
```

3. Create the MySQL database and tables:
```bash
# Create database
mysql -u root -p
CREATE DATABASE ncrst_cms;
USE ncrst_cms;

# Run schema.sql
mysql -u root -p ncrst_cms < src/db/schema.sql
```

4. Start the development server:
```bash
pnpm dev
```

## API Documentation

### Authentication

#### Login
- **POST** `/api/auth/login`
- Body: `{ email: string, password: string }`
- Returns: `{ token: string, user: { id: number, email: string, role: string } }`

#### User Management (Admin only)
- **POST** `/api/auth/users` - Create user
- **GET** `/api/auth/users` - List users
- **PATCH** `/api/auth/users/:id/role` - Update user role
- **DELETE** `/api/auth/users/:id` - Delete user

### File Management

#### Upload Files
- **POST** `/api/upload/file` - Upload single file
- **POST** `/api/upload/files` - Upload multiple files (max 10)
- **GET** `/api/upload/files/:id` - Get file info
- **DELETE** `/api/upload/files/:id` - Delete file

### Content Management

#### News
- **POST** `/api/content/news` - Create news
- **GET** `/api/content/news` - List news
- **GET** `/api/content/news/:id` - Get news by ID
- **PUT** `/api/content/news/:id` - Update news
- **DELETE** `/api/content/news/:id` - Delete news

#### Research
- **POST** `/api/content/research/stats` - Create research stats
- **GET** `/api/content/research/stats` - List research stats
- **POST** `/api/content/research/calls` - Create research call
- **GET** `/api/content/research/calls` - List research calls
- **PUT** `/api/content/research/calls/:id` - Update research call
- **DELETE** `/api/content/research/calls/:id` - Delete research call

#### Science
- **POST** `/api/content/science/stats` - Create science stats
- **GET** `/api/content/science/stats` - List science stats
- **POST** `/api/content/science/events` - Create science event
- **GET** `/api/content/science/events` - List science events
- **PUT** `/api/content/science/events/:id` - Update science event
- **DELETE** `/api/content/science/events/:id` - Delete science event

#### Innovation
- **POST** `/api/content/innovation/innovators` - Create innovator
- **GET** `/api/content/innovation/innovators` - List innovators
- **PUT** `/api/content/innovation/innovators/:id` - Update innovator
- **DELETE** `/api/content/innovation/innovators/:id` - Delete innovator
- **POST** `/api/content/innovation/programs` - Create program
- **GET** `/api/content/innovation/programs` - List programs
- **PUT** `/api/content/innovation/programs/:id` - Update program
- **DELETE** `/api/content/innovation/programs/:id` - Delete program

#### Procurement
- **POST** `/api/content/procurement/bids` - Create bid
- **GET** `/api/content/procurement/bids` - List bids
- **PUT** `/api/content/procurement/bids/:id` - Update bid
- **DELETE** `/api/content/procurement/bids/:id` - Delete bid
- **POST** `/api/content/procurement/bids/:id/award` - Award bid
- **POST** `/api/content/procurement/bids/:id/close` - Close bid

#### Vacancies
- **POST** `/api/content/vacancies/jobs` - Create job
- **GET** `/api/content/vacancies/jobs` - List jobs
- **PUT** `/api/content/vacancies/jobs/:id` - Update job
- **DELETE** `/api/content/vacancies/jobs/:id` - Delete job
- **POST** `/api/content/vacancies/internships` - Create internship
- **GET** `/api/content/vacancies/internships` - List internships
- **PUT** `/api/content/vacancies/internships/:id` - Update internship
- **DELETE** `/api/content/vacancies/internships/:id` - Delete internship

## Authorization

The API uses role-based access control with three roles:
- `admin`: Full access to all endpoints
- `editor`: Can create and edit content
- `checker`: Can view content and approve changes

Most endpoints require authentication using a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## File Upload Guidelines

- Supported file types:
  - Images (jpg, jpeg, png, gif)
  - Documents (pdf, doc, docx)
- Maximum file size: 10MB
- Files are stored in the `uploads` directory
- File paths are stored in the database

## Error Handling

All endpoints return standardized error responses:
```json
{
  "error": "Error message"
}
```

Common HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request (validation error)
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Development Guidelines

1. Use TypeScript for type safety
2. Follow ESLint rules
3. Validate requests with Zod schemas
4. Use prepared statements for SQL queries
5. Handle errors gracefully
6. Document new endpoints in this README

## Testing

TODO: Add testing instructions

## Deployment

TODO: Add deployment instructions 