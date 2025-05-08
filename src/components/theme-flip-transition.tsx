import { motion, AnimatePresence } from "motion/react";

export function ThemeFlipTransition({
  show,
  mode,
  origin,
}: {
  show: boolean;
  mode: "light" | "dark";
  origin: { x: number; y: number };
}) {
  // 计算 transformOrigin
  const transformOrigin = `${origin.x}px ${origin.y}px`;
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="theme-flip"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "hsl(var(--background))",
            pointerEvents: "none",
            transformOrigin,
            backdropFilter: "blur(8px)",
            opacity: 0.95,
          }}
        />
      )}
    </AnimatePresence>
  );
}
