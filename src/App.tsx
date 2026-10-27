import { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectArchive from './components/ProjectArchive';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import SectionDivider from './components/SectionDivider';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = ['hero', 'work', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isLoaded]);

  const handleNavigate = useCallback((section: string) => {
    const el = document.getElementById(section);
    if (el) {
      if ('scrollBehavior' in document.documentElement.style) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        el.scrollIntoView(true);
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="grain-overlay relative min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
        {/* Loading screen */}
        {!isLoaded && <Loader onComplete={handleLoadComplete} />}

        {/* Custom cursor */}
        <ErrorBoundary fallback={null}>
          <CustomCursor />
        </ErrorBoundary>

        {/* Navigation */}
        <ErrorBoundary fallback={
          <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)] px-5 py-4">
            <span className="font-mono text-sm text-[var(--color-text-primary)]">AM.</span>
          </nav>
        }>
          <Navigation onNavigate={handleNavigate} activeSection={activeSection} />
        </ErrorBoundary>

        {/* Main content */}
        <main 
          className={isLoaded ? 'opacity-100' : 'opacity-0'} 
          style={{ 
            transition: 'opacity 0.5s ease',
            WebkitTransition: 'opacity 0.5s ease',
          }}
        >
          <ErrorBoundary fallback={
            <section className="min-h-screen flex items-center justify-center px-5">
              <p className="text-[var(--color-text-muted)] font-mono text-sm">Content failed to load. Please refresh.</p>
            </section>
          }>
            <Hero />
          </ErrorBoundary>
          
          <SectionDivider label="Selected Projects" number="001" />
          
          <ErrorBoundary fallback={
            <section className="px-5 py-20">
              <p className="text-[var(--color-text-muted)] font-mono text-sm">Projects failed to load.</p>
            </section>
          }>
            <ProjectArchive />
          </ErrorBoundary>
          
          <SectionDivider label="Biography" number="002" />
          
          <ErrorBoundary fallback={
            <section className="px-5 py-20">
              <p className="text-[var(--color-text-muted)] font-mono text-sm">About section failed to load.</p>
            </section>
          }>
            <About />
          </ErrorBoundary>
          
          <SectionDivider label="Get in Touch" number="003" />
          
          <ErrorBoundary fallback={
            <section className="px-5 py-20">
              <p className="text-[var(--color-text-muted)] font-mono text-sm">Contact section failed to load.</p>
            </section>
          }>
            <Contact />
          </ErrorBoundary>
        </main>

        {/* Back to top */}
        <ErrorBoundary fallback={null}>
          <BackToTop />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
}
