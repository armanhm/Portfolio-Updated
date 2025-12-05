import React from 'react';
import { Cpu, Database, Cloud, Code } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Machine Learning": <Cpu size={24} />,
  "Backend & Cloud": <Cloud size={24} />,
  "Data & Databases": <Database size={24} />,
  "Development": <Code size={24} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-brand-secondary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit designed for building scalable, intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div 
              key={category.category} 
              className="bg-brand-dark/80 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-brand-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-accent/5 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white/5 text-brand-accent group-hover:text-white group-hover:bg-brand-accent transition-colors">
                  {categoryIcons[category.category] || <Code />}
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="relative px-3 py-1.5 bg-white/5 text-gray-300 rounded text-sm border border-white/5 hover:border-white/20 hover:text-white hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;