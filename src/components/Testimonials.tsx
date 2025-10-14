'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Marco Rossi',
      role: 'CEO, Tech Innovations',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Gianfrizio è un professionista eccezionale. Ha sviluppato la nostra piattaforma web con attenzione ai dettagli e ottime performance. Altamente raccomandato!',
    },
    {
      id: 2,
      name: 'Laura Bianchi',
      role: 'Project Manager, Digital Agency',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Lavorare con Gianfrizio è stato fantastico. La sua capacità di trasformare idee complesse in soluzioni eleganti è impressionante. Delivery sempre puntuale.',
    },
    {
      id: 3,
      name: 'Alessandro Verdi',
      role: 'Founder, StartUp Innovativa',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Ho collaborato con Gianfrizio per lo sviluppo della nostra app mobile. Il risultato ha superato le aspettative. Competenza tecnica e creatività al top!',
    },
    {
      id: 4,
      name: 'Sofia Neri',
      role: 'CTO, E-Commerce Solutions',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Un developer full stack completo. Ha gestito sia frontend che backend con grande professionalità. Comunicazione chiara e codice di alta qualità.',
    },
    {
      id: 5,
      name: 'Davide Gialli',
      role: 'Head of Development, FinTech Corp',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Gianfrizio ha dimostrato eccellenti capacità di problem solving. Sempre proattivo nel proporre soluzioni innovative. Un vero asset per qualsiasi team.',
    },
    {
      id: 6,
      name: 'Elena Viola',
      role: 'Product Owner, SaaS Platform',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Collaborazione eccellente su un progetto complesso. Gianfrizio ha portato expertise tecnica e visione strategica. Risultati oltre ogni aspettativa.',
    },
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cosa dicono di me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feedback e recensioni dai clienti e colleghi con cui ho collaborato.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-200 dark:text-blue-900">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Clienti Felici</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                5.0
              </div>
              <div className="text-gray-600 dark:text-gray-400">Rating Medio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Soddisfazione</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                30+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Progetti Consegnati</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
