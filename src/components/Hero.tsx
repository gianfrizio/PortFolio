"use client";

import Image from 'next/image';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState, useMemo, useCallback } from 'react';

const Hero = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(() => [
    'Full Stack Developer',
    'Mobile Developer',
    'Game Developer',
    'AI Integration Specialist'
  ], []);

  const handleTyping = useCallback(() => {
    const current = loopNum % titles.length;
    const fullText = titles[current];

    setText(prev =>
      isDeleting
        ? fullText.substring(0, prev.length - 1)
        : fullText.substring(0, prev.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
    }
  }, [isDeleting, text, loopNum, titles]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/gianfrizio', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/vittorio-ciampi', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:vittoriociampi83@gmail.com', label: 'Email' }
  ];

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden section-primary"
    >
      {/* Animated Background - handled by hero-bg class */}

      {/* Floating Elements - Pure CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse hero-circle hero-circle-1 bg-orange-400/20 dark:bg-blue-400/20"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse hero-circle hero-circle-2 bg-amber-400/20 dark:bg-purple-400/20" style={{ animationDelay: '1s' }}></div>
  <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-pulse hero-circle hero-circle-3 bg-yellow-300/20 dark:bg-pink-400/20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg mb-6">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className={`text-sm font-medium ${theme !== 'dark' ? 'text-white' : 'text-gray-300'}`}>
                Disponibile per nuove opportunità
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="relative inline-block">
                <span className="gradient-text">
                  Vittorio Ciampi
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 timeline-line rounded-full"></span>
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8 h-10 flex items-center justify-center lg:justify-start">
              <Code2 className="w-6 h-6 mr-2" style={{ color: 'var(--primary-gradient-from)' }} />
              <span className="gradient-text">
                {text}
              </span>
              <span className="animate-pulse ml-1" style={{ color: 'var(--primary-gradient-from)' }}>|</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Software Developer specializzato in{' '}
              <span className="font-semibold text-orange-600 dark:text-blue-600">sviluppo mobile</span>,{' '}
              <span className="font-semibold text-amber-600 dark:text-orange-600">full stack</span> e{' '}
              <span className="font-semibold text-yellow-600 dark:text-pink-600">integrazione IA</span>.
              <br className="hidden md:block" />
              Autodidatta con eccezionale capacità di apprendimento e approccio innovativo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
              {[
                { number: '7', label: 'Progetti' },
                { number: '15+', label: 'Tecnologie' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold stat-number">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Vedi i miei progetti
              </button>

              <a
                href="/cv/Vittorio_Ciampi_CV.pdf"
                download="Vittorio_Ciampi_CV.pdf"
                className="btn-secondary flex items-center justify-center gap-2"
                aria-label="Scarica il mio curriculum vitae in formato PDF"
              >
                <Download size={20} />
                Scarica CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Glow effect */}
              <div className="profile-glow"></div>

              {/* Main circle */}
              <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="profile-circle-bg"></div>
                <div className="profile-circle-overlay"></div>

                {/* Profile placeholder with glassmorphism */}
                <div
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden"
                  role="img"
                  aria-label="Vittorio Ciampi - Immagine profilo"
                >
                  {/* Replace initials with actual profile image placed in public/images/profile.jpg */}
                  <Image
                    src="/images/profile.jpg"
                    alt="Foto di Vittorio Ciampi"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full rounded-full"
                    priority
                  />
                </div>

                {/* Floating icons */}
                <div className="profile-floating-icon absolute top-10 right-10 w-16 h-16">
                  <Code2 className="w-8 h-8" />
                </div>
                <div className="profile-floating-icon absolute bottom-10 left-10 w-16 h-16" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:scale-110 transition-all duration-200"
            style={{ color: 'var(--input-text)' }}
            aria-label="Scorri alla sezione About"
          >
            <span className="text-sm font-medium">Scorri</span>
            <div className="animate-bounce">
              <ArrowDown size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
