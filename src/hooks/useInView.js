import { useState, useEffect, useRef } from 'react';

/**
 * useInView — returns [ref, isInView].
 * Attach the ref to any element; isInView flips true the first time it
 * scrolls into the viewport, then stays true (we disconnect the observer
 * so it doesn't fire repeatedly).
 *
 * Usage:
 *   const [ref, inView] = useInView();
 *   return <div ref={ref} className={inView ? 'visible' : ''}>...</div>;
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // one-shot: fire once, then stop watching
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect(); // cleanup when component unmounts
  }, [threshold]);

  return [ref, inView];
}
