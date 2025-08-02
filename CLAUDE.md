# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Personal portfolio website for Martin built with Next.js 15, TypeScript, and Tailwind CSS. Features blog posts and project showcases using MDX content with a comprehensive design system and performance optimizations.

## Essential Commands

### Development
```bash
pnpm dev        # Start development server with Turbopack (http://localhost:3000)
pnpm build      # Create production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm type-check # Run TypeScript type checking
pnpm analyze    # Analyze bundle size (run after build)
pnpm build:analyze # Cross-platform bundle analysis
```

### Installation
```bash
pnpm install    # Install dependencies (project uses pnpm)
```

## Architecture Overview

### Tech Stack
- **Next.js 15.4.5** with App Router and Turbopack
- **TypeScript 4.9.5** with strict mode
- **Tailwind CSS** with custom theme and design system
- **MDX** for content (blog posts and projects)
- **React 19.1.1**
- **Framer Motion** for animations
- **PostCSS** with autoprefixer

### Key Directories
- `src/app/` - Next.js App Router pages
- `src/components/` - Reusable React components
  - `ui/` - Core UI components
  - `layout/` - Layout components (navbar, footer)
  - Feature-specific components (testimonials, project cards)
- `src/content/` - MDX content files
  - `blog/` - Blog posts with frontmatter
  - `projects/` - Project descriptions with frontmatter
- `src/lib/` - Utility functions for content processing
- `src/styles/` - Global styles and design system
  - `design-system.ts` - Design tokens and style utilities
- `src/types/` - TypeScript type definitions

### Important Files
- `next.config.mjs` - MDX support, image optimization, production optimizations
- `tailwind.config.ts` - Custom theme with CSS variables, typography plugin
- `tsconfig.json` - Path alias `@/*` maps to `./src/*`
- `postcss.config.mjs` - PostCSS configuration with Tailwind and autoprefixer
- `DESIGN_SYSTEM.md` - Comprehensive design system documentation

### Content Structure
Blog posts and projects use MDX with frontmatter:
```yaml
---
title: "Post Title"
description: "Description"
date: "2024-01-01"
tags: ["tag1", "tag2"]
image: "/images/cover.jpg"
---
```

### Styling Approach
- Tailwind CSS with custom CSS variables for theming
- Dark mode support via `next-themes`
- Typography styles via `@tailwindcss/typography`
- Comprehensive design system in `src/styles/design-system.ts`
- Utility-first approach with semantic color variables
- Consistent spacing, borders, shadows, and animations

### Performance Considerations
- Static generation for all pages
- Lazy loading implemented for components with React Suspense
- Code splitting with dynamic imports for heavy components
- Modern browsers only (no IE11 support)
- Console logs removed in production
- Image optimization through Next.js Image component
- Bundle analysis available via `pnpm analyze`
- Client/server component separation for optimal bundle size
- Loading skeletons and error boundaries for better UX
- Scroll-to-top and smooth scrolling functionality
- Performance monitoring components available

### Development Notes
- No test framework currently set up
- Use `pnpm` for all package management
- Path imports use `@/` prefix (e.g., `@/components/layout/Navbar`)
- MDX files can include React components and are processed with remark-gfm
- Follow design system patterns in `DESIGN_SYSTEM.md`
- Use design tokens from `src/styles/design-system.ts` for consistency
- Implement loading states and error boundaries for robustness
- Follow mobile-first responsive design approach

### New Components
- `PerformanceMonitor` - Development performance tracking
- `ErrorBoundary` - Graceful error handling
- `LoadingSkeleton` - Consistent loading states
- `PageTransition` - Smooth page transitions
- `ScrollToTop` - Scroll restoration
- `Testimonials` - Client testimonials display
- Lazy-loaded client components for optimization