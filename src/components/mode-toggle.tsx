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

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextTheme = () => {
    if (!theme || theme === "system") return "dark";
    return theme === "light" ? "dark" : "light";
  };

  const handleThemeChange = () => {
    setTheme(nextTheme());
  };

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={handleThemeChange}
      className="flex items-center relative overflow-hidden"
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          {current === "light" ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(255,200,0,0.5)]" />
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="w-5 h-5 text-blue-500 drop-shadow-[0_0_8px_rgba(80,120,255,0.5)]" />
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </Button>
  );
}
