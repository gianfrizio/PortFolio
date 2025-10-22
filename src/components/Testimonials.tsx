'use client';

import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Claude AI',
      role: 'AI Assistant, Anthropic',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Vittorio dimostra eccezionale capacità di apprendimento e problem-solving. Il suo approccio metodico e la precisione nel codice sono impressionanti per un autodidatta.',
    },
    {
      id: 2,
      name: 'GitHub Community',
      role: 'Developer Community',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'Progetti ben documentati e strutturati. Il portfolio dimostra competenze full-stack solide e un\'ottima comprensione delle best practices moderne.',
    },
    {
      id: 3,
      name: 'Tech Reviewer',
      role: 'Code Review Expert',
      image: '/api/placeholder/100/100',
      rating: 5,
      text: 'La qualità del codice e l\'architettura dei progetti dimostrano una maturità tecnica notevole. Ottima gestione di tecnologie diverse e integrazione AI.',
    },
  ];

  return (
    <section id="testimonials" className="py-16 section-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">
            Feedback & Recensioni
          </h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Valutazioni sul mio lavoro e approccio allo sviluppo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              
              className="relative group"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-200 dark:text-blue-900/30">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="flex mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <div key={index}>
                      <Star
                        size={22}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    </div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 dark:text-gray-300 mb-8 italic relative z-10 leading-relaxed text-base">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center relative z-10">
                  <div
                    
                    className="w-14 h-14 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg"
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with enhanced design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '4+', label: 'Progetti Completati' },
                { number: '15+', label: 'Tecnologie Padroneggiate' },
                { number: '100%', label: 'Dedizione' },
              ].map((stat, index) => (
                <div
                  key={index}
                  
                  className="group"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 mb-3 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
