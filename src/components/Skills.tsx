'use client';

import { motion } from 'framer-motion';
import { Database, Smartphone, GitBranch, Server, Layout, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Linguaggi & Framework',
      icon: <Layout className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-orange-500 to-red-500',
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
      color: 'from-purple-500 to-pink-500',
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
      color: 'from-gray-700 to-gray-900',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Competenze Tecniche</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le tecnologie e gli strumenti che utilizzo quotidianamente per creare soluzioni innovative.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '8', label: 'Mesi di Apprendimento Intensivo' },
            { number: '4', label: 'Progetti Portfolio Completati' },
            { number: '15+', label: 'Tecnologie Padroneggiate' },
            { number: '100%', label: 'Dedication & Passion' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
