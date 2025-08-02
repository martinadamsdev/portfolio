"use client";

import dynamic from "next/dynamic";
import { TestimonialSkeleton } from "./loading-skeleton";

// Lazy load client-only components
export const LazyTestimonials = dynamic(
  () => import("./testimonials"),
  {
    loading: () => (
      <section className="py-20 px-6 bg-muted/20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <TestimonialSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    ),
    ssr: false,
  }
);

export const LazyScrollToTop = dynamic(
  () => import("./scroll-to-top"),
  {
    ssr: false,
  }
);

export const LazySmoothScroll = dynamic(
  () => import("./smooth-scroll"),
  {
    ssr: false,
  }
);