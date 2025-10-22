'use client';

import { Database, Smartphone, GitBranch, Server, Layout, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Linguaggi & Framework',
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
      category: 'Frontend Development',
      icon: <Server className="w-6 h-6" />,
      color: 'from-yellow-500 to-amber-500 dark:from-green-500 dark:to-emerald-500',
      skills: [
        { name: 'React - Hooks, Context API', level: 90 },
        { name: 'Next.js - SSR, SSG, API Routes', level: 88 },
        { name: 'HTML5/CSS3/Tailwind', level: 92 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Animazioni Avanzate', level: 85 }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database className="w-6 h-6" />,
      color: 'from-orange-600 to-red-500 dark:from-orange-500 dark:to-red-500',
      skills: [
        { name: 'Spring Data JPA', level: 88 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservizi', level: 85 },
        { name: 'SQL, JPA/Hibernate', level: 87 },
        { name: 'Firebase Integration', level: 88 }
      ]
    },
    {
      category: 'Specializzazioni',
      icon: <Smartphone className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500 dark:from-purple-500 dark:to-pink-500',
      skills: [
        { name: 'Full-Stack Development', level: 90 },
        { name: 'Game Development - SDL2', level: 85 },
        { name: 'AI Integration - OpenAI APIs', level: 87 },
        { name: 'Mobile Development - Flutter', level: 88 },
        { name: 'Performance Optimization', level: 86 }
      ]
    },
    {
      category: 'Tools & Metodologie',
      icon: <GitBranch className="w-6 h-6" />,
      color: 'from-orange-700 to-amber-700 dark:from-gray-700 dark:to-gray-900',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Maven', level: 88 },
        { name: 'VS Code, Android Studio', level: 90 },
        { name: 'AI-assisted development', level: 95 },
        { name: 'Architecture patterns (MVC)', level: 87 }
      ]
    },
    {
      category: 'Soft Skills',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Precisione & Problem Solving', level: 92 },
        { name: 'AI-Enhanced Productivity', level: 95 },
        { name: 'Teamwork & Comunicazione', level: 88 },
        { name: 'Gestione Pressione', level: 90 },
        { name: 'Adattabilità & Innovazione', level: 93 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 section-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Competenze Tecniche</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Le tecnologie e gli strumenti che utilizzo quotidianamente per creare soluzioni innovative.
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
            { number: '7', label: 'Progetti Portfolio Completati' },
            { number: '15+', label: 'Tecnologie Padroneggiate' },
            { number: '100%', label: 'Dedizione & Passione' },
            { number: '95%', label: 'Produttività con IA' }
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
