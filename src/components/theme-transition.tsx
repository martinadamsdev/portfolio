"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, CSSProperties } from "react";
import { useTheme } from "next-themes";

export function ThemeTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 0, y: 0 });
  const [pendingTheme, setPendingTheme] = useState<string | null>(null);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      const { newTheme, origin } = e.detail;
      setPendingTheme(newTheme);
      setTransitionOrigin(origin);
      setIsTransitioning(true);
      
      // End transition after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
        setPendingTheme(null);
      }, 600);
    };

    window.addEventListener('theme-transition' as any, handleThemeChange);
    return () => window.removeEventListener('theme-transition' as any, handleThemeChange);
  }, []);

  const current = theme === "system" ? resolvedTheme : theme;
  const targetTheme = pendingTheme || current;

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Main transition overlay */}
          <motion.div
            key="theme-transition"
            initial={{ 
              scale: 0,
              opacity: 1,
            }}
            animate={{ 
              scale: 8,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              position: "fixed",
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              background: targetTheme === "dark" 
                ? "radial-gradient(circle, #0a0a0f 0%, #141420 100%)"
                : "radial-gradient(circle, #ffffff 0%, #fafafa 100%)",
              pointerEvents: "none",
            } as CSSProperties}
          />
          
          {/* Ripple effect */}
          <motion.div
            key="theme-ripple"
            initial={{ 
              scale: 0,
              opacity: 0.5,
            }}
            animate={{ 
              scale: 6,
              opacity: 0,
            }}
            transition={{ 
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            style={{
              position: "fixed",
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9998,
              border: `2px solid ${
                targetTheme === "dark" 
                  ? "rgba(80, 120, 255, 0.5)" 
                  : "rgba(255, 200, 0, 0.5)"
              }`,
              pointerEvents: "none",
            } as CSSProperties}
          />
          
          {/* Flash effect */}
          <motion.div
            key="theme-flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ 
              duration: 0.3,
              times: [0, 0.5, 1]
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9997,
              background: targetTheme === "dark" 
                ? "rgba(20, 20, 30, 0.8)"
                : "rgba(255, 255, 255, 0.8)",
              pointerEvents: "none",
            } as CSSProperties}
          />
        </>
      )}
    </AnimatePresence>
  );
}