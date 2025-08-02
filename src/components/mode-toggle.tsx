"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const themeOrder = ["light", "dark"] as const;

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTheme = () => {
    if (!theme || theme === "system") return "dark";
    return theme === "light" ? "dark" : "light";
  };

  const handleThemeChange = () => {
    if (isAnimating) return;
    
    // Get button position for transition origin
    let origin = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Try to get actual button position
    const buttonElement = document.querySelector('[aria-label="Toggle theme"]');
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      origin = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    
    setIsAnimating(true);
    
    // Dispatch custom event for theme transition
    window.dispatchEvent(new CustomEvent('theme-transition', {
      detail: {
        newTheme: nextTheme(),
        origin
      }
    }));
    
    // Change theme after a short delay to sync with animation
    setTimeout(() => {
      setTheme(nextTheme());
    }, 100);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  const current = theme === "system" ? resolvedTheme : theme;

  // Don't render theme-dependent content until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className="flex items-center relative overflow-hidden"
        disabled
      >
        <div className="w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleThemeChange}
      className="flex items-center relative overflow-hidden group"
      disabled={isAnimating}
    >
      <div
        className={`absolute inset-0 rounded-md transition-colors duration-300 ${
          current === "light" ? "bg-yellow-400/10" : "bg-blue-400/10"
        }`}
      />
      
      <AnimatePresence mode="wait" initial={false}>
          {current === "light" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -180, scale: 0, opacity: 0 }}
              animate={{ 
                rotate: 0, 
                scale: 1, 
                opacity: 1,
              }}
              exit={{ rotate: 180, scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Sun className="w-5 h-5 text-yellow-500" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full blur-xl" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 0], opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-12 h-12 border-2 border-yellow-400/50 rounded-full" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 180, scale: 0, opacity: 0, y: -20 }}
              animate={{ 
                rotate: 0, 
                scale: 1, 
                opacity: 1,
                y: 0
              }}
              exit={{ rotate: -180, scale: 0, opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5, 
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <Moon className="w-5 h-5 text-blue-400" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-blue-400/20 rounded-full blur-xl" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.5, 0], 
                  opacity: [0, 0.3, 0.1, 0] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 pointer-events-none"
              >
                <div className="w-1 h-1 bg-white rounded-full" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.5, 0], 
                  opacity: [0, 0.3, 0.1, 0] 
                }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                className="absolute bottom-0 left-0 pointer-events-none"
              >
                <div className="w-1 h-1 bg-white rounded-full" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.5, 0], 
                  opacity: [0, 0.3, 0.1, 0] 
                }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
                className="absolute top-1 left-1 pointer-events-none"
              >
                <div className="w-0.5 h-0.5 bg-white rounded-full" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      
      <div 
        className="absolute inset-0 rounded-md pointer-events-none transition-all duration-200 group-hover:ring-2 group-hover:ring-primary/30"
      />
    </Button>
  );
}
