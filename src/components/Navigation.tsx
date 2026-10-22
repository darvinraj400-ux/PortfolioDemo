import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const headerInitial = reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 };
  const headerAnimate = { opacity: 1, y: 0 };
  const headerTransition = reducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <>
      {/* Top bar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 safe-top transition-colors duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={headerInitial}
        animate={headerAnimate}
        transition={headerTransition}
      >
        <nav className="flex items-center justify-between px-5 md:px-8 lg:px-12 h-14 md:h-16">
          <button
            onClick={() => handleNavigate('hero')}
            className="font-mono text-sm tracking-tight text-white hover:text-[var(--color-electric)] transition-colors min-h-[44px] min-w-[44px] flex items-center"
            aria-label="Go to top"
          >
            AM<span className="text-[var(--color-electric)]">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors min-h-[44px] flex items-center ${
                  activeSection === item.id
                    ? 'text-[var(--color-electric)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? 'top-2.5 rotate-45' : 'top-0'
              }`} />
              <span className={`absolute left-0 top-2.5 w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`} />
              <span className={`absolute left-0 w-6 h-px bg-white transition-all duration-300 ${
                isOpen ? 'top-2.5 -rotate-45' : 'top-5'
              }`} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className="text-left py-4 min-h-[44px]"
                  initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
                  animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: reducedMotion ? 0 : 0.1 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-mono text-xs text-[var(--color-electric)] mr-4">0{i + 1}</span>
                  <span className="text-4xl md:text-5xl font-light tracking-tight">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </nav>

            <motion.div
              className="absolute bottom-12 left-8 right-8"
              initial={reducedMotion ? {} : { opacity: 0 }}
              animate={reducedMotion ? {} : { opacity: 1 }}
              transition={{ delay: reducedMotion ? 0 : 0.5 }}
            >
              <p className="font-mono text-xs text-white/40">
                alex@alexmori.design
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
