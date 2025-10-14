'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, GitBranch, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript ES6+']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Java 17', 'Spring Boot', 'Python', 'Flask', 'Node.js', 'REST APIs', 'JPA/Hibernate']
    },
    {
      category: 'Mobile & Game',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Flutter', 'Dart', 'SDL2', 'C/C++', 'Game Development', 'Firebase']
    },
    {
      category: 'Tools & AI',
      icon: <GitBranch className="w-6 h-6" />,
      technologies: ['Git/GitHub', 'Maven', 'VS Code', 'AI Integration', 'OpenAI APIs', 'Android Studio']
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Chi sono</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">La mia storia</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Autodidatta Aspirante Software, Mobile & Game Developer specializzato in architetture enterprise,
              game development e AI integration con eccezionale capacità di apprendimento accelerato.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Transizione carriera da zero a competenze avanzate in sviluppo full-stack, microservizi e sistemi
              AI-powered in soli 8 mesi. Ho completato 4 progetti professionali con documentazione enterprise.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Combino solida esperienza professionale con approccio innovativo human-AI hybrid development per
              soluzioni software scalabili e performanti. Specializzato in clean code e risoluzione metodica di problemi complessi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Clean Code</h4>
                <p className="text-sm text-gray-600">Codice leggibile e maintainabile</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Performance</h4>
                <p className="text-sm text-gray-600">Ottimizzazione e velocità</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Smartphone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Responsive</h4>
                <p className="text-sm text-gray-600">Design adattivo</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Database className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Scalabile</h4>
                <p className="text-sm text-gray-600">Architetture robuste</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Le mie competenze</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;