
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute right-0 top-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <p className="text-lg leading-relaxed">
              I'm a passionate frontend developer and UI/UX designer with a keen eye for creating beautiful, functional digital experiences. My journey in web development started 5 years ago, and I've been obsessed with crafting pixel-perfect interfaces ever since.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in modern web technologies like React, TypeScript, and Tailwind CSS, always striving to build applications that are not only visually stunning but also highly performant and accessible.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers.
            </p>
          </div>
          
          <div className="glass-card p-8 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-neon-blue pl-4 pb-6">
                <h4 className="font-medium text-lg">Senior Frontend Developer</h4>
                <p className="text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                <p className="mt-2">Leading frontend development for multiple client projects, optimizing performance and implementing modern UX patterns.</p>
              </div>
              
              <div className="border-l-2 border-neon-purple pl-4 pb-6">
                <h4 className="font-medium text-lg">UI/UX Designer</h4>
                <p className="text-muted-foreground">DesignStudio • 2019 - 2021</p>
                <p className="mt-2">Created user interfaces and experience designs for web and mobile applications across various industries.</p>
              </div>
              
              <div className="border-l-2 border-neon-pink pl-4">
                <h4 className="font-medium text-lg">Frontend Developer</h4>
                <p className="text-muted-foreground">WebSolutions • 2017 - 2019</p>
                <p className="mt-2">Developed responsive websites and web applications for small to medium-sized businesses.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 glass-card p-8 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-lg">Bachelor of Computer Science</h4>
              <p className="text-muted-foreground">University of Technology • 2013 - 2017</p>
              <p className="mt-2">Specialized in Web Development and Human-Computer Interaction</p>
            </div>
            
            <div>
              <h4 className="font-medium text-lg">UI/UX Design Certification</h4>
              <p className="text-muted-foreground">Design Academy • 2018</p>
              <p className="mt-2">Advanced course in user interface and experience design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
