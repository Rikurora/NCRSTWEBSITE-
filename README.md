# NCRST Website Monorepo

This is the monorepo for the National Commission on Research, Science and Technology (NCRST) website and content management system.

## Project Structure

```
NCRST WEBSITITE VERSION 2/
├── apps/
│   ├── cms/               # Content Management System
│   └── website/           # Public Website
├── packages/
│   ├── config/           # Shared configurations
│   └── shared/           # Shared components and utilities
└── package.json
```

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Monorepo Management**: pnpm workspaces

## Brand Colors

```css
ncrst-grey:    #777675
ncrst-gold:    #FFD332
ncrst-green:   #009E85
ncrst-blue:    #312783
ncrst-yellow:  #F59E0B
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
pnpm install
```

### Development

```bash
# Start website development server
pnpm dev:website

# Start CMS development server
pnpm dev:cms

# Run linting
pnpm lint

# Format code
pnpm format
```

### Building

```bash
# Build website
pnpm build:website

# Build CMS
pnpm build:cms
```

## Project Structure Details

### Website (`apps/website/`)

The public-facing website built with React and Tailwind CSS.

- `src/components/` - Reusable UI components
- `src/pages/` - Page components
- `src/assets/` - Static assets (images, etc.)

### CMS (`apps/cms/`)

Content Management System for managing website content.

- `src/components/` - UI components
  - `admin/` - Admin-specific components
  - `checker/` - Content checker components
  - `editor/` - Content editor components
  - `common/` - Shared components

### Shared Packages

#### Config (`packages/config/`)

Shared configuration files:
- ESLint configuration
- TypeScript configuration
- Tailwind CSS configuration

#### Shared (`packages/shared/`)

Shared utilities and components used across applications.

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for code formatting
- Follow component-based architecture
- Use Tailwind CSS for styling

### Git Workflow

1. Create feature branch from main
2. Make changes and commit
3. Push changes and create PR
4. Get review and approval
5. Merge to main

### Naming Conventions

- Components: PascalCase
- Files: PascalCase for components, camelCase for utilities
- CSS classes: Use Tailwind utility classes
- Variables: camelCase

## Available Scripts

- `pnpm dev:website` - Start website development server
- `pnpm dev:cms` - Start CMS development server
- `pnpm build:website` - Build website for production
- `pnpm build:cms` - Build CMS for production
- `pnpm lint` - Run ESLint on all projects
- `pnpm format` - Format code with Prettier

## Contributing

1. Follow the Git workflow
2. Ensure all tests pass
3. Update documentation as needed
4. Follow code style guidelines
5. Get PR review and approval

## License

[Add License Information]

## Contact

National Commission on Research, Science and Technology (NCRST)
[Add Contact Information] 