import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Check if addEventListener is available
    if (typeof window === 'undefined' || !window.addEventListener) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    try {
      // Check if smooth scroll is supported
      if ('scrollBehavior' in document.documentElement.style && !reducedMotion) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.warn('Scroll to top failed:', error);
      // Last resort fallback
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/15 bg-black/80 backdrop-blur-sm flex items-center justify-center hover:border-[var(--color-electric)] transition-colors"
          style={{
            WebkitBackdropFilter: 'blur(8px)',
            backdropFilter: 'blur(8px)',
          }}
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
          animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
          exit={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
          transition={reducedMotion ? {} : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Back to top"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/60">
            <path d="M7 12V2M7 2L2 7M7 2L12 7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
