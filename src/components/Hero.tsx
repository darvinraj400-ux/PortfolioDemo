import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Hero() {
  const reducedMotion = useReducedMotion();

  const duration = reducedMotion ? 0 : 0.8;
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-5 md:px-8 lg:px-12 pb-16 md:pb-24 pt-24 overflow-hidden"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-[15%] w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-[45%] w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-[75%] w-px h-full bg-white/[0.03]" />
        <div className="absolute top-[30%] left-0 w-full h-px bg-white/[0.03]" />
        <div className="absolute top-[60%] left-0 w-full h-px bg-white/[0.03]" />
      </div>

      {/* Floating accent elements */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-2 h-2 md:w-3 md:h-3 bg-[var(--color-electric)] rounded-full"
        animate={reducedMotion ? {} : { y: [0, -15, 0] }}
        transition={reducedMotion ? {} : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/3 left-[8%] w-16 h-16 md:w-24 md:h-24 border border-[var(--color-electric)]/20 rotate-12"
        animate={reducedMotion ? {} : { rotate: [12, 15, 12] }}
        transition={reducedMotion ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px]">
        {/* Statement */}
        <motion.p
          className="font-mono text-xs md:text-sm text-[var(--color-electric)] mb-6 md:mb-8 tracking-wider"
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={reducedMotion ? { duration: 0 } : { duration, delay: 0.1, ease }}
        >
          Multidisciplinary Designer — Est. 2018
        </motion.p>

        <motion.h1
          className="text-[clamp(2.5rem,8vw,8rem)] font-light leading-[0.9] tracking-[-0.03em] mb-8 md:mb-12"
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: reducedMotion ? 0 : 1, delay: 0.2, ease }}
        >
          <span className="block">Design is</span>
          <span className="block mt-1 md:mt-2">
            the space
            <span className="text-[var(--color-electric)]"> between </span>
          </span>
          <span className="block mt-1 md:mt-2 italic font-light text-white/60">
            intention &amp; form
          </span>
        </motion.h1>

        {/* Philosophy text */}
        <motion.div
          className="max-w-xl md:max-w-lg"
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={reducedMotion ? { duration: 0 } : { duration, delay: 0.4, ease }}
        >
          <p className="text-base md:text-lg text-white/50 leading-relaxed text-pretty">
            I work at the intersection of brand systems, digital products, and 
            spatial experiences. Every project is an opportunity to create something 
            that didn't exist before — to find the form that the idea was always 
            searching for.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 md:mt-24 flex items-center gap-4"
          initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={reducedMotion ? { duration: 0 } : { duration, delay: 0.6, ease }}
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[var(--color-electric)] to-transparent"
            animate={reducedMotion ? {} : { scaleY: [1, 0.5, 1] }}
            transition={reducedMotion ? {} : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Scroll to explore
          </span>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/[0.05] py-3 md:py-4"
        initial={reducedMotion ? {} : { opacity: 0 }}
        whileInView={reducedMotion ? {} : { opacity: 1 }}
        viewport={{ once: true }}
        transition={reducedMotion ? { duration: 0 } : { duration, delay: 0.8, ease }}
        aria-hidden="true"
      >
        <div className="marquee-track animate-marquee">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/20 whitespace-nowrap px-8">
            Brand Identity — Digital Products — Art Direction — Spatial Design — Typography — Motion — Systems — Research — Brand Identity — Digital Products — Art Direction — Spatial Design — Typography — Motion — Systems — Research —&nbsp;
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/20 whitespace-nowrap px-8">
            Brand Identity — Digital Products — Art Direction — Spatial Design — Typography — Motion — Systems — Research — Brand Identity — Digital Products — Art Direction — Spatial Design — Typography — Motion — Systems — Research —&nbsp;
          </span>
        </div>
      </motion.div>
    </section>
  );
}
