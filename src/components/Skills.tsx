
import React from 'react';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const Skills = () => {
  const technicalSkills: Skill[] = [
    { name: 'HTML & CSS', level: 95, color: 'neon-blue' },
    { name: 'JavaScript', level: 90, color: 'neon-purple' },
    { name: 'TypeScript', level: 85, color: 'neon-pink' },
    { name: 'React', level: 92, color: 'neon-blue' },
    { name: 'Vue.js', level: 75, color: 'neon-purple' },
    { name: 'Node.js', level: 70, color: 'neon-pink' },
    { name: 'Tailwind CSS', level: 88, color: 'neon-blue' },
    { name: 'UI/UX Design', level: 85, color: 'neon-purple' },
  ];

  const softSkills: string[] = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Creativity',
    'Critical Thinking',
    'Attention to Detail',
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: `0 0 10px var(--tw-text-opacity)` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 animate-on-scroll">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">Tools & Software</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">VS Code</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">Figma</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">GitHub</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">Adobe XD</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">Photoshop</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="font-medium">Webpack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
