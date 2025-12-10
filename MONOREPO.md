# Credit Manager Monorepo

This is a monorepo architecture for the Credit Manager application using npm workspaces.

## 📦 Package Structure

```
packages/
├── core/              - Shared utilities, context, and types
│   ├── src/
│   │   ├── context/   - GlobalContext and state management
│   │   └── utils/     - Utility functions (cn, etc.)
│   └── package.json
│
├── ui/                - Reusable UI components library
│   ├── src/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── avatar.tsx
│   │   └── index.ts
│   └── package.json
│
├── dashboard/         - Dashboard feature module
│   ├── src/
│   │   ├── Dashboard.tsx
│   │   └── index.ts
│   └── package.json
│
├── landing/           - Landing page and navigation
│   ├── src/
│   │   ├── LandingPage.tsx
│   │   ├── NavBar.tsx
│   │   └── index.ts
│   └── package.json
│
└── web/               - Main React Router application
    ├── app/
    │   ├── routes/
    │   ├── components/
    │   ├── entry.client.tsx
    │   ├── entry.server.tsx
    │   └── root.tsx
    ├── public/
    ├── build/
    ├── vite.config.ts
    ├── tsconfig.json
    └── package.json
```

## 🚀 Getting Started

### Installation

First, install pnpm globally (if not already installed):

```bash
npm install -g pnpm
```

Then install project dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

This runs the web package in development mode with hot module reloading.

### Build

Build all packages:

```bash
pnpm build:all
```

Build only the web application:

```bash
pnpm build
```

### Type Checking

Check types across all packages:

```bash
pnpm typecheck
```

## 📦 Package Dependencies

### `@credit-manager/core`
- No internal dependencies
- Exports: Context, utilities, types

### `@credit-manager/ui`
- Depends on: `@credit-manager/core`
- Exports: UI components (Button, Card, Badge, Avatar)

### `@credit-manager/dashboard`
- Depends on: `@credit-manager/core`, `@credit-manager/ui`
- Exports: Dashboard component

### `@credit-manager/landing`
- Depends on: `@credit-manager/core`, `@credit-manager/ui`
- Exports: LandingPage, Navbar components

### `@credit-manager/web`
- Depends on: all other packages
- Main React Router application

## 🔄 Workspace Commands

Run commands in specific workspaces:

```bash
# Run build in web package only
pnpm --filter=packages/web build

# Run build in all packages
pnpm -r build

# Run typecheck in all packages
pnpm -r typecheck
```

## 📝 Adding New Packages

To create a new package:

1. Create a new folder in `packages/`
2. Create `package.json` with proper exports
3. Create `tsconfig.json`
4. Create `src/` directory
5. Add the package path to root `package.json` workspaces array
6. Update root `tsconfig.json` paths

## 🔗 Import Paths

Use package aliases for imports:

```typescript
// Instead of relative imports
import { cn } from '../../../core/src/utils';

// Use package aliases
import { cn } from '@credit-manager/core';
```

## 🛠️ Technologies

- **React** 19.1.1
- **React Router** 7.9.2
- **Vite** 7.1.7
- **TypeScript** 5.9.2
- **Tailwind CSS** 4.1.13
- **Framer Motion** 12.23.25
- **Radix UI** (for headless components)

## 📄 License

Private - Credit Manager Project
