import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { clients, collaborators } from '../data/projects';

export default function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="px-5 md:px-8 lg:px-12 py-20 md:py-32 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[var(--color-electric)] tracking-wider mb-12 md:mb-20"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          About — 002
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Bio column */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8 md:mb-12"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Alex Mori is a multidisciplinary designer working across brand systems, digital products, and spatial experiences.
            </motion.h2>

            <motion.div
              className="space-y-6 text-base md:text-lg text-white/50 leading-relaxed text-pretty"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                Based between Berlin and Tokyo, Alex has spent the past six years developing 
                design approaches that bridge the analytical and the intuitive. The work spans 
                identity systems for technology companies, digital products that prioritize 
                clarity, and art direction for cultural institutions.
              </p>
              <p>
                Before going independent, Alex spent time at Studio Dumbar (NL) and Google 
                Creative Lab (London), where the focus was always on finding the system within 
                the chaos — the underlying structure that makes complex ideas feel inevitable.
              </p>
              <p>
                The practice is rooted in research and experimentation. Every project begins 
                with questions, not answers. The goal is never decoration but discovery — 
                finding the form that the content was always searching for.
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              className="mt-10 md:mt-14 grid grid-cols-2 gap-6 md:gap-8"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Based</p>
                <p className="text-sm text-white/70">Berlin / Tokyo</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Available</p>
                <p className="text-sm text-white/70">Select projects, 2025</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Focus</p>
                <p className="text-sm text-white/70">Systems, Products, Space</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Education</p>
                <p className="text-sm text-white/70">RCA, London — MA Design</p>
              </div>
            </motion.div>
          </div>

          {/* Clients & collaborators column */}
          <div className="md:col-span-5 md:col-start-8 lg:col-start-8 lg:col-span-5">
            {/* Clients */}
            <motion.div
              className="mb-12 md:mb-16"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-6">
                Selected Clients
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {clients.map((client, i) => (
                  <motion.div
                    key={client}
                    className="py-2 border-b border-white/[0.04]"
                    initial={reducedMotion ? {} : { opacity: 0, x: 10 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.4 + i * 0.04, duration: 0.3 }}
                  >
                    <span className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                      {client}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Collaborators */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-6">
                Collaborators
              </h3>
              <div className="space-y-3">
                {collaborators.map((collab, i) => (
                  <motion.div
                    key={collab.name}
                    className="flex items-center justify-between py-2 border-b border-white/[0.04]"
                    initial={reducedMotion ? {} : { opacity: 0, x: 10 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.5 + i * 0.05, duration: 0.3 }}
                  >
                    <span className="text-sm text-white/50">{collab.name}</span>
                    <span className="font-mono text-[10px] text-white/25">{collab.role}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recognition */}
            <motion.div
              className="mt-12 md:mt-16"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-6">
                Recognition
              </h3>
              <div className="space-y-2 text-sm text-white/40">
                <p>Awwwards — Site of the Day × 3</p>
                <p>D&AD — Wood Pencil, Digital Design</p>
                <p>Type Directors Club — Certificate of Excellence</p>
                <p>Brand New — Noted, × 4</p>
                <p>Communication Arts — Design Annual</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
