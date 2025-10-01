'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Ciao, sono{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Gianfrizio
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-8"
            >
              Sviluppatore Full Stack & Mobile Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-600 mb-10"
            >
              Creo esperienze digitali innovative utilizzando tecnologie moderne come React, Next.js, Flutter e molto altro.
              Appassionato di clean code e soluzioni scalabili.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Vedi i miei progetti
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2">
                <Download size={20} />
                Scarica CV
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                {/* Placeholder per la foto profilo */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-6xl md:text-8xl text-blue-600 font-bold">G</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;