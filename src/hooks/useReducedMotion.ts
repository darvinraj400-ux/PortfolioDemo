import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    try {
      // Check if matchMedia is available
      if (typeof window === 'undefined' || !window.matchMedia) {
        setReducedMotion(false);
        return;
      }

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => {
        setReducedMotion(e.matches);
      };

      // Use addEventListener if available (modern), otherwise addListener (legacy)
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
      } else if (mediaQuery.addListener) {
        // Fallback for older browsers (Safari < 14)
        mediaQuery.addListener(handler);
        return () => mediaQuery.removeListener(handler);
      }
    } catch (error) {
      console.warn('useReducedMotion error:', error);
      setReducedMotion(false);
    }
  }, []);

  return reducedMotion;
}
