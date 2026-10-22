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

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    if (!isLoaded) return;

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
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="grain-overlay relative min-h-screen bg-black text-white">
      {/* Loading screen */}
      {!isLoaded && <Loader onComplete={handleLoadComplete} />}

      {/* Custom cursor - desktop only */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main content */}
      <main className={isLoaded ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.5s ease' }}>
        <Hero />
        <SectionDivider label="Selected Projects" number="001" />
        <ProjectArchive />
        <SectionDivider label="Biography" number="002" />
        <About />
        <SectionDivider label="Get in Touch" number="003" />
        <Contact />
      </main>

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}
