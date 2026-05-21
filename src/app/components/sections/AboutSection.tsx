import React from 'react';
import { motion } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import { User, Target, Award, GraduationCap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 
            className="text-4xl md:text-5xl text-white/90 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Knowledge Profile
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassPanel className="p-8 h-full" glow>
              <User className="w-10 h-10 text-[#4dd0e1] mb-4" />
              <h3 
                className="text-2xl text-white/90 mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Profile Dossier
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Cybersecurity fresher with hands-on experience in vulnerability scanning, penetration testing, 
                and security operations. Passionate about building resilient defense systems, identifying 
                vulnerabilities through structured threat modelling, and streamlining incident response 
                workflows through automation.
              </p>
              <p className="text-white/70 leading-relaxed">
                CEH certified with all 5 Forage programmes complete. Experienced with ELK SIEM, Azure, 
                MITRE ATT&amp;CK, and enterprise security tools. Focused on SOC L1 operations, threat detection 
                &amp; incident response.
              </p>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <GlassPanel className="p-6" glow>
              <GraduationCap className="w-8 h-8 text-[#64ffda] mb-3" />
              <h4 
                className="text-xl text-white/90 mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Education
              </h4>
              <div className="mb-2">
                <div className="text-white/90 font-medium">B.Tech – Computer Engineering</div>
                <div className="text-[#4dd0e1] text-sm">Specialization in Cyber Security</div>
              </div>
              <div className="text-white/70 text-sm">Karunya Institute of Technology and Sciences, Coimbatore</div>
              <div 
                className="text-white/50 text-xs mt-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                CGPA: 7.35 • Cybersecurity Engineer '26
              </div>
            </GlassPanel>

            {/* Specializations */}
            <GlassPanel className="p-6" glow>
              <Award className="w-8 h-8 text-[#64ffda] mb-3" />
              <h4 
                className="text-xl text-white/90 mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Specializations
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-white/70">• Vulnerability Scanning</div>
                <div className="text-white/70">• Threat Modelling</div>
                <div className="text-white/70">• Incident Management</div>
                <div className="text-white/70">• Risk Management</div>
                <div className="text-white/70">• IT Governance</div>
                <div className="text-white/70">• Security Product Dev</div>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
