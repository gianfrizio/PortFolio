'use client';

import { Code, Database, Smartphone, Globe, GitBranch, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const skills = [
    {
      category: t('about.skills.frontend'),
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+']
    },
    {
      category: t('about.skills.backend'),
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node', 'Express', 'MongoDB', 'REST APIs']
    },
    {
      category: t('about.skills.mobile'),
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Flutter', 'Dart', 'SDL2', 'C/C++', 'Game Development', 'Firebase']
    },
    {
      category: t('about.skills.tools'),
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ['Git/GitHub', 'Maven', 'VS Code', 'AI Integration', 'OpenAI APIs', 'Android Studio']
    }
  ];

  return (
    <section id="about" className="py-16 section-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="section-underline"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about.intro')}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.description')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="about-card text-center">
                <Code className="about-icon" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('about.highlights.cleanCode.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.highlights.cleanCode.description')}</p>
              </div>
              <div className="about-card text-center">
                <Zap className="about-icon" style={{ color: 'var(--primary-gradient-via)' }} />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('about.highlights.performance.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.highlights.performance.description')}</p>
              </div>
              <div className="about-card text-center">
                <Smartphone className="about-icon" style={{ color: 'var(--primary-gradient-to)' }} />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('about.highlights.responsive.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.highlights.responsive.description')}</p>
              </div>
              <div className="about-card text-center">
                <Database className="about-icon" />
                <h4 className="font-semibold text-gray-900 dark:text-white">{t('about.highlights.scalable.title')}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('about.highlights.scalable.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">{t('about.skillsTitle')}</h3>
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