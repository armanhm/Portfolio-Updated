import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10 bg-brand-dark/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work History */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Briefcase className="text-brand-accent" /> Work Experience
            </h3>
            <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4">
              {EXPERIENCES.map((job) => (
                <div key={job.id} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-brand-dark bg-gray-600 group-hover:bg-brand-accent transition-colors duration-300"></div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-accent/30 transition-all duration-300 hover:bg-white/10">
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <p className="text-brand-secondary font-mono text-sm mb-2">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {job.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.description.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-brand-accent/50">
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {job.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs rounded font-mono border border-brand-accent/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 lg:mt-0 mt-12">
              <GraduationCap className="text-brand-secondary" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                   {/* Timeline Dot */}
                   <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-brand-dark bg-gray-600 group-hover:bg-brand-secondary transition-colors duration-300"></div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-brand-secondary/30 transition-all duration-300 hover:bg-white/10">
                    <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                    <p className="text-brand-accent/80 mb-2 font-mono text-sm">{edu.degree}</p>
                     <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4 font-mono">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</span>
                      <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                    </div>

                    {/* Education Description */}
                    <ul className="space-y-2 mb-4">
                      {edu.description.map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-brand-secondary/50">
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Education Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                      {edu.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-brand-secondary/10 text-brand-secondary text-xs rounded font-mono border border-brand-secondary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;