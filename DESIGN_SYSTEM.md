# Design System Guide

This document outlines the design system and styling conventions used throughout the portfolio project.

## Styling Approach

We use a **utility-first approach** with Tailwind CSS, enhanced by custom CSS variables and reusable design tokens.

### Core Principles

1. **Consistency**: Use design tokens from `src/styles/design-system.ts`
2. **Semantic Colors**: Use CSS variables (e.g., `text-primary`, `bg-card`) instead of hardcoded colors
3. **Responsive Design**: Mobile-first approach with responsive breakpoints
4. **Accessibility**: Proper contrast ratios and focus states
5. **Performance**: Minimize bundle size with utility classes

## Color System

### CSS Variables
All colors use CSS variables defined in `globals.css`:

```css
--background: 0 0% 100%;          /* Page background */
--foreground: 222.2 84% 4.9%;     /* Primary text */
--primary: 222.2 47.4% 11.2%;     /* Brand primary */
--accent: 210 40% 96.1%;          /* Accent color */
--muted: 210 40% 96.1%;           /* Muted backgrounds */
--border: 214.3 31.8% 91.4%;      /* Border color */
```

### Usage Examples
```tsx
// ✅ Correct - uses semantic variables
<div className="bg-card text-foreground border-border">

// ❌ Incorrect - hardcoded colors
<div className="bg-white text-black border-gray-200">
```

## Typography Scale

```tsx
import { typography } from "@/styles/design-system";

// Usage
<h1 className={typography.heading1}>Main Title</h1>
<h2 className={typography.heading2}>Section Title</h2>
<p className={typography.body}>Body text</p>
<span className={typography.muted}>Muted text</span>
```

## Component Patterns

### Card Components

All card components should follow this pattern:

```tsx
import { createCardStyles } from "@/styles/design-system";

function Card({ featured, children }: CardProps) {
  return (
    <div className={createCardStyles({ featured, hover: true })}>
      {children}
    </div>
  );
}
```

### Button Components

```tsx
import { createButtonStyles } from "@/styles/design-system";

function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button className={createButtonStyles(variant)}>
      {children}
    </button>
  );
}
```

### Animation Guidelines

1. **Entrance Animations**: Use Framer Motion with consistent timing
2. **Hover Effects**: Subtle scale (1.02-1.05) and translate (-2px to -8px)
3. **Transitions**: 300ms duration with ease-out timing
4. **Loading States**: Use skeleton components with pulse animation

```tsx
// Standard hover animation
<motion.div
  whileHover={{ scale: 1.02, y: -4 }}
  transition={{ duration: 0.3 }}
>
```

## Layout Patterns

### Container Sizing
```tsx
import { layouts } from "@/styles/design-system";

// Different container sizes for different content types
<div className={layouts.containerSmall}>    {/* max-w-4xl */}
<div className={layouts.container}>         {/* max-w-6xl */}
<div className={layouts.containerLarge}>    {/* max-w-7xl */}
```

### Grid Systems
```tsx
// Responsive grids
<div className={`${layouts.grid} ${layouts.gridCols[3]}`}>
  {/* 1 col on mobile, 2 on tablet, 3 on desktop */}
</div>
```

## Dark Mode Support

All components automatically support dark mode through CSS variables:

```tsx
// Automatically adapts to dark mode
<div className="bg-background text-foreground">
  <div className="bg-card border-border">
    Content adapts to theme
  </div>
</div>
```

## Image Optimization

Always use Next.js Image component:

```tsx
import Image from "next/image";

// ✅ Correct
<Image
  src="/image.jpg"
  alt="Description"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={index < 2} // For above-the-fold images
/>

// ❌ Incorrect
<img src="/image.jpg" alt="Description" />
```

## Accessibility Guidelines

1. **Semantic HTML**: Use proper heading hierarchy (h1 → h2 → h3)
2. **Alt Text**: Descriptive alt text for all images
3. **Focus States**: Visible focus indicators for interactive elements
4. **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
5. **ARIA Labels**: For icon-only buttons and complex interactions

## Performance Best Practices

1. **Lazy Loading**: Use dynamic imports for heavy components
2. **Image Optimization**: Next.js Image with proper sizing
3. **Bundle Splitting**: Separate client/server components
4. **CSS Purging**: Tailwind automatically removes unused styles

## File Organization

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── [feature]/       # Feature-specific components
├── styles/
│   ├── globals.css      # Global styles and CSS variables
│   └── design-system.ts # Design tokens and utilities
└── types/
    └── index.ts         # Shared TypeScript interfaces
```

## Migration Checklist

When updating existing components:

- [ ] Replace hardcoded colors with CSS variables
- [ ] Use design system utilities
- [ ] Add proper TypeScript interfaces
- [ ] Implement loading states
- [ ] Add error boundaries where needed
- [ ] Optimize images with Next.js Image
- [ ] Test dark mode compatibility
- [ ] Verify accessibility standards