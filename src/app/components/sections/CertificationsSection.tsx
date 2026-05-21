import React from 'react';
import { motion } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import { Award, CheckCircle2 } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  id: string;
  verified: boolean;
}

const certifications: Certification[] = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    year: '2026',
    id: 'CEH',
    verified: true
  },
  {
    name: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC²',
    year: '2025–2028',
    id: 'CC',
    verified: true
  },
  {
    name: 'Ethical Hacker',
    issuer: 'Cisco',
    year: '2025',
    id: 'CISCO-EH',
    verified: true
  },
  {
    name: 'OWASP Top 10',
    issuer: 'Linux Foundation',
    year: '2025',
    id: 'OWASP',
    verified: true
  },
  {
    name: 'Critical Infrastructure Protection',
    issuer: 'OPSWAT',
    year: '2025–2026',
    id: 'CIP',
    verified: true
  },
  {
    name: 'SOC Project Training',
    issuer: 'Nullclass',
    year: '2025',
    id: 'SOC',
    verified: true
  },
  {
    name: 'Azure Fundamentals AZ-900',
    issuer: 'Microsoft',
    year: '2023',
    id: 'AZ-900',
    verified: true
  },
  {
    name: 'Cyber Threat Intelligence 101',
    issuer: 'arcX',
    year: '2025',
    id: 'CTI-101',
    verified: true
  }
];

export const CertificationsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white/90 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Verified Seals
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Professional certifications and accreditations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassPanel className="p-6 h-full hover:shadow-[0_0_40px_rgba(77,208,225,0.2)] transition-all duration-300" glow>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(77, 208, 225, 0.1)', border: '1px solid rgba(77, 208, 225, 0.2)' }}>
                    <Award className="w-8 h-8 text-[#4dd0e1]" />
                  </div>
                  {cert.verified && <CheckCircle2 className="w-5 h-5 text-[#64ffda]" />}
                </div>
                <div className="text-xs text-[#4dd0e1] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>{cert.id}</div>
                <h3 className="text-lg text-white/90 mb-2 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{cert.name}</h3>
                <div className="space-y-1 text-sm text-white/60">
                  <div>{cert.issuer}</div>
                  <div className="text-xs text-white/50" style={{ fontFamily: 'var(--font-mono)' }}>Issued: {cert.year}</div>
                </div>
                {cert.verified && (
                  <div className="mt-4 pt-4 border-t text-xs text-[#64ffda] flex items-center gap-1" style={{ borderColor: 'rgba(77, 208, 225, 0.2)' }}>
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Credential
                  </div>
                )}
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <GlassPanel className="p-6 text-center" glow>
            <p className="text-white/70">
              All certifications are actively maintained and regularly renewed. 
              <span className="text-[#4dd0e1] ml-2">
                Verification credentials available upon request.
              </span>
            </p>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};
