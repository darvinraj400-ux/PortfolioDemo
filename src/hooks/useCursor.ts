import { useState, useEffect, useRef } from 'react';

export function useCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    try {
      // Check for touch device
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);

      if (isTouch) return;

      // Check if requestAnimationFrame is available
      if (typeof window === 'undefined' || !window.requestAnimationFrame) {
        return;
      }

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
          console.warn('Cursor animation error:', error);
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
      console.warn('useCursor initialization error:', error);
    }
  }, []);

  return { position, isHovering, setIsHovering, isVisible, isTouchDevice };
}
