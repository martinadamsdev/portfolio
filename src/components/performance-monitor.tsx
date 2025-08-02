"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only monitor performance in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    function handlePerfEntry(entry: PerformanceEntry) {
      if (entry.entryType === "navigation") {
        const navEntry = entry as PerformanceNavigationTiming;
        console.log("Navigation timing:", {
          domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
          load: navEntry.loadEventEnd - navEntry.loadEventStart,
          firstPaint: performance.getEntriesByType("paint").find(e => e.name === "first-paint")?.startTime,
          firstContentfulPaint: performance.getEntriesByType("paint").find(e => e.name === "first-contentful-paint")?.startTime,
        });
      }
    }

    // Listen for navigation entries
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        handlePerfEntry(entry);
      }
    });

    observer.observe({ 
      entryTypes: ["navigation", "paint", "largest-contentful-paint"] 
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}