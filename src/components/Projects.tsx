'use client';

import { ExternalLink, Github, Smartphone, Globe, Filter } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web App', 'Mobile AI App', 'Full-Stack Enterprise', 'Game Engine', 'E-Commerce', 'Static Website'];

  const projects = [
    {
      id: 1,
      title: 'TRAVEL MATE',
      description: 'Web app in Next.js 15 + TypeScript per esplorare destinazioni e pianificare itinerari. API server-side per geocoding, meteo e immagini (Geoapify, OpenWeather, Unsplash/Pexels) con fallback resilienti. Ottimizzazione immagini e performance con Next.js Image, lazy-loading. UI responsive con TailwindCSS e stato globale con React Context e localStorage.',
      technologies: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'React Context', 'Geoapify', 'OpenWeather', 'Unsplash'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/TravelMate',
      demo: 'https://travel-mate-mu.vercel.app',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      title: 'WEB CINEMA AI PRO',
      description: 'Sistema di raccomandazione cinematografica con architettura microservizi 3-tier (porte 3001/8080/5001). Backend Java Spring Boot 3.2 con Spring Data JPA e REST APIs. AI Engine Python Flask con machine learning e recommendation algorithms. Frontend JavaScript ES6+ con responsive design e real-time filtering. Features: rating system, autocomplete search, user data persistence.',
      technologies: ['Java 17', 'Spring Boot 3.2', 'Spring Data JPA', 'Python Flask', 'Machine Learning', 'REST APIs', 'JavaScript ES6+'],
      type: 'Full-Stack Enterprise',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Web-Cinema-AI-Pro',
      demo: 'https://web-cinema-ai-pro.vercel.app',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      title: 'DREAM VISUALIZER',
      description: 'Applicazione mobile innovativa potenziata da AI. Integrazione API OpenAI - GPT-4 per NLP e DALL-E per generazione arte procedurale. Funzionalità mobile avanzate: autenticazione biometrica, speech-to-text, elaborazione real-time. Architettura sicura con gestione API key e storage crittografato. Deployment cross-platform con interfaccia multilingue. Integrazione backend Firebase per servizi cloud.',
      technologies: ['Flutter', 'Dart', 'OpenAI GPT-4', 'DALL-E', 'Firebase', 'Biometric Auth', 'Speech-to-Text'],
      type: 'Mobile AI App',
      icon: <Smartphone className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Dream-Visualizer',
      demo: 'https://drive.google.com/file/d/17shX0pZcK7x1rSnE1QUI-U-kisu4-tP0/view?usp=drive_link',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      title: 'TETRIS GAME ENGINE',
      description: 'Implementazione completa game engine con architetture multiple. Due versioni complete: C procedurale e C++ object-oriented. Integrazione SDL2 per rendering real-time, sistema audio e gestione input. Meccaniche di gioco avanzate: rotazioni tetromino, algoritmi eliminazione righe. Gestione memoria ottimizzata e performance tuning. Dimostra padronanza completa dei fondamentali del game development.',
      technologies: ['C/C++', 'SDL2', 'Game Development', 'OOP', 'Memory Management', 'Graphics Programming'],
      type: 'Game Engine',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Tetris',
      demo: 'https://tetris-pi-mocha.vercel.app',
      image: '/api/placeholder/400/300'
    },
    {
      id: 5,
      title: 'WATCH FILM - API KEY',
      description: 'Sito web statico per browsing film utilizzando TheMovieDB API. Architettura modulare JavaScript ES6+ con separazione delle responsabilità (api.js, dom.js, ui.js, events.js). Features avanzate: paginazione dinamica, filtri per genere, ricerca per titolo. Gestione asincrona delle chiamate API con error handling robusto. Design responsive con focus su performance e user experience.',
      technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'TheMovieDB API', 'ES Modules', 'Async/Await'],
      type: 'Web App',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Watch-Film-ApiKey',
      demo: 'https://gianfrizio.github.io/Watch-Film-ApiKey',
      image: '/api/placeholder/400/300'
    },
    {
      id: 6,
      title: 'MAGIC PLACE',
      description: 'E-commerce moderno e interattivo per vendita oggetti magici. Implementazione completa con HTML5 e CSS3 puro, senza framework esterni. Design responsive mobile-first con CSS Grid e Flexbox. Utilizzo avanzato di CSS custom properties, animations e transitions. Features: catalogo prodotti multi-categoria (bacchette, pozioni, libri), form contatti elaborato, effetti glassmorphism, tipografia elegante. Dimostra padronanza completa di modern CSS.',
      technologies: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox', 'CSS Custom Properties', 'Responsive Design', 'CSS Animations'],
      type: 'Static Website',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/Magic-Place',
      demo: 'https://gianfrizio.github.io/Magic-Place',
      image: '/api/placeholder/400/300'
    },
    {
      id: 7,
      title: 'E-COMMERCE CART',
      description: 'Demo interattivo di catalogo prodotti e-commerce costruito con React e Vite. Gestione stato con Context API (CartContext, LanguageContext). Features complete: listing prodotti, ricerca avanzata, filtri per categoria, gestione carrello con localStorage persistence, pannello admin per aggiunta prodotti. Supporto internazionalizzazione (i18n) e theme switching (dark/light mode). Upload immagini via URL o file locale. Architettura modulare con CSS modulare per massima manutenibilità.',
      technologies: ['React', 'Vite', 'Context API', 'JavaScript', 'CSS Modules', 'localStorage', 'i18n', 'Responsive Design'],
      type: 'E-Commerce',
      icon: <Globe className="w-5 h-5" />,
      github: 'https://github.com/gianfrizio/E-Commerce-Cart',
      demo: 'https://gianfrizio.github.io/E-Commerce-Cart',
      image: '/api/placeholder/400/300'
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            I miei progetti
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ecco una selezione dei progetti che ho sviluppato, dalle applicazioni mobile ai siti web complessi.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-slate-800/80 text-gray-700 dark:text-gray-300 hover:shadow-md backdrop-blur-sm'
              }`}
            >
              {filter === 'All' && <Filter className="inline w-4 h-4 mr-2" />}
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white dark:bg-slate-800 m-[1px] rounded-2xl overflow-hidden">
                {/* Project Image with Enhanced Hover */}
                <div className="relative h-56 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full"
                      style={{
                        backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-2xl hover:scale-110 hover:rotate-6 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 hover:scale-125 hover:rotate-180 transition-all duration-300 shadow-xl"
                    >
                      <Github className="w-6 h-6 text-gray-700" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 hover:scale-125 hover:rotate-180 transition-all duration-300 shadow-xl"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-700" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:scale-105 transition-transform">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-slate-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-slate-600 hover:scale-105 transition-all duration-200 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Codice</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
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
