import React from 'react';
import { personalDetails } from '../../data/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Card3D } from '../ui/Card3D';
import { CyberTerminal } from '../ui/CyberTerminal';
import { Badge } from '../ui/Badge';
import { GraduationCap, User, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../lib/animations';

export const About: React.FC = () => {
  const highlights = [
    'MERN Full-Stack Development Expert',
    'Algorithm & Data Structure Specialist',
    'AI & Agentic Systems Enthusiast',
    'Active Competitive Programmer (1000+ solved)',
    'National Hackathon Finalist',
    'Strong Computer Science Fundamentals',
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Developer Terminal & Bio"
          title="About Me"
          subtitle="Combining full-stack software development with competitive algorithmic problem solving."
        />

        {/* Interactive CLI Terminal Section */}
        <div className="mb-16">
          <CyberTerminal />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card3D */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7"
          >
            <Card3D depth={30} className="h-full space-y-6 bg-slate-900/90 border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Engineering Profile</h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                {personalDetails.about}
              </p>

              <p className="text-slate-300 leading-relaxed text-base">
                Currently pursuing my Bachelor of Engineering in Computer Science at KalaignarKarunanidhi Institute of Technology (KIT), Coimbatore. I possess strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, and Database Management.
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                  Core Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>

          {/* Education & Academic Card3D */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5"
          >
            <Card3D depth={35} className="h-full space-y-6 border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">Education</h3>
                </div>
                <Badge variant="brand" size="sm">
                  {personalDetails.education.period}
                </Badge>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white font-heading">
                  {personalDetails.education.degree}
                </h4>
                <p className="text-sm font-semibold text-cyan-400">
                  {personalDetails.education.institution}
                </p>
                <p className="text-xs text-slate-400">{personalDetails.education.location}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase font-mono">Cumulative GPA</p>
                  <p className="text-2xl font-extrabold text-cyan-400 font-mono">
                    {personalDetails.education.cgpa}
                  </p>
                </div>
                <Badge variant="success" size="md">
                  Top Academic Distinction
                </Badge>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-semibold text-slate-400 uppercase font-mono">Relevant Coursework</h5>
                <div className="flex flex-wrap gap-1.5">
                  {['Data Structures & Algorithms', 'Database Systems', 'Web Engineering', 'Operating Systems', 'OOP', 'Software Engineering'].map((course) => (
                    <Badge key={course} variant="slate" size="sm">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
