import React from 'react';
import { certificationsData } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Card3D } from '../ui/Card3D';
import { Badge } from '../ui/Badge';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Verified Learning"
          title="Certifications & Credentials"
          subtitle="Official accreditations from Microsoft, CISCO, IIT Kharagpur/NPTEL, Infosys, and Coursera."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card3D depth={25} className="h-full flex flex-col justify-between space-y-4 bg-slate-900/90 border-slate-800 hover:border-brand-500/40">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <Badge variant="slate" size="sm">
                      {cert.year}
                    </Badge>
                  </div>

                  <h3 className="text-base font-bold text-text-primary mb-2 line-clamp-2">
                    {cert.name}
                  </h3>

                  <p className="text-xs font-semibold text-cyan-400">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                {cert.url && (
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-cyan-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
