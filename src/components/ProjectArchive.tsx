import { useState, useCallback } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { projects, categories, type Category, type Project } from '../data/projects';
import CaseStudyPanel from './CaseStudyPanel';

export default function ProjectArchive() {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleFilterChange = useCallback((filter: Category | 'all') => {
    setActiveFilter(filter);
    setExpandedProject(null);
  }, []);

  const toggleProject = useCallback((id: string) => {
    setExpandedProject(prev => prev === id ? null : id);
  }, []);

  const getCompositionClass = (composition: Project['composition']) => {
    switch (composition) {
      case 'left-heavy': return 'md:col-span-7';
      case 'right-heavy': return 'md:col-start-5 md:col-span-8';
      case 'centered': return 'md:col-start-3 md:col-span-8';
      case 'diagonal': return 'md:col-start-2 md:col-span-7';
      case 'split': return 'md:col-span-6';
      case 'stacked': return 'md:col-start-4 md:col-span-9';
      default: return 'md:col-span-6';
    }
  };

  const getVisualStyle = (project: Project) => {
    const styles: Record<string, React.CSSProperties> = {
      'left-heavy': { background: `linear-gradient(135deg, ${project.colors[0]}20 0%, transparent 60%)` },
      'right-heavy': { background: `linear-gradient(225deg, ${project.colors[0]}20 0%, transparent 60%)` },
      'centered': { background: `radial-gradient(ellipse at center, ${project.colors[0]}18 0%, transparent 70%)` },
      'diagonal': { background: `linear-gradient(45deg, ${project.colors[0]}15 0%, ${project.colors[1] || project.colors[0]}10 50%, transparent 100%)` },
      'split': { background: `linear-gradient(90deg, ${project.colors[0]}18 0%, transparent 50%, ${project.colors[0]}10 100%)` },
      'stacked': { background: `linear-gradient(180deg, ${project.colors[0]}12 0%, ${project.colors[0]}20 100%)` },
    };
    return styles[project.composition] || {};
  };

  return (
    <section id="work" className="px-5 md:px-8 lg:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="mb-12 md:mb-20"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={reducedMotion ? {} : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs text-[var(--color-electric)] tracking-wider mb-4">
            Selected Work — 2023/2024
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[var(--color-text-primary)]">
            Project<br />
            <span className="text-[var(--color-text-muted)]">Archive</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12 md:mb-16 flex flex-wrap gap-2 md:gap-3"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reducedMotion ? {} : { duration: 0.5, delay: 0.2 }}
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              role="tab"
              aria-selected={activeFilter === cat.id}
              className={`font-mono text-[11px] md:text-xs uppercase tracking-wider px-4 py-2.5 md:py-3 rounded-full border transition-all duration-300 min-h-[44px] ${
                activeFilter === cat.id
                  ? 'bg-[var(--color-text-primary)] border-[var(--color-text-primary)] text-[var(--color-bg-primary)]'
                  : 'bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-primary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8"
            layout={reducedMotion ? false : true}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className={`project-card col-span-1 ${getCompositionClass(project.composition)} ${
                    index % 3 === 0 ? 'md:mt-0' : index % 3 === 1 ? 'md:mt-8' : 'md:mt-4'
                  }`}
                  layout={reducedMotion ? false : true}
                  initial={reducedMotion ? {} : { opacity: 0, y: 40 }}
                  animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                  exit={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
                  transition={reducedMotion ? {} : { duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="w-full text-left group"
                    aria-expanded={expandedProject === project.id}
                    aria-controls={`case-study-${project.id}`}
                  >
                    {/* Visual container */}
                    <div
                      className="relative overflow-hidden rounded-sm mb-4 md:mb-6 aspect-video-fallback bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                      style={{
                        ...getVisualStyle(project),
                        aspectRatio: '4 / 3',
                      }}
                    >
                      <ProjectVisual project={project} index={index} reducedMotion={reducedMotion} />
                      
                      {/* Category tag */}
                      <div className="absolute top-3 left-3 md:top-4 md:left-4">
                        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)]/80 backdrop-blur-sm px-2 py-1 rounded border border-[var(--color-border)]">
                          {project.category}
                        </span>
                      </div>

                      {/* Year */}
                      <div className="absolute top-3 right-3 md:top-4 md:right-4">
                        <span className="font-mono text-[9px] md:text-[10px] text-[var(--color-text-muted)]">
                          {project.year}
                        </span>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-primary)]/80 flex items-center justify-center group-hover:border-[var(--color-electric)] transition-colors duration-300"
                        animate={reducedMotion ? {} : { rotate: expandedProject === project.id ? 45 : 0 }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-electric)] transition-colors">
                          <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div className="flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-electric)] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="font-mono text-[10px] md:text-xs text-[var(--color-text-muted)] mt-1 tracking-wide">
                          {project.subtitle}
                        </p>
                      </div>
                      <span className="font-mono text-[10px] text-[var(--color-text-muted)]/50 hidden md:block">
                        0{index + 1}
                      </span>
                    </div>
                  </button>

                  {/* Expandable case study */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <CaseStudyPanel project={project} reducedMotion={reducedMotion} />
                    )}
                  </AnimatePresence>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="font-mono text-sm text-[var(--color-text-muted)]">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// Abstract visual composition for each project
function ProjectVisual({ project, index, reducedMotion }: { project: Project; index: number; reducedMotion: boolean }) {
  const color = project.colors[0];
  
  const compositions = [
    <div key="0" className="absolute inset-0 flex items-center">
      <motion.div
        className="w-[60%] h-[80%] rounded-full border border-current opacity-30"
        style={{ color, marginLeft: '-10%' }}
        animate={reducedMotion ? {} : { scale: [1, 1.02, 1] }}
        transition={reducedMotion ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute right-[15%] top-[20%] w-20 h-20 md:w-32 md:h-32 bg-current opacity-10" style={{ color }} />
      <div className="absolute right-[25%] bottom-[25%] font-mono text-[8vw] md:text-[5vw] font-bold opacity-[0.08]" style={{ color }}>
        {project.title.charAt(0)}
      </div>
    </div>,
    <div key="1" className="absolute inset-0">
      <motion.div
        className="absolute right-[5%] top-[15%] w-[45%] h-[70%] border border-current opacity-25"
        style={{ color }}
        animate={reducedMotion ? {} : { y: [0, -5, 0] }}
        transition={reducedMotion ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute right-[15%] top-[25%] w-[35%] h-[50%] bg-current opacity-[0.1]" style={{ color }} />
      <div className="absolute left-[10%] bottom-[15%] w-1 h-20 md:w-1.5 md:h-32 bg-current opacity-40" style={{ color }} />
    </div>,
    <div key="2" className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-[50%] h-[50%] border border-current opacity-25"
        style={{ color }}
        animate={reducedMotion ? {} : { rotate: [0, 90] }}
        transition={reducedMotion ? {} : { duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute w-[30%] h-[30%] border border-current opacity-20 rotate-45" style={{ color }} />
      <div className="absolute w-3 h-3 rounded-full bg-current opacity-50" style={{ color }} />
    </div>,
    <div key="3" className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-current opacity-20"
            style={{
              color,
              width: `${60 + i * 10}%`,
              top: `${20 + i * 15}%`,
              left: `${i * 5}%`,
              transform: `rotate(${-15 + i * 3}deg)`,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute bottom-[20%] right-[20%] w-4 h-4 md:w-6 md:h-6 rounded-full bg-current opacity-40"
        style={{ color }}
        animate={reducedMotion ? {} : { scale: [1, 1.3, 1] }}
        transition={reducedMotion ? {} : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>,
    <div key="4" className="absolute inset-0 flex">
      <div className="w-1/2 h-full border-r border-current/20 flex items-center justify-center" style={{ borderColor: `${color}30` }}>
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 border-2 border-current opacity-30"
          style={{ color }}
          animate={reducedMotion ? {} : { rotate: [0, 360] }}
          transition={reducedMotion ? {} : { duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <span className="font-mono text-2xl md:text-4xl font-bold opacity-[0.1]" style={{ color }}>
          {project.title}
        </span>
      </div>
    </div>,
    <div key="5" className="absolute inset-0 flex flex-col justify-center gap-2 px-8">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="h-px bg-current"
          style={{ color, opacity: 0.2 + i * 0.05, width: `${100 - i * 15}%` }}
          animate={reducedMotion ? {} : { scaleX: [1, 0.8, 1] }}
          transition={reducedMotion ? {} : { duration: 4, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-widest opacity-30" style={{ color }}>
        {project.year}
      </div>
    </div>,
    <div key="6" className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-px p-6 opacity-30">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="border border-current/30"
          style={{
            color,
            backgroundColor: i === index % 12 ? `${color}20` : 'transparent',
          }}
        />
      ))}
    </div>,
  ];

  return compositions[index % compositions.length];
}
