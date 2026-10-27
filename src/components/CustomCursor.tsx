import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasError, setHasError] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: -100, y: -100 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Check for touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    // Don't initialize cursor on touch devices or if reduced motion is preferred
    if (isTouch || reducedMotion) return;

    // Check if pointer is fine (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    try {
      const handleMouseMove = (e: MouseEvent) => {
        targetRef.current = { x: e.clientX, y: e.clientY };
        setIsVisible(true);
      };

      const handleMouseLeave = () => {
        setIsVisible(false);
      };

      const handleMouseEnter = () => {
        setIsVisible(true);
      };

      const animate = () => {
        try {
          setPosition(prev => ({
            x: prev.x + (targetRef.current.x - prev.x) * 0.15,
            y: prev.y + (targetRef.current.y - prev.y) * 0.15,
          }));
          rafRef.current = requestAnimationFrame(animate);
        } catch (error) {
          console.warn('Custom cursor animation error:', error);
          setHasError(true);
        }
      };

      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      rafRef.current = requestAnimationFrame(animate);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
      };
    } catch (error) {
      console.warn('Custom cursor initialization error:', error);
      setHasError(true);
    }
  }, [reducedMotion]);

  // Don't render if touch device, reduced motion, or error occurred
  if (isTouchDevice || reducedMotion || hasError) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          mixBlendMode: 'difference',
        }}
        animate={{
          x: position.x - (isHovering ? 24 : 16),
          y: position.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.5,
        }}
        aria-hidden="true"
      >
        <div className={`w-full h-full rounded-full border transition-colors duration-200 ${
          isHovering ? 'border-[var(--color-electric)]' : 'border-white/50'
        }`} />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          mixBlendMode: 'difference',
        }}
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40,
          mass: 0.3,
        }}
        aria-hidden="true"
      >
        <div className="w-1 h-1 rounded-full bg-white" />
      </motion.div>
    </>
  );
}
