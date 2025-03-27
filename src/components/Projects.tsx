
import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  category: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A modern dashboard for e-commerce stores with analytics and order management capabilities.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'web',
    },
    {
      id: 2,
      title: 'Expense Tracker App',
      description: 'Mobile application to track personal expenses with budget planning features.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'mobile',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A creative portfolio website for a digital artist with a dynamic gallery.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'GSAP'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'web',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Weather application with 7-day forecast and location-based updates.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      technologies: ['Vue.js', 'Vuex', 'OpenWeather API'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'web',
    },
    {
      id: 5,
      title: 'Task Management System',
      description: 'Project management tool with task assignment and progress tracking.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'fullstack',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute right-1/4 bottom-1/4 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card animate-on-scroll"
              style={{animationDelay: `${project.id * 0.1}s`}}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.demoUrl} 
                      className="px-4 py-2 bg-neon-blue/20 backdrop-blur-sm rounded-full text-sm hover:bg-neon-blue/30 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl} 
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
