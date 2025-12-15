'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      id: 1,
      title: t('experience.items.education.title'),
      company: t('experience.items.education.company'),
      location: t('experience.items.education.location'),
      period: t('experience.items.education.period'),
      description: t('experience.items.education.description'),
      achievements: [
        t('experience.items.education.achievements.0'),
        t('experience.items.education.achievements.1'),
        t('experience.items.education.achievements.2')
      ],
      technologies: ['Disegno Tecnico', 'CAD', 'Topografia', 'Matematica', 'Fisica']
    },
    {
      id: 2,
      title: t('experience.items.frontend.title'),
      company: t('experience.items.frontend.company'),
      location: t('experience.items.frontend.location'),
      period: t('experience.items.frontend.period'),
      description: t('experience.items.frontend.description'),
      achievements: [
        t('experience.items.frontend.achievements.0'),
        t('experience.items.frontend.achievements.1'),
        t('experience.items.frontend.achievements.2'),
        t('experience.items.frontend.achievements.3')
      ],
      technologies: ['JavaScript ES6+', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'React', 'Next.js']
    },
    {
      id: 3,
      title: t('experience.items.backend.title'),
      company: t('experience.items.backend.company'),
      location: t('experience.items.backend.location'),
      period: t('experience.items.backend.period'),
      description: t('experience.items.backend.description'),
      achievements: [
        t('experience.items.backend.achievements.0'),
        t('experience.items.backend.achievements.1'),
        t('experience.items.backend.achievements.2'),
        t('experience.items.backend.achievements.3')
      ],
      technologies: ['Node.js v20+', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'JSON']
    },
    {
      id: 4,
      title: t('experience.items.ai.title'),
      company: t('experience.items.ai.company'),
      location: t('experience.items.ai.location'),
      period: t('experience.items.ai.period'),
      description: t('experience.items.ai.description'),
      achievements: [
        t('experience.items.ai.achievements.0'),
        t('experience.items.ai.achievements.1'),
        t('experience.items.ai.achievements.2'),
        t('experience.items.ai.achievements.3')
      ],
      technologies: ['OpenAI GPT-4', 'DALL-E', 'ChatGPT', 'Machine Learning', 'Firebase']
    },
    {
      id: 5,
      title: t('experience.items.gamedev.title'),
      company: t('experience.items.gamedev.company'),
      location: t('experience.items.gamedev.location'),
      period: t('experience.items.gamedev.period'),
      description: t('experience.items.gamedev.description'),
      achievements: [
        t('experience.items.gamedev.achievements.0'),
        t('experience.items.gamedev.achievements.1'),
        t('experience.items.gamedev.achievements.2'),
        t('experience.items.gamedev.achievements.3')
      ],
      technologies: ['C/C++', 'SDL2', 'Game Development', 'OOP', 'Memory Management', 'Graphics Programming']
    },
    {
      id: 6,
      title: t('experience.items.mobile.title'),
      company: t('experience.items.mobile.company'),
      location: t('experience.items.mobile.location'),
      period: t('experience.items.mobile.period'),
      description: t('experience.items.mobile.description'),
      achievements: [
        t('experience.items.mobile.achievements.0'),
        t('experience.items.mobile.achievements.1'),
        t('experience.items.mobile.achievements.2'),
        t('experience.items.mobile.achievements.3')
      ],
      technologies: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'EAS Build', 'Context API', 'AsyncStorage']
    }
  ];

  return (
    <section id="experience" className="py-16 section-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            {t('experience.title')}
          </h2>
          <div className="section-underline"></div>
          <p className="section-description">
            {t('experience.description')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline connecting line */}
          <div className="timeline-line hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div
                className="timeline-dot hidden md:block absolute top-0 w-4 h-4 rounded-full shadow-lg"
                style={{
                  left: index % 2 === 0 ? 'calc(100%)' : '0',
                  transform: 'translateX(-50%)'
                }}>
              </div>

              <div className="card hover-lift p-6 rounded-2xl">
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="icon-bg flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Briefcase className="w-7 h-7" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 gradient-text">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold mb-3" style={{ color: 'var(--primary-gradient-from)' }}>{exp.company}</p>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="badge badge-secondary flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="badge badge-secondary flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="timeline-dot w-2 h-2 rounded-full"></span>
                          {t('experience.achievements')}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 dark:text-gray-300 text-sm flex items-start card p-2 rounded-lg"
                            >
                              <span className="mr-2 text-lg" style={{ color: 'var(--primary-gradient-from)' }}>✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="badge badge-secondary hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
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
