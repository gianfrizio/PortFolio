'use client';

import { Code, Database, Smartphone, Globe, GitBranch, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Java 17', 'Spring Boot', 'Python', 'Flask', 'Node.js', 'REST APIs', 'JPA/Hibernate']
    },
    {
      category: 'Mobile & Game',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Flutter', 'Dart', 'SDL2', 'C/C++', 'Game Development', 'Firebase']
    },
    {
      category: 'Tools & AI',
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ['Git/GitHub', 'Maven', 'VS Code', 'AI Integration', 'OpenAI APIs', 'Android Studio']
    }
  ];

  return (
    <section id="about" className="py-16 section-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Chi sono</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">La mia storia</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Sono un autodidatta Software, Mobile & Game Developer.
              Durante il mio percorso di studi ho assunto svariate competenze
              specialmente in sviluppo full-stack, implementazione di sistemi IA e
              sviluppo mobile tramite il mio progetto personale di un’intera App
              innovativa.
              Sono una persona volta all’apprendimento ma soprattutto
              appassionata di questo settore.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="about-card text-center">
                <Code className="about-icon" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Clean Code</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Codice leggibile e maintainabile</p>
              </div>
              <div className="about-card text-center">
                <Zap className="about-icon" style={{ color: 'var(--primary-gradient-via)' }} />
                <h4 className="font-semibold text-gray-900 dark:text-white">Performance</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ottimizzazione e velocità</p>
              </div>
              <div className="about-card text-center">
                <Smartphone className="about-icon" style={{ color: 'var(--primary-gradient-to)' }} />
                <h4 className="font-semibold text-gray-900 dark:text-white">Responsive</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Design adattivo</p>
              </div>
              <div className="about-card text-center">
                <Database className="about-icon" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Scalabile</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Architetture robuste</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Le mie competenze</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="skill-category"
              >
                <div className="flex items-center mb-4">
                  <div className="skill-category-icon">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white ml-3">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="badge badge-secondary mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;