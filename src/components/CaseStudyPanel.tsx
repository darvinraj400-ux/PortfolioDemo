import { motion } from 'motion/react';
import type { Project } from '../data/projects';

interface CaseStudyPanelProps {
  project: Project;
  reducedMotion: boolean;
}

export default function CaseStudyPanel({ project, reducedMotion }: CaseStudyPanelProps) {
  return (
    <motion.div
      id={`case-study-${project.id}`}
      className="mt-4 md:mt-6 border border-white/[0.06] rounded-sm overflow-hidden bg-[var(--color-surface)]"
      initial={reducedMotion ? {} : { opacity: 0, height: 0 }}
      animate={reducedMotion ? {} : { opacity: 1, height: 'auto' }}
      exit={reducedMotion ? {} : { opacity: 0, height: 0 }}
      transition={reducedMotion ? {} : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      role="region"
      aria-label={`Case study for ${project.title}`}
    >
      <div className="p-5 md:p-8 lg:p-10">
        {/* Header info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Client</p>
            <p className="text-sm text-white/70">{project.client}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Role</p>
            <p className="text-sm text-white/70">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-2">Year</p>
            <p className="text-sm text-white/70">{project.year}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 md:mb-12">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/80 text-pretty max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-electric)] mb-3">
              Challenge
            </h4>
            <p className="text-sm md:text-base text-white/50 leading-relaxed text-pretty">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-electric)] mb-3">
              Solution
            </h4>
            <p className="text-sm md:text-base text-white/50 leading-relaxed text-pretty">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-8 md:mb-12">
          <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-3">
            Palette
          </h4>
          <div className="flex gap-3">
            {project.colors.map((color, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-sm border border-white/10"
                  style={{ backgroundColor: color }}
                />
                <span className="font-mono text-[9px] text-white/30 uppercase">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-wider text-white/30 mb-4">
            Results
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-3 md:p-4 bg-white/[0.02] rounded-sm border border-white/[0.04]"
                initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={reducedMotion ? {} : { delay: 0.2 + i * 0.08, duration: 0.3 }}
              >
                <span className="text-[var(--color-electric)] mt-0.5 text-xs">→</span>
                <span className="text-xs md:text-sm text-white/60">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
