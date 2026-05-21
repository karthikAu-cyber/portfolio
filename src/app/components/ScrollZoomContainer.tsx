import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollZoomContainerProps {
  children: ReactNode;
}

export const ScrollZoomContainer: React.FC<ScrollZoomContainerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate zoom scale based on scroll (1 to 1.5)
  const scale = 1 + (scrollProgress * 0.5);

  return (
    <div ref={containerRef} className="relative">
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center top',
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface ParallaxSectionProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  depth = 0,
  className = ''
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      
      // Calculate parallax offset based on depth
      const parallaxOffset = scrolled * depth * 0.1;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [depth]);

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.05s ease-out',
      }}
    >
      {children}
    </div>
  );
};
