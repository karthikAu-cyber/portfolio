import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Entry', href: '#hero' },
  { label: 'Profile', href: '#about' },
  { label: 'Arsenal', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Records', href: '#experience' },
  { label: 'Seals', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(10, 10, 15, 0.8)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled 
            ? '1px solid rgba(77, 208, 225, 0.1)' 
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#hero')}
          >
            <div 
              className="text-xl text-white/90"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              K<span className="text-[#4dd0e1]">.</span>K
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm transition-colors relative ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-[#4dd0e1]'
                    : 'text-white/70 hover:text-white/90'
                }`}
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4dd0e1]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white/90"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
            style={{ backgroundColor: 'rgba(10, 10, 15, 0.98)' }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <div 
                  className="text-xl text-white/90"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  K<span className="text-[#4dd0e1]">.</span>K
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center gap-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-2xl transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-[#4dd0e1]'
                        : 'text-white/70'
                    }`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
