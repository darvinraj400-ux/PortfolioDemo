import { motion } from 'motion/react';
import { useCursor } from '../hooks/useCursor';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function CustomCursor() {
  const { position, isHovering, isVisible, isTouchDevice } = useCursor();
  const reducedMotion = useReducedMotion();

  if (isTouchDevice || reducedMotion) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
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
