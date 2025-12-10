# Monorepo Setup Guide

This document explains the monorepo migration and structure.

## What Changed

Your workspace has been reorganized into a proper monorepo using npm workspaces. Here's what was restructured:

### Before (Monolithic Structure)
```
CreditManager/
├── app/
│   ├── common/GlobalContext.tsx
│   ├── lib/utils.ts
│   ├── components/ui/
│   ├── routes/
│   ├── welcome/
│   └── ...
├── build/
├── package.json
└── tsconfig.json
```

### After (Monorepo Structure)
```
CreditManager/
├── packages/
│   ├── core/          (context, utilities)
│   ├── ui/            (UI components)
│   ├── dashboard/     (dashboard feature)
│   ├── landing/       (landing page feature)
│   └── web/           (main app entry point)
├── package.json       (root workspace config)
└── tsconfig.json      (root paths config)
```

## Package Responsibilities

### 🎯 `packages/core`
**Purpose:** Shared utilities and state management
- **Exports:** `GlobalContext`, `useGlobalContext`, `cn()` utility
- **Dependencies:** React
- **Build:** TypeScript → JS

### 🎨 `packages/ui`
**Purpose:** Reusable UI component library
- **Exports:** Button, Card, Badge, Avatar components
- **Dependencies:** `@credit-manager/core`, Radix UI, Tailwind CSS
- **Build:** TypeScript → JS

### 📊 `packages/dashboard`
**Purpose:** Dashboard feature module
- **Exports:** Dashboard component
- **Dependencies:** `@credit-manager/core`, `@credit-manager/ui`
- **Build:** TypeScript → JS

### 🏠 `packages/landing`
**Purpose:** Landing page and navigation
- **Exports:** LandingPage, Navbar components
- **Dependencies:** `@credit-manager/core`, `@credit-manager/ui`
- **Build:** TypeScript → JS

### 🌐 `packages/web`
**Purpose:** Main React Router application
- **Entry Point:** React Router v7
- **Depends on:** All other packages
- **Features:**
  - Vite bundling
  - React Router routing
  - Tailwind CSS styling
  - Development and production builds

## Installation & Development

### 1. Install pnpm (if not already installed)
```bash
npm install -g pnpm
# or
npm i -g pnpm@9
```

### 2. Install Dependencies
```bash
pnpm install
```

This installs dependencies for all packages in the monorepo.

### 3. Development Mode
```bash
pnpm dev
```

Starts the web package development server on localhost (usually 5173).

### 4. Build Everything
```bash
pnpm build:all
```

Builds all packages (core, ui, dashboard, landing) then builds the web app.

### 5. Type Checking
```bash
pnpm typecheck
```

Runs TypeScript checking across all packages.

## Working with Packages

### Adding Dependencies to a Package

```bash
# Add to a specific package
pnpm --filter=packages/ui add lodash

# Add as dev dependency
pnpm --filter=packages/core add -D typescript
```

### Running Scripts in a Package

```bash
# Run build in web package only
pnpm --filter=packages/web build

# Run in all packages
pnpm -r typecheck
```

## Import Pattern

### ✅ Correct - Use package aliases
```typescript
import { cn } from '@credit-manager/core';
import { Button, Card } from '@credit-manager/ui';
import { Dashboard } from '@credit-manager/dashboard';
import { LandingPage, Navbar } from '@credit-manager/landing';
```

### ❌ Avoid - Relative paths across packages
```typescript
// Don't do this
import { cn } from '../../../core/src/utils';
```

## Adding a New Feature Package

If you want to add a new package (e.g., `payments`):

1. **Create the package directory:**
   ```bash
   mkdir packages/payments
   mkdir packages/payments/src
   ```

2. **Create `package.json`:**
   ```json
   {
     "name": "@credit-manager/payments",
     "version": "1.0.0",
     "private": true,
     "type": "module",
     "main": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "scripts": {
       "build": "tsc",
       "dev": "tsc --watch",
       "typecheck": "tsc --noEmit"
     },
     "dependencies": {
       "@credit-manager/core": "workspace:*",
       "@credit-manager/ui": "workspace:*",
       "react": "^19.1.1"
     }
   }
   ```

3. **Create `tsconfig.json`:** (Copy from another package)

4. **Create `src/index.ts`:** (Main export file)

5. **Update root `package.json`:**
   ```json
   {
     "packageManager": "pnpm@9.0.0"
   }
   ```

6. **Create `pnpm-workspace.yaml`:**
   ```yaml
   packages:
     - 'packages/core'
     - 'packages/ui'
     - 'packages/dashboard'
     - 'packages/landing'
     - 'packages/payments'
     - 'packages/web'
   ```

7. **Update root `tsconfig.json` paths:**
   ```json
   {
     "paths": {
       "@credit-manager/payments": ["packages/payments/src"],
       "@credit-manager/payments/*": ["packages/payments/src/*"]
     }
   }
   ```

## Dependency Management

The monorepo uses `workspace:*` protocol for internal dependencies:

```json
"dependencies": {
  "@credit-manager/core": "workspace:*"  // Always use latest version in monorepo
}
```

## Troubleshooting

### Module not found errors
- Run `npm install` to ensure all packages are installed
- Check that the package is listed in root `workspaces` array
- Verify the import path matches the package name

### Type errors for internal packages
- Clear any `dist/` folders: `rm -r packages/*/dist`
- Run `npm run build:all`
- Ensure `tsconfig.json` paths are configured

### Development changes not reflecting
- The web package watches for changes via Vite
- Other packages need to be built: `npm run build --workspace=packages/core`

## CI/CD Integration

For build pipelines:

```bash
# Install and build
pnpm install
pnpm build:all

# Type checking
pnpm typecheck

# Ready for deployment
```

## Git Workflow

When making changes:

1. Each package has its own responsibilities
2. Update multiple packages if changing internal APIs
3. Test changes across packages: `npm run typecheck`
4. Commit all related package changes together

---

For more details, see `MONOREPO.md`.
