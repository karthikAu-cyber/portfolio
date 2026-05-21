import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassPanel } from '../GlassPanel';
import { BookOpen, ExternalLink, X, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Automated SOC Threat Intelligence Platform with Real-Time SIEM Integration',
    category: 'Security Automation',
    description: 'Built a scanning platform targeting OWASP Top 10 vulnerabilities with real-time threat dashboards',
    details: 'Built a Python/Nmap/Burp Suite/SQLMap scanning platform targeting OWASP Top 10 vulnerabilities; integrated ELK Stack (Elasticsearch, Logstash, Kibana) for real-time threat dashboards — replicating enterprise SIEM and security monitoring workflows. Automated vulnerability report generation and real-time alerting to streamline incident management and remediation tracking.',
    technologies: ['Python', 'Nmap', 'Burp Suite', 'SQLMap', 'ELK Stack', 'OWASP Top 10'],
    githubUrl: 'https://github.com/karthikAu-cyber/SOC-Threat-Intelligence-Platform.git',
  },
  {
    id: 2,
    title: 'Multi-Modal Voice Biometric Authentication & Real-Time Spoofing Detection',
    category: 'Security Product Development',
    description: 'Engineered a privacy-preserving biometric security product using federated learning',
    details: 'Engineered a privacy-preserving security product using federated learning; conducted adversarial threat modelling (replay and deepfake voice injection attacks) to evaluate and harden system resilience. Implemented multi-modal authentication combining voice and face biometrics with real-time anti-spoofing detection.',
    technologies: ['Python', 'Federated Learning', 'Threat Modelling', 'Deep Learning', 'Anti-Spoofing'],
    githubUrl: 'https://github.com/karthikAu-cyber/biometric_auth.git',
  }
];

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <h2 className="text-4xl md:text-5xl text-white/90 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Classified Volumes
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Select a volume to access project archives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                <GlassPanel
                  className="p-6 h-full cursor-pointer hover:shadow-[0_0_40px_rgba(77,208,225,0.2)] transition-all duration-300"
                  glow
                >
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="w-10 h-10 text-[#4dd0e1]" />
                    <ExternalLink className="w-5 h-5 text-[#64ffda]/50" />
                  </div>
                  <div className="text-xs text-[#4dd0e1] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                    {project.category}
                  </div>
                  <h3 className="text-lg text-white/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#64ffda]">
                    <span>Access File</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </GlassPanel>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: 'rgba(10, 10, 15, 0.9)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              <GlassPanel className="p-8" glow>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-sm text-[#4dd0e1] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                      {selectedProject.category}
                    </div>
                    <h3 className="text-3xl text-white/90" style={{ fontFamily: 'var(--font-heading)' }}>
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button onClick={() => setSelectedProject(null)} className="text-white/50 hover:text-white/90 transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-white/70 leading-relaxed mb-6">{selectedProject.details}</p>
                <div className="mb-6">
                  <h4 className="text-lg text-white/90 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm rounded-md border text-white/80" style={{ backgroundColor: 'rgba(77, 208, 225, 0.05)', borderColor: 'rgba(77, 208, 225, 0.2)', fontFamily: 'var(--font-mono)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white transition-colors" style={{ backgroundColor: 'rgba(77, 208, 225, 0.1)', border: '1px solid rgba(77, 208, 225, 0.3)' }}>
                    <Github className="w-4 h-4" />
                    View Repository
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/90 hover:text-white transition-colors" style={{ backgroundColor: 'rgba(77, 208, 225, 0.1)', border: '1px solid rgba(77, 208, 225, 0.3)' }}>
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
