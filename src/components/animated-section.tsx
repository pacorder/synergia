"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "opacity-0 transform-gpu translate-y-8 transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "",
        className
      )}
    >
      {children}
    </section>
  );
}
