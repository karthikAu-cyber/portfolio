import React from 'react';
import { motion } from 'motion/react';
import { Shield, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(77, 208, 225, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(77, 208, 225, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 15, 0.8) 100%)'
        }}
      />

      {/* Content — split layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* LEFT: Text content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <Shield className="w-12 h-12 mb-4 text-[#4dd0e1] opacity-80 mx-auto md:mx-0" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="block text-5xl md:text-7xl text-white/90 mb-2">
                Karthikeyan K
              </span>
              <span className="block text-xl md:text-2xl text-[#4dd0e1]/80">
                SOC Analyst &amp; Cybersecurity Professional
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-white/60 max-w-xl mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Aspiring cybersecurity professional specializing in threat detection, vulnerability assessment, and security operations
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <ChevronDown 
                className="w-8 h-8 text-[#4dd0e1]/50 animate-bounce mx-auto md:mx-0" 
              />
            </motion.div>
          </div>

          {/* RIGHT: Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-shrink-0 order-1 md:order-2"
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div 
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, rgba(77, 208, 225, 0.4) 0%, transparent 70%)',
                  transform: 'scale(1.1)',
                }}
              />

              {/* Profile image */}
              <div 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
                style={{
                  border: '2px solid rgba(77, 208, 225, 0.3)',
                  boxShadow: '0 0 60px rgba(77, 208, 225, 0.15), inset 0 0 60px rgba(10, 10, 15, 0.5)',
                }}
              >
                <img 
                  src="/profile.png" 
                  alt="Karthikeyan K"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative orbit ring */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  border: '1px solid rgba(77, 208, 225, 0.1)',
                  transform: 'scale(1.15)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[#4dd0e1]/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-[#4dd0e1]/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-[#4dd0e1]/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-[#4dd0e1]/20" />
    </section>
  );
};
