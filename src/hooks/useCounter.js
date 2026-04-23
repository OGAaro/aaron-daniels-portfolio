import { useState, useEffect } from 'react';

/**
 * useCounter — animates a number from 0 up to `target` over `duration` ms.
 * Returns the current value on each render.
 *
 * The trigger param lets callers delay the animation (e.g. only start
 * counting once the element is visible on screen).
 */
export function useCounter(target, trigger = true, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const step = target / (duration / 16); // ~60fps → 16ms per frame

    const intervalId = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(intervalId);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(intervalId); // cleanup if component unmounts mid-animation
  }, [target, trigger, duration]);

  return value;
}
