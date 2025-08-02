// Design System Configuration
// Centralized styling constants for consistent component design

export const animations = {
  // Transition durations
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
  
  // Easing functions
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  
  // Common animation classes
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  float: "animate-float",
} as const;


export const borders = {
  default: "border border-border",
  hover: "hover:border-primary/50",
  focus: "focus:border-primary focus:ring-2 focus:ring-primary/20",
  rounded: "rounded-2xl",
  roundedSmall: "rounded-lg",
  roundedLarge: "rounded-3xl",
} as const;

export const shadows = {
  card: "shadow-sm",
  cardHover: "hover:shadow-xl hover:shadow-primary/10",
  glow: "shadow-lg shadow-primary/25",
} as const;

export const gradients = {
  primary: "bg-gradient-to-r from-primary to-accent",
  primaryText: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
  cardOverlay: "bg-gradient-to-t from-background/80 via-transparent to-transparent",
  shine: "bg-gradient-to-r from-transparent via-white/20 to-transparent",
} as const;

export const typography = {
  heading1: "text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter",
  heading2: "text-3xl md:text-4xl font-bold",
  heading3: "text-2xl font-bold",
  heading4: "text-xl font-bold",
  body: "text-base leading-relaxed",
  bodySmall: "text-sm leading-relaxed",
  caption: "text-xs",
  muted: "text-muted-foreground",
} as const;

export const layouts = {
  container: "container max-w-6xl mx-auto",
  containerSmall: "container max-w-4xl mx-auto",
  containerLarge: "container max-w-7xl mx-auto",
  grid: "grid gap-6",
  gridCols: {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  },
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
} as const;

export const states = {
  loading: "animate-pulse",
  disabled: "opacity-50 cursor-not-allowed",
  active: "bg-primary text-primary-foreground",
  selected: "ring-2 ring-primary/20",
} as const;

// Unified spacing system
export const spacing = {
  card: "p-6",
  cardSmall: "p-4",
  cardLarge: "p-8",
  section: "py-20 px-6",
  sectionSmall: "py-12 px-4",
  sectionLarge: "py-24 px-8",
  navHeight: "h-16",
  footerHeight: "h-20",
} as const;

// Utility function to combine design system classes
export function createCardStyles(options?: {
  size?: keyof typeof spacing;
  hover?: boolean;
  featured?: boolean;
}) {
  const { size = "card", hover = true, featured = false } = options || {};
  
  return [
    // Base styles
    "group relative bg-card overflow-hidden transition-all duration-300",
    borders.default,
    borders.rounded,
    spacing[size],
    shadows.card,
    
    // Hover effects
    hover && [
      shadows.cardHover,
      borders.hover,
      "hover:-translate-y-1"
    ],
    
    // Featured styles
    featured && states.selected,
  ].filter(Boolean).flat().join(" ");
}

export function createButtonStyles(variant: "primary" | "secondary" | "ghost" = "primary") {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
    secondary: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };
  
  return `${baseStyles} ${variants[variant]}`;
}