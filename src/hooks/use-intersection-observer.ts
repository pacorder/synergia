"use client";

import type { RefObject } from "react";
import { useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = true,
  }: Args
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = elementRef?.current; 
    
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIntersecting(true);
            if (freezeOnceVisible) {
                observer.unobserve(node);
            }
        } else {
            setIntersecting(false)
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();

  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible]);

  return isIntersecting;
}
