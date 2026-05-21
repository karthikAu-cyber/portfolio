import React from 'react';
import { motion } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import { 
  Shield, 
  Code, 
  Network, 
  Cloud, 
  Terminal,
  Lock
} from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Security Domains',
    color: '#4dd0e1',
    skills: [
      'IT Governance & Compliance',
      'Risk Management',
      'Threat Modelling',
      'Phishing Controls',
      'Incident Management',
      'Vulnerability Scanning',
      'Security Product Development'
    ]
  },
  {
    icon: <Terminal className="w-8 h-8" />,
    title: 'Tools & Platforms',
    color: '#64ffda',
    skills: [
      'ELK Stack (Elasticsearch, Logstash, Kibana)',
      'Nmap',
      'Burp Suite',
      'Wireshark',
      'SQLMap',
      'Metasploit (Basic)',
      'Selenium'
    ]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud & Infrastructure',
    color: '#4dd0e1',
    skills: [
      'Microsoft Azure (AZ-900)',
      'Cloud Security Concepts',
      'Network Security',
      'TCP/IP',
      'DNS',
      'Firewalls',
      'VPNs'
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Programming',
    color: '#64ffda',
    skills: [
      'Python (Automation & Scripting)',
      'SQL',
      'JavaScript'
    ]
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Frameworks & Standards',
    color: '#4dd0e1',
    skills: [
      'OWASP Top 10',
      'GDPR Compliance',
      'AES-256 / RSA Encryption',
      'SHA-256'
    ]
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Operating Systems',
    color: '#64ffda',
    skills: [
      'Windows',
      'Linux (Ubuntu, Kali)',
    ]
  }
];

export const SkillsSection: React.FC = () => {
  return (
    <section className="relative min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 
            className="text-4xl md:text-5xl text-white/90 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Technical Arsenal
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Tools, technologies, and frameworks in my security toolkit
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassPanel 
                className="p-6 h-full hover:shadow-[0_0_40px_rgba(77,208,225,0.2)] transition-shadow duration-300"
                glow
              >
                <div 
                  className="mb-4 flex items-center gap-3"
                  style={{ color: category.color }}
                >
                  {category.icon}
                  <h3 
                    className="text-xl text-white/90"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md border text-white/80"
                      style={{
                        backgroundColor: 'rgba(77, 208, 225, 0.05)',
                        borderColor: 'rgba(77, 208, 225, 0.2)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
