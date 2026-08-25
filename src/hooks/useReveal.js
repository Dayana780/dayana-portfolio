import { useEffect, useRef, useState } from "react";

// Watches an element and flips `isVisible` to true the first time it
// scrolls into view. Used to fade sections in gently as the user scrolls,
// without pulling in an animation library.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Older browsers without IntersectionObserver just see the content
    // immediately — no broken/hidden state.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // reveal once, then stop watching
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
