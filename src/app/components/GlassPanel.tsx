import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ 
  children, 
  className = '', 
  blur = 'md',
  glow = false 
}) => {
  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };

  return (
    <div 
      className={`
        relative rounded-xl border border-white/10 
        ${blurClasses[blur]}
        ${glow ? 'shadow-[0_0_30px_rgba(77,208,225,0.1)]' : ''}
        ${className}
      `}
      style={{
        background: 'rgba(26, 31, 53, 0.6)',
      }}
    >
      {children}
    </div>
  );
};
