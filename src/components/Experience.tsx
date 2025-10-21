'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Apprendimento Intensivo Full-Stack',
      company: 'Autodidatta',
      location: 'Aprilia (LT), Italia',
      period: 'Presente',
      description: 'Percorso di apprendimento intensivo e autodidatta focalizzato su sviluppo full-stack, integrazione AI e sviluppo mobile tramite progetti pratici e portfolio reali.',
      achievements: [
        'Padronanza di 15+ tecnologie e framework',
        'Completamento di 4 progetti portfolio enterprise-grade',
        'Sviluppo approccio innovativo human-AI hybrid development',
        'Documentazione tecnica completa per ogni progetto'
      ],
      technologies: ['Java 17', 'Spring Boot', 'React', 'Next.js', 'Flutter', 'Python', 'C/C++', 'SDL2']
    },
    {
      id: 2,
      title: 'Specializzazione AI Integration',
      company: 'Progetti Personali',
      location: 'Remote',
      period: 'Presente',
      description: 'Focus su integrazione AI e machine learning in applicazioni pratiche, con particolare attenzione a OpenAI APIs e sistemi di raccomandazione.',
      achievements: [
        'Implementazione Dream Visualizer con GPT-4 e DALL-E',
        'Sistema di raccomandazione cinematografica ML-powered',
        'Integrazione NLP avanzato e speech-to-text',
        'Architettura microservizi AI-enhanced'
      ],
      technologies: ['OpenAI GPT-4', 'DALL-E', 'Python Flask', 'Machine Learning', 'NLP', 'Firebase']
    },
    {
      id: 3,
      title: 'Game Development & Low-Level Programming',
      company: 'Progetti Portfolio',
      location: 'Remote',
      period: 'Presente',
      description: 'Esplorazione di game development e programmazione low-level attraverso implementazioni complete di game engine.',
      achievements: [
        'Tetris Game Engine completo in C procedurale e C++ OOP',
        'Sistema audio e rendering real-time con SDL2',
        'Memory management avanzato e ottimizzazioni performance',
        'Architetture multiple: procedurale vs object-oriented'
      ],
      technologies: ['C/C++', 'SDL2', 'Game Development', 'OOP', 'Memory Management', 'Graphics Programming']
    },
    {
      id: 4,
      title: 'Diploma di istruzione secondaria superiore in Geometra',
      company: 'Istituto di Istruzione Superiore "Galilei - Sani"',
      location: 'Latina (LT), Italia',
      period: 'Completato',
      description: 'Formazione scolastica con focus su materie tecniche, disegno tecnico, topografia e costruzioni.',
      achievements: [
        'Competenze tecniche in progettazione e disegno',
        'Precisione e attenzione ai dettagli',
        'Basi solide in matematica e fisica applicata'
      ],
      technologies: ['Disegno Tecnico', 'CAD', 'Topografia', 'Matematica', 'Fisica']
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Il mio Percorso
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Da autodidatta a sviluppatore competente: il viaggio di apprendimento intensivo e crescita costante.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"
                   style={{
                     left: index % 2 === 0 ? 'calc(100% + 0.125rem)' : '-0.5rem'
                   }}>
              </div>

              <div
                
                className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg rounded-2xl"></div>

                <div className="relative bg-white dark:bg-slate-800 p-1 rounded-2xl">
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div
                      
                      className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg"
                    >
                      <Briefcase className="w-7 h-7" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3">{exp.company}</p>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                          Risultati Chiave:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 text-sm flex items-start bg-gray-50 dark:bg-slate-700/50 p-2 rounded-lg"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mr-2 text-lg">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;
