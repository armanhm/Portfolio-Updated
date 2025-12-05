import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20 relative z-10 bg-gradient-to-t from-black to-brand-dark scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-gray-300 hover:text-brand-accent transition-colors group cursor-pointer block">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.email}</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
             <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSent}
                className={`w-full font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSent 
                    ? 'bg-green-500 text-white cursor-default' 
                    : 'bg-brand-accent text-brand-dark hover:bg-cyan-400'
                }`}
              >
                {isSent ? 'Message Sent!' : 'Send Message'} 
                {!isSent && <Send size={18} />}
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arman Hosseinmardi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;