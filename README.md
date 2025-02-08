# Consulting Website

A modern, responsive React-TypeScript website for a professional consulting firm, featuring glassmorphism effects, animated components, and comprehensive service sections.

## Features

- Responsive design for all device sizes
- Flex grids and CSS Grid layouts
- Glassmorphism effects 
- Smooth-finish navbar with glowing icons
- Animated designs and shapes using Framer Motion
- Dark/Light theme support
- Sections for:
  - Construction Outsourcing
  - Portfolio Management
  - Automobile Sales
  - Developer Solutions
  - Mergers and Acquisitions
  - Company Consulting
- FAQ section
- Organized footer with quick links, careers, and newsletter signup

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router v6
- Vite
- ESLint
- Prettier

## Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)
- Git
- Visual Studio Code (recommended)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Astralchemist/consulting-website.git
```

2. Navigate to project directory:
```bash
cd consulting-website
```

3. Install dependencies:
```bash
npm install
```

4. Copy environment variables:
```bash
copy .env.example .env
```

### Development

Start the development server:
```bash
npm run dev
```

Run tests:
```bash
npm run test
```

Format code:
```bash
npm run format
```

Lint code:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

## Project Structure

```
consulting-website/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   ├── common/       # Shared components
│   │   └── sections/     # Page sections
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React context providers
│   ├── styles/           # Global styles
│   ├── utils/            # Helper functions
│   ├── types/            # TypeScript types
│   └── assets/           # Static assets
├── public/               # Public assets
└── tests/                # Test files
```

## Development Guidelines

### Component Structure
```typescript
ComponentName/
├── index.tsx             # Main component export
├── ComponentName.tsx     # Component implementation
├── ComponentName.test.tsx
└── ComponentName.module.css
```

### Naming Conventions
- Components: PascalCase (e.g., `NavBar.tsx`)
- Files: camelCase (e.g., `useWindowSize.ts`)
- CSS Modules: `[name].module.css`
- Test files: `[name].test.tsx`

### Code Style
- Use TypeScript strict mode
- Follow ESLint configuration
- Use Prettier for formatting
- Write unit tests for components
- Use CSS modules for styling

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check for linting errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run test suite
- `npm run coverage` - Generate test coverage report

## Common Issues

### Hot Reload Not Working
Clear the Vite cache:
```bash
npm run clean:cache
npm run dev
```

### TypeScript Errors
Update TypeScript definitions:
```bash
npm run update-types
```

## VS Code Extensions

Recommended extensions for development:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens
- Auto Rename Tag

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md)

## Contact

Project Maintainer - [Akashit]
Project Link: [https://github.com/Astralchemist/consulting-website](https://github.com/Astralchemist/consulting-website)