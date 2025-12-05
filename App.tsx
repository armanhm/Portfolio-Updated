import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-accent selection:text-brand-dark font-sans">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;