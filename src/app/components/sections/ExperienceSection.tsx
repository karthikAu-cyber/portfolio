import React from 'react';
import { motion } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import { Briefcase, Globe, Calendar } from 'lucide-react';

interface TimelineItem {
  type: 'experience' | 'virtual';
  title: string;
  organization: string;
  period: string;
  description: string[];
  location: string;
}

const timelineData: TimelineItem[] = [
  {
    type: 'experience',
    title: 'Cybersecurity with AI Trainee',
    organization: 'NIIT Foundation',
    period: 'July 2025 – August 2025',
    location: 'India',
    description: [
      'Developed and executed vulnerability scanning workflows on 20+ systems using Python/Selenium automation, reducing incident response time by 30%',
      'Implemented AES-256 and RSA encryption controls for secure system development; performed security product testing across simulated enterprise environments',
      'Applied IT security hardening measures (credential policies, network segmentation) aligned with governance and compliance frameworks'
    ]
  },
  {
    type: 'experience',
    title: 'Cybersecurity & Ethical Hacking Intern',
    organization: 'CODINTECH IT Solutions',
    period: 'May 2024 – June 2024',
    location: 'India',
    description: [
      'Performed penetration testing and threat simulation, mapping attack vectors through structured threat modelling exercises',
      'Built a secure backup system with AES-256/RSA encryption and SHA-256 integrity validation — a security product development initiative aligned with disaster recovery requirements'
    ]
  },
  {
    type: 'virtual',
    title: 'Shields Up: Cybersecurity Job Simulation',
    organization: 'AIG — Forage',
    period: '2025',
    location: 'Remote',
    description: [
      'Responded to a zero-day vulnerability (Log4Shell / CVE-2021-44228) with CVSS risk scoring and stakeholder communication under a live-style ransomware advisory',
      'Wrote a Python brute-force decryption script for ransomware response simulation',
      'Performed CISA advisory triage and vulnerability remediation workflows'
    ]
  },
  {
    type: 'virtual',
    title: 'Introduction to Cybersecurity Job Simulation',
    organization: 'Commonwealth Bank — Forage',
    period: '2025',
    location: 'Remote',
    description: [
      'Conducted attack surface analysis and security controls assessment for a BFSI environment',
      'Applied cybersecurity fundamentals including threat identification, risk awareness, and security policy review',
      'Exposure to banking-specific threat models and security frameworks'
    ]
  },
  {
    type: 'virtual',
    title: 'Cybersecurity Virtual Experience',
    organization: 'Deloitte — Forage',
    period: '2025',
    location: 'Remote',
    description: [
      'Assessed GDPR compliance implications of data breaches',
      'Drafted incident response documentation reducing simulated legal exposure by 15%'
    ]
  },
  {
    type: 'virtual',
    title: 'Cybersecurity Analyst Simulation',
    organization: 'Clifford Chance — Forage',
    period: '2025',
    location: 'Remote',
    description: [
      'Applied enterprise security practices — network monitoring, threat analysis, vulnerability assessment, and incident response',
      'Achieved 100% remediation rate on high-priority alerts',
      'Produced incident response documentation and data breach response workflows'
    ]
  },
  {
    type: 'virtual',
    title: 'Cybersecurity Virtual Experience',
    organization: 'Mastercard — Forage',
    period: '2025',
    location: 'Remote',
    description: [
      'Designed phishing control simulations for a mock enterprise',
      'Improved employee phishing detection rate by 30% through targeted security awareness recommendations'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white/90 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Archive Records
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Professional journey and virtual experience programmes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        <div className="relative">
          <div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4dd0e1] via-[#4dd0e1]/50 to-transparent"
            style={{ transform: 'translateX(-50%)' }}
          />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 
                  ? 'md:pr-[calc(50%+3rem)] md:text-right' 
                  : 'md:pl-[calc(50%+3rem)]'
              }`}
            >
              <div 
                className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full border-2 bg-[#0a0a0f]"
                style={{ 
                  borderColor: item.type === 'experience' ? '#4dd0e1' : '#b388ff',
                  transform: 'translate(-50%, -50%)'
                }}
              />

              <div className="ml-16 md:ml-0">
                <GlassPanel className="p-6" glow>
                  <div className="flex items-start gap-3 mb-4">
                    {item.type === 'experience' ? (
                      <Briefcase className="w-6 h-6 text-[#4dd0e1] flex-shrink-0" />
                    ) : (
                      <Globe className="w-6 h-6 text-[#b388ff] flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl text-white/90 mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h3>
                      <div className="text-[#4dd0e1] mb-2">{item.organization}</div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-white/50" style={{ fontFamily: 'var(--font-mono)' }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-white/70 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#4dd0e1] mt-1">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </GlassPanel>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
