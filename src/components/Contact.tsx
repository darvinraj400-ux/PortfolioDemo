import { useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function Contact() {
  const reducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const email = 'alex@alexmori.design';

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        
        try {
          document.execCommand('copy');
        } catch (err) {
          console.warn('Copy failed:', err);
          document.body.removeChild(textarea);
          return;
        }
        
        document.body.removeChild(textarea);
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.warn('Copy email failed:', error);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/alexmori', handle: '@alexmori' },
    { name: 'Twitter/X', url: 'https://x.com/alexmori', handle: '@alexmori' },
    { name: 'Are.na', url: 'https://are.na/alex-mori', handle: 'alex-mori' },
    { name: 'Read.cv', url: 'https://read.cv/alexmori', handle: 'alexmori' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/alexmori', handle: 'alexmori' },
  ];

  return (
    <section id="contact" className="px-5 md:px-8 lg:px-12 py-20 md:py-32 border-t border-[var(--color-border)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[var(--color-electric)] tracking-wider mb-12 md:mb-20"
          initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Contact — 003
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* CTA */}
          <div className="md:col-span-7 lg:col-span-6">
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 md:mb-8 text-[var(--color-text-primary)]"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Let's make<br />
              <span className="text-[var(--color-text-muted)]">something</span><br />
              <span className="text-[var(--color-electric)]">together.</span>
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-md mb-10 text-pretty"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Currently accepting select projects for 2025. Interested in collaboration, 
              commissions, or just want to say hello?
            </motion.p>

            {/* Email */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Email
              </p>
              <button
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 min-h-[44px]"
                aria-label={`Copy email address: ${email}`}
              >
                <span className="text-lg md:text-xl text-[var(--color-text-primary)] group-hover:text-[var(--color-electric)] transition-colors duration-300">
                  {email}
                </span>
                <motion.span
                  className="font-mono text-[10px] text-[var(--color-text-muted)] group-hover:text-[var(--color-electric)] transition-colors"
                  animate={reducedMotion ? {} : { opacity: copied ? 1 : [0.3, 0.6, 0.3] }}
                  transition={reducedMotion ? {} : { duration: 2, repeat: Infinity }}
                >
                  {copied ? '✓ Copied' : '[ Copy ]'}
                </motion.span>
              </button>
            </motion.div>
          </div>

          {/* Social links */}
          <div className="md:col-span-5 md:col-start-8 lg:col-start-8 lg:col-span-4">
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)] mb-6">
                Elsewhere
              </p>
              <nav className="space-y-1">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 md:py-4 border-b border-[var(--color-border-light)] group min-h-[44px]"
                    initial={reducedMotion ? {} : { opacity: 0, x: 10 }}
                    whileInView={reducedMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={reducedMotion ? { duration: 0 } : { delay: 0.5 + i * 0.06, duration: 0.3 }}
                  >
                    <span className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-200">
                      {link.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors">
                        {link.handle}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[var(--color-text-muted)] group-hover:text-[var(--color-electric)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="mt-10 md:mt-14 p-4 md:p-6 border border-[var(--color-border)] rounded-sm bg-[var(--color-bg-secondary)]"
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                  Available for projects
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Currently booking Q2–Q3 2025. Minimum engagement: 4 weeks.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-24 md:mt-32 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={reducedMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.7 }}
        >
          <p className="font-mono text-[10px] text-[var(--color-text-muted)]">
            © 2024 Alex Mori. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-[var(--color-text-muted)]">
            Designed & developed with intention.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
