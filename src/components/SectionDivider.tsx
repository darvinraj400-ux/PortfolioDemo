import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionDividerProps {
  label?: string;
  number?: string;
}

export default function SectionDivider({ label, number }: SectionDividerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className="px-5 md:px-8 lg:px-12 py-4 md:py-6"
      initial={reducedMotion ? {} : { opacity: 0 }}
      whileInView={reducedMotion ? {} : { opacity: 1 }}
      viewport={{ once: true }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.6 }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center gap-4">
        <div className="flex-1 h-px bg-white/[0.04]" />
        {number && (
          <span className="font-mono text-[9px] text-white/15 tracking-wider">
            {number}
          </span>
        )}
        {label && (
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/15">
            {label}
          </span>
        )}
        <div className="flex-1 h-px bg-white/[0.04]" />
      </div>
    </motion.div>
  );
}
