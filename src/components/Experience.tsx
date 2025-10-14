'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Milano, Italia',
      period: '2022 - Presente',
      description: 'Sviluppo di applicazioni web complesse utilizzando React, Next.js e Node.js. Gestione di team di sviluppatori e implementazione di architetture scalabili.',
      achievements: [
        'Riduzione del tempo di caricamento delle applicazioni del 40%',
        'Implementazione di CI/CD pipeline con riduzione dei bug in produzione del 60%',
        'Mentoring di 5 sviluppatori junior'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Agency Studio',
      location: 'Roma, Italia',
      period: '2020 - 2022',
      description: 'Sviluppo di siti web e applicazioni mobile per clienti di vari settori. Collaborazione con designer e project manager per la realizzazione di progetti innovativi.',
      achievements: [
        'Completamento di oltre 15 progetti client con valutazione media 4.8/5',
        'Sviluppo di un sistema CMS personalizzato utilizzato da 10+ clienti',
        'Implementazione di best practices per il codice e testing'
      ],
      technologies: ['React', 'Flutter', 'Firebase', 'MongoDB', 'Express']
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'StartUp Innovativa',
      location: 'Torino, Italia',
      period: '2019 - 2020',
      description: 'Primo ruolo professionale come sviluppatore. Contributo allo sviluppo di una piattaforma e-learning innovativa.',
      achievements: [
        'Sviluppo di feature frontend per 20.000+ utenti attivi',
        'Partecipazione attiva alle code review e pair programming',
        'Apprendimento rapido di nuove tecnologie e framework'
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MySQL']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Esperienza Professionale</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Il mio percorso professionale nel mondo dello sviluppo software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              } md:w-1/2`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"
                   style={{
                     left: index % 2 === 0 ? 'calc(100% + 0.125rem)' : '-0.5rem'
                   }}>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Briefcase className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-3">{exp.company}</p>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
