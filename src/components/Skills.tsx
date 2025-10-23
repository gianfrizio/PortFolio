'use client';

import { Database, Smartphone, GitBranch, Server, Layout, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      category: t('skills.categories.languages'),
      icon: <Layout className="w-6 h-6" />,
      color: 'from-orange-500 to-amber-500 dark:from-blue-500 dark:to-cyan-500',
      skills: [
        { name: 'Java 17 - Spring Boot 3.2', level: 92 },
        { name: 'Python 3.11+ - Flask', level: 88 },
        { name: 'JavaScript ES6+', level: 90 },
        { name: 'TypeScript (ESNext/v5)', level: 87 },
        { name: 'C/C++ - SDL2', level: 85 },
        { name: 'Dart/Flutter', level: 88 }
      ]
    },
    {
      category: t('skills.categories.frontend'),
      icon: <Server className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-500 dark:from-green-500 dark:to-emerald-500',
      skills: [
        { name: t('skills.items.react'), level: 90 },
        { name: t('skills.items.nextjs'), level: 88 },
        { name: t('skills.items.htmlCss'), level: 92 },
        { name: t('skills.items.responsive'), level: 90 },
        { name: t('skills.items.animations'), level: 85 }
      ]
    },
    {
      category: t('skills.categories.backend'),
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-600 to-red-500 dark:from-orange-500 dark:to-red-500',
      skills: [
        { name: 'Spring Data JPA', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: t('skills.items.microservices'), level: 85 },
        { name: 'SQL, JPA/Hibernate', level: 87 },
        { name: 'Firebase Integration', level: 88 }
      ]
    },
    {
      category: t('skills.categories.specializations'),
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500 dark:from-purple-500 dark:to-pink-500',
      skills: [
        { name: t('skills.items.fullstack'), level: 90 },
        { name: t('skills.items.gamedev'), level: 85 },
        { name: t('skills.items.aiIntegration'), level: 87 },
        { name: t('skills.items.mobiledev'), level: 88 },
        { name: t('skills.items.performance'), level: 86 }
      ]
    },
    {
      category: t('skills.categories.tools'),
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-orange-700 to-amber-700 dark:from-gray-700 dark:to-gray-900',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Maven', level: 88 },
        { name: 'VS Code, Android Studio', level: 90 },
        { name: t('skills.items.aiDev'), level: 95 },
        { name: t('skills.items.architecture'), level: 87 }
      ]
    },
    {
      category: t('skills.categories.soft'),
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: t('skills.items.problemSolving'), level: 92 },
        { name: t('skills.items.aiProductivity'), level: 95 },
        { name: t('skills.items.teamwork'), level: 88 },
        { name: t('skills.items.pressure'), level: 90 },
        { name: t('skills.items.adaptability'), level: 93 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 section-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">{t('skills.title')}</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category"
            >
              <div className="flex items-center mb-6">
                <div className={`skill-category-icon bg-gradient-to-r ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg h-2.5">
                      <div
                        className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '7', label: t('skills.stats.projects') },
            { number: '15+', label: t('skills.stats.technologies') },
            { number: '100%', label: t('skills.stats.dedication') },
            { number: '95%', label: t('skills.stats.aiProductivity') }
          ].map((stat, index) => (
            <div
              key={index}
              className="card text-center hover:scale-105 p-6"
            >
              <div className="text-3xl md:text-4xl font-bold stat-number mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
