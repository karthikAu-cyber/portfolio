import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink,
  Terminal,
  Send,
  Copy,
  Shield, 
  Flag
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // ⚠️ REPLACE WITH YOUR ACTUAL KEYS FROM EMAILJS
    emailjs.sendForm('service_mwg3cb6', 'template_ehhlidi', formRef.current!, 'ar5jn8Jbt06ip8yHY')
      .then(() => {
          toast.success("Message transmitted successfully!");
          setIsSending(false);
          setFormData({ name: '', email: '', message: '' });
          (e.target as HTMLFormElement).reset();
      }, (error) => {
          console.error(error);
          toast.error("Transmission failed. Please try again.");
          setIsSending(false);
      });
  };

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'karthik40801@gmail.com',
      href: '#',
      action: 'copy',
      color: '#4dd0e1'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthikeyank08',
      href: 'https://www.linkedin.com/in/karthikeyank08/',
      action: 'link',
      color: '#4dd0e1'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/karthikAu-cyber',
      href: 'https://github.com/karthikAu-cyber',
      action: 'link',
      color: '#64ffda'
    },
    {
      icon: <Shield className="w-6 h-6" />, 
      label: 'TryHackMe',
      value: 'tryhackme.com/p/karthik40801', // Update this if needed
      href: 'https://tryhackme.com/p/karthik40801', 
      action: 'link',
      color: '#ff5252' 
    },
    {
      icon: <Flag className="w-6 h-6" />, 
      label: 'picoCTF',
      value: 'picoctf.org/users/karthikeyank', // Update this if needed
      href: 'https://play.picoctf.org/users/karthikeyank', 
      action: 'link',
      color: '#b388ff' 
    }
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof contactLinks[0]) => {
    if (link.action === 'copy') {
      e.preventDefault();
      navigator.clipboard.writeText(link.value);
      toast.success("Email copied to clipboard!");
    }
  };

  return (
    <section className="relative min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto"> {/* Slightly wider container for better balance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Terminal className="w-12 h-12 mx-auto mb-6 text-[#4dd0e1]" />
          <h2 
            className="text-4xl md:text-5xl text-white/90 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Secure Terminal
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Establish encrypted communication channel
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        {/* MAIN GRID - 2 COLUMNS */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-stretch">
          
          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full" // Forces this container to take full height
          >
            <GlassPanel className="p-8 h-full flex flex-col" glow> {/* h-full makes panel stretch */}
              <h3 
                className="text-2xl text-white/90 mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send Message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 flex-1 flex flex-col">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm text-white/70 mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg text-white/90 bg-transparent border focus:outline-none focus:border-[#4dd0e1] transition-colors"
                    style={{
                      borderColor: 'rgba(77, 208, 225, 0.2)',
                      fontFamily: 'var(--font-body)'
                    }}
                    placeholder="Karthikeyan K"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm text-white/70 mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    EMAIL
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg text-white/90 bg-transparent border focus:outline-none focus:border-[#4dd0e1] transition-colors"
                    style={{
                      borderColor: 'rgba(77, 208, 225, 0.2)',
                      fontFamily: 'var(--font-body)'
                    }}
                    placeholder="karthik40801@gmail.com"
                  />
                </div>

                <div className="flex-1">
                  <label 
                    htmlFor="message" 
                    className="block text-sm text-white/70 mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg text-white/90 bg-transparent border focus:outline-none focus:border-[#4dd0e1] transition-colors resize-none h-full min-h-[150px]"
                    style={{
                      borderColor: 'rgba(77, 208, 225, 0.2)',
                      fontFamily: 'var(--font-body)'
                    }}
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3 px-6 rounded-lg text-white/90 hover:text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(77,208,225,0.3)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  style={{
                    backgroundColor: 'rgba(77, 208, 225, 0.1)',
                    border: '1px solid rgba(77, 208, 225, 0.3)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <Send className="w-4 h-4" />
                  {isSending ? 'Transmitting...' : 'Transmit Message'}
                </button>
              </form>
            </GlassPanel>
          </motion.div>

          {/* RIGHT: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full" // Forces this container to take full height
          >
            <GlassPanel className="p-8 h-full" glow> {/* h-full makes panel stretch */}
              <h3 
                className="text-2xl text-white/90 mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Direct Links
              </h3>

              <div className="space-y-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    target={link.action === 'link' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:shadow-[0_0_30px_rgba(77,208,225,0.2)] transition-all duration-300 group cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(77, 208, 225, 0.05)',
                      border: '1px solid rgba(77, 208, 225, 0.2)'
                    }}
                  >
                    <div 
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: 'rgba(77, 208, 225, 0.1)',
                        color: link.color
                      }}
                    >
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div 
                        className="text-xs text-white/50 mb-1"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {link.label}
                      </div>
                      <div className="text-white/80 group-hover:text-white transition-colors break-all">
                        {link.value}
                      </div>
                    </div>
                    {link.action === 'copy' ? (
                        <Copy className="w-4 h-4 text-white/30 group-hover:text-[#4dd0e1] transition-colors" />
                    ) : (
                        <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#4dd0e1] transition-colors" />
                    )}
                  </a>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>

        {/* BOTTOM: Response Time Info (Moved to Middle) */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <GlassPanel className="p-6 max-w-3xl mx-auto" glow>
              <div 
                className="text-sm text-white/70 leading-relaxed flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-center"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <p>
                  <span className="text-[#4dd0e1] font-bold block md:inline md:mr-2">Response Time:</span> 
                  Typically within 24-48 hours
                </p>
                <p>
                  <span className="text-[#4dd0e1] font-bold block md:inline md:mr-2">Availability:</span> 
                  Open to full-time opportunities
                </p>
                <p>
                  <span className="text-[#4dd0e1] font-bold block md:inline md:mr-2">Work Mode:</span> 
                  Remote / On-site
                </p>
              </div>
            </GlassPanel>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div 
            className="text-sm text-white/40"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <p>© 2026 Karthikeyan K • Cybersecurity Portfolio</p>
            <p className="mt-2">Built with precision and secured by design</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};