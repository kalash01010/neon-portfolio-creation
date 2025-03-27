
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-neon-purple/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl mb-4 opacity-0 animate-on-scroll animate-delay-100">Hello, I'm</p>
        <h1 
          ref={nameRef}
          data-text="KALASH SRIVASTAVA"
          className="neon-text text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-wider opacity-0 animate-on-scroll animate-delay-300"
        >
          KALASH SRIVASTAVA
        </h1>
        <h2 className="text-xl md:text-2xl mb-8 opacity-0 animate-on-scroll animate-delay-500">
          <span className="text-neon-blue font-medium">Frontend Developer</span> & <span className="text-neon-purple font-medium">UI/UX Designer</span>
        </h2>
        <div className="flex justify-center gap-4 opacity-0 animate-on-scroll animate-delay-700">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-neon-blue/20 backdrop-blur-md border border-neon-blue/30 hover:bg-neon-blue/30 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
