'use client';

import { ExternalLink, Github, Smartphone, Globe, Filter, Plane, Film, Gamepad2, Video, Sparkles, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Projects = () => {
  const { t } = useLanguage();

  // Use language-independent keys for filters so the active filter
  // doesn't break when language changes. Display labels are localized via `t()`.
  const filterKeys = ['all', 'webapp', 'mobileai', 'fullstack', 'gameengine', 'ecommerce', 'static'];
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = filterKeys;

  const projects = [
    {
      id: 1,
      title: 'TRAVEL MATE',
      description: t('projects.items.travelmate.description'),
      technologies: ['Next.js 15', 'TypeScript', 'TailwindCSS', 'React Context', 'Geoapify', 'OpenWeather', 'Unsplash'],
      type: 'webapp',
      icon: <Plane className="w-10 h-10" />,
      iconColor: 'text-sky-500',
      github: 'https://github.com/gianfrizio/TravelMate',
      demo: 'https://travel-mate-mu.vercel.app',
      image: '/images/projects/travelmate.png'
    },
    {
      id: 2,
      title: 'WEB CINEMA AI PRO',
      description: t('projects.items.cinema.description'),
      technologies: ['Java 17', 'Spring Boot 3.2', 'Spring Data JPA', 'Python Flask', 'Machine Learning', 'REST APIs', 'JavaScript ES6+'],
  type: 'fullstack',
      icon: <Film className="w-10 h-10" />,
      iconColor: 'text-red-500',
      github: 'https://github.com/gianfrizio/Web-Cinema-AI-Pro',
      demo: 'https://web-cinema-ai-pro.vercel.app',
      image: '/images/projects/cinema.png'
    },
    {
      id: 3,
      title: 'DREAMSY',
      description: t('projects.items.dream.description'),
      technologies: ['Flutter', 'Dart', 'OpenAI GPT-4', 'DALL-E', 'Firebase', 'Biometric Auth', 'Speech-to-Text'],
  type: 'mobileai',
      iconImage: '/images/projects/icons/dream.png',
      github: 'https://github.com/gianfrizio/Dream-Visualizer',
      demo: 'https://drive.google.com/file/d/17shX0pZcK7x1rSnE1QUI-U-kisu4-tP0/view?usp=drive_link',
      image: '/images/projects/dream.png'
    },
    {
      id: 4,
      title: 'TETRIS GAME ENGINE',
      description: t('projects.items.tetris.description'),
      technologies: ['C/C++', 'SDL2', 'Game Development', 'OOP', 'Memory Management', 'Graphics Programming'],
  type: 'gameengine',
      icon: <Gamepad2 className="w-10 h-10" />,
      iconColor: 'text-purple-500',
      github: 'https://github.com/gianfrizio/Tetris',
      demo: 'https://tetris-pi-mocha.vercel.app',
      image: '/images/projects/tetris.png'
    },
    {
      id: 5,
      title: 'WATCH FILM - API KEY',
      description: t('projects.items.watchfilm.description'),
      technologies: ['JavaScript ES6+', 'HTML5', 'CSS3', 'TheMovieDB API', 'ES Modules', 'Async/Await'],
  type: 'webapp',
      icon: <Video className="w-10 h-10" />,
      iconColor: 'text-orange-500',
      github: 'https://github.com/gianfrizio/Watch-Film-ApiKey',
      demo: 'https://gianfrizio.github.io/Watch-Film-ApiKey',
      image: '/images/projects/watchfilm.png'
    },
    {
      id: 6,
      title: 'MAGIC PLACE',
      description: t('projects.items.magic.description'),
      technologies: ['HTML5', 'CSS3', 'CSS Grid', 'Flexbox', 'CSS Custom Properties', 'Responsive Design', 'CSS Animations'],
  type: 'static',
      icon: <Sparkles className="w-10 h-10" />,
      iconColor: 'text-pink-500',
      github: 'https://github.com/gianfrizio/Magic-Place',
      demo: 'https://gianfrizio.github.io/Magic-Place',
      image: '/images/projects/magic.png'
    },
    {
      id: 7,
      title: 'E-COMMERCE CART',
      description: t('projects.items.ecommerce.description'),
      technologies: ['React', 'Vite', 'Context API', 'JavaScript', 'CSS Modules', 'localStorage', 'i18n', 'Responsive Design'],
  type: 'ecommerce',
      icon: <ShoppingCart className="w-10 h-10" />,
      iconColor: 'text-green-500',
      github: 'https://github.com/gianfrizio/E-Commerce-Cart',
      demo: 'https://gianfrizio.github.io/E-Commerce-Cart',
      image: '/images/projects/ecommerce.png'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="projects" className="py-16 section-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">{t('projects.title')}</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            {t('projects.description')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((key) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
            >
              {key === 'all' && <Filter className="inline w-4 h-4 mr-2" />}
              {t(`projects.filters.${key}`)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card card hover-lift"
            >
              <div className="relative rounded-2xl overflow-hidden">
                {/* Project Image with Enhanced Hover */}
                <div className="project-image-bg relative h-56 overflow-hidden">
                  {/* Project Demo Image */}
                  <Image
                    src={project.image}
                    alt={`${project.title} demo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20"></div>

                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
                    <div className="card w-20 h-20 flex items-center justify-center rounded-2xl mb-4 shadow-2xl hover:scale-110 hover:rotate-6 transition-transform duration-300 bg-white/90 dark:bg-gray-800/90 relative overflow-hidden">
                      {project.iconImage ? (
                        <Image
                          src={project.iconImage}
                          alt={`${project.title} icon`}
                          fill
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      ) : (
                        <div className={project.iconColor}>
                          {project.icon}
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                  </div>

                  {/* Overlay with actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-white rounded-full hover:bg-gradient-to-br hover:from-orange-200 hover:to-amber-200 dark:hover:bg-gray-100 hover:scale-125 hover:rotate-180 transition-all duration-300 shadow-xl border border-orange-200 dark:border-transparent"
                    >
                      <Github className="w-6 h-6 text-gray-700" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 dark:bg-white rounded-full hover:bg-gradient-to-br hover:from-orange-200 hover:to-amber-200 dark:hover:bg-gray-100 hover:scale-125 hover:rotate-180 transition-all duration-300 shadow-xl border border-orange-200 dark:border-transparent"
                    >
                      <ExternalLink className="w-6 h-6 text-gray-700" />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge-primary">
                      {t(`projects.filters.${project.type}`)}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed min-h-[80px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="badge badge-secondary hover:scale-110 hover:-translate-y-1"
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
                      className="flex-1 btn-secondary flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>{t('projects.code')}</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('projects.demo')}</span>
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
