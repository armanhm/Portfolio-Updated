import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono font-semibold tracking-wider text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
            AVAILABLE FOR HIRE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">{PERSONAL_INFO.name}</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-400 font-mono mb-6">
            {PERSONAL_INFO.title}
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
            Bridging the gap between <span className="text-gray-200">Academic Research</span> and <span className="text-gray-200">Production AI</span>. 
            Specializing in RAG architectures, LLM fine-tuning, and distributed backend systems for scalable intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a href="#contact" className="group relative px-6 py-3 bg-brand-accent text-brand-dark font-bold rounded hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2">
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4">
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10 hover:border-brand-accent/50">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10 hover:border-brand-accent/50">
                <Mail size={20} />
              </a>
              {/* Added a placeholder for Github since it wasn't in OCR but is standard for portfolios */}
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all border border-white/10 hover:border-brand-accent/50 opacity-50 cursor-not-allowed" title="GitHub link not provided in resume">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;