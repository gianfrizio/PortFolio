'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TravelMate',
      description: 'App mobile per la pianificazione di viaggi con interfaccia intuitiva e funzionalità di ricerca avanzata.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      type: 'Mobile App',
      icon: <Smartphone className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/TravelMate',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'DreamVisualizer',
      description: 'Applicazione innovativa per la visualizzazione e gestione dei sogni con interfaccia moderna.',
      technologies: ['Flutter', 'Dart', 'SQLite', 'Material Design'],
      type: 'Mobile App',
      icon: <Smartphone className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/DreamVisualizer',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'E-Commerce Cart',
      description: 'Sistema di carrello e-commerce completo con gestione prodotti e checkout avanzato.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/E-Commerce-Cart',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'Magic Place',
      description: 'Piattaforma web interattiva per la scoperta di luoghi magici e nascosti.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Magic-Place',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'ToDoList React',
      description: 'Applicazione per la gestione delle attività costruita con Atomic Design e Vite.',
      technologies: ['React', 'Vite', 'TypeScript', 'Atomic Design'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/ToDoList-React-Vite-AtomicDesign',
      demo: '#',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'Tetris Game',
      description: 'Implementazione classica del gioco Tetris con grafica moderna e controlli fluidi.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
      type: 'Game',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Tetris',
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