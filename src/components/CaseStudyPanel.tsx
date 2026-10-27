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
      className="mt-4 md:mt-6 border border-[var(--color-border)] rounded-sm overflow-hidden bg-[var(--color-bg-secondary)]"
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
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">Client</p>
            <p className="text-sm text-[var(--color-text-secondary)]">{project.client}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">Role</p>
            <p className="text-sm text-[var(--color-text-secondary)]">{project.role}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-2">Year</p>
            <p className="text-sm text-[var(--color-text-secondary)]">{project.year}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 md:mb-12">
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-[var(--color-text-primary)] text-pretty max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-electric)] mb-3">
              Challenge
            </h4>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed text-pretty">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-electric)] mb-3">
              Solution
            </h4>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed text-pretty">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Color palette */}
        <div className="mb-8 md:mb-12">
          <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
            Palette
          </h4>
          <div className="flex gap-3 flex-wrap">
            {project.colors.map((color, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-sm border border-[var(--color-border)]"
                  style={{ backgroundColor: color }}
                />
                <span className="font-mono text-[9px] text-[var(--color-text-muted)] uppercase">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
            Results
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.results.map((result, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-3 md:p-4 bg-[var(--color-bg-primary)] rounded-sm border border-[var(--color-border)]"
                initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                transition={reducedMotion ? {} : { delay: 0.2 + i * 0.08, duration: 0.3 }}
              >
                <span className="text-[var(--color-electric)] mt-0.5 text-xs">→</span>
                <span className="text-xs md:text-sm text-[var(--color-text-secondary)]">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
