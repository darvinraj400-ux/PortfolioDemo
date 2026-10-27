import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const reducedMotion = useReducedMotion();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasCompleted = useRef(false);

  useEffect(() => {
    // If reduced motion, skip loader entirely
    if (reducedMotion) {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete();
      }
      return;
    }

    // Safety timeout: force completion after 4 seconds no matter what
    const safetyTimeout = setTimeout(() => {
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 100);
      }
    }, 4000);

    try {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const next = prev + Math.random() * 15 + 5;
          if (next >= 100) {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              if (!hasCompleted.current) {
                hasCompleted.current = true;
                setIsExiting(true);
                setTimeout(() => {
                  onComplete();
                }, 600);
              }
            }, 300);
            return 100;
          }
          return next;
        });
      }, 100);
    } catch (error) {
      console.warn('Loader error:', error);
      if (!hasCompleted.current) {
        hasCompleted.current = true;
        onComplete();
      }
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(safetyTimeout);
    };
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="font-mono text-xs text-white/40 mb-8 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            ALEX MORI
          </motion.div>

          {/* Progress bar */}
          <div className="w-32 md:w-48 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[var(--color-electric)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.span
            className="font-mono text-[10px] text-white/20 mt-4"
            key={Math.floor(progress)}
          >
            {Math.min(Math.floor(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
