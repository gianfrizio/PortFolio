'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TRAVEL MATE',
      description: 'Web app in Next.js 15 + TypeScript per esplorare destinazioni e pianificare itinerari. API server-side per geocoding, meteo e immagini con fallback resilienti. UI responsive con TailwindCSS e animazioni Framer Motion.',
      technologies: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Geoapify', 'OpenWeather API'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio',
      demo: 'https://travel-mate',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'WEB CINEMA AI PRO',
      description: 'Sistema di raccomandazione cinematografica con architettura microservizi. Backend Java Spring Boot, AI Engine Python Flask con machine learning, frontend JavaScript ES6+ con filtering real-time.',
      technologies: ['Java 17', 'Spring Boot 3.2', 'Python Flask', 'Machine Learning', 'REST APIs', 'JavaScript ES6+'],
      type: 'Full-Stack Enterprise',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'DREAM VISUALIZER',
      description: 'App mobile innovativa potenziata da AI. Integrazione OpenAI GPT-4 per NLP e DALL-E per generazione arte. Funzionalità avanzate: autenticazione biometrica, speech-to-text, storage crittografato, Firebase backend.',
      technologies: ['Flutter', 'Dart', 'OpenAI GPT-4', 'DALL-E', 'Firebase', 'Biometric Auth'],
      type: 'Mobile AI App',
      icon: <Smartphone className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio',
      demo: 'https://drive.google.com',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'TETRIS GAME ENGINE',
      description: 'Implementazione completa game engine con architetture multiple. Due versioni: C procedurale e C++ object-oriented. SDL2 per rendering real-time, sistema audio, gestione input. Meccaniche avanzate e memory optimization.',
      technologies: ['C/C++', 'SDL2', 'Game Development', 'OOP', 'Memory Management'],
      type: 'Game Engine',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio',
      demo: '#',
      image: '/api/placeholder/400/300'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I miei progetti</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ecco una selezione dei progetti che ho sviluppato, dalle applicazioni mobile ai siti web complessi.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 mx-auto shadow-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700">{project.title}</h3>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Codice</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;