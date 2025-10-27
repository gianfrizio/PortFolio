'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'it' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it');

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === 'it' ? 'en' : 'it';
      localStorage.setItem('language', newLanguage);
      return newLanguage;
    });
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Disponibile per nuove opportunità',
    'hero.title1': 'Full Stack Developer',
    'hero.title2': 'Mobile Developer',
    'hero.title3': 'Game Developer',
    'hero.title4': 'AI Integration Specialist',
    'hero.description': 'Software Developer specializzato in <span class="gradient-text">sviluppo mobile</span>, <span class="gradient-text">full stack</span> e <span class="gradient-text">integrazione IA</span>.',
    'hero.stats.projects': 'Progetti',
    'hero.stats.technologies': 'Tecnologie',
    'hero.cta.projects': 'Vedi i miei progetti',
    'hero.cta.cv': 'Scarica CV',
    'hero.scroll': 'Scorri',

    // About
    'about.title': 'Chi sono',
    'about.intro': 'La mia storia',
    'about.description': 'Sono un autodidatta Software, Mobile & Game Developer. Durante il mio percorso di studi ho assunto svariate competenze specialmente in sviluppo full-stack, implementazione di sistemi IA e sviluppo mobile tramite il mio progetto personale di un\'intera App innovativa. Sono una persona volta all\'apprendimento ma soprattutto appassionata di questo settore.',
    'about.highlights.cleanCode.title': 'Clean Code',
    'about.highlights.cleanCode.description': 'Codice leggibile e manutenibile',
    'about.highlights.performance.title': 'Performance',
    'about.highlights.performance.description': 'Ottimizzazione e velocità',
    'about.highlights.responsive.title': 'Responsive',
    'about.highlights.responsive.description': 'Design adattivo',
    'about.highlights.scalable.title': 'Scalabile',
    'about.highlights.scalable.description': 'Architetture robuste',
    'about.skillsTitle': 'Le mie competenze',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend & Database',
    'about.skills.mobile': 'Mobile & Game Dev',
    'about.skills.tools': 'Tools & AI',

    // Skills
    'skills.title': 'Competenze Tecniche',
    'skills.description': 'Le tecnologie e gli strumenti che utilizzo quotidianamente per creare soluzioni innovative.',
    'skills.categories.languages': 'Linguaggi',
    'skills.categories.frontend': 'Frontend',
    'skills.categories.backend': 'Backend & Database',
    'skills.categories.specializations': 'Specializzazioni',
    'skills.categories.tools': 'Tools',
    'skills.categories.soft': 'Soft Skills',
    'skills.items.react': 'React.js & Hooks',
    'skills.items.nextjs': 'Next.js 15',
    'skills.items.htmlCss': 'HTML5/CSS3 - Tailwind',
    'skills.items.responsive': 'Responsive Design',
    'skills.items.animations': 'Animazioni CSS/JS',
    'skills.items.fullstack': 'Sviluppo Full Stack',
    'skills.items.gamedev': 'Game Development',
    'skills.items.aiIntegration': 'Integrazione IA',
    'skills.items.mobiledev': 'Mobile Development',
    'skills.items.performance': 'Ottimizzazione Performance',
    'skills.items.aiDev': 'Sviluppo Assistito da IA',
    'skills.items.architecture': 'Architettura Software',
    'skills.items.problemSolving': 'Problem Solving',
    'skills.items.aiProductivity': 'Produttività con IA',
    'skills.items.teamwork': 'Lavoro di Squadra',
    'skills.items.pressure': 'Gestione Stress',
    'skills.items.adaptability': 'Adattabilità',
    'skills.stats.projects': 'Progetti Portfolio Completati',
    'skills.stats.technologies': 'Tecnologie Padroneggiate',
    'skills.stats.dedication': 'Dedizione & Passione',
    'skills.stats.aiProductivity': 'Produttività con IA',
    'skills.stats.courses': 'Corsi Completati',

    // Experience
    'experience.title': 'Il mio Percorso',
    'experience.description': 'Da autodidatta a sviluppatore competente: il viaggio di apprendimento intensivo e crescita costante.',
    'experience.achievements': 'Risultati Chiave:',
    'experience.items.frontend.title': 'Corso Front-End',
    'experience.items.frontend.company': 'Synergie Italia - Riverloop',
    'experience.items.frontend.location': 'Remoto',
    'experience.items.frontend.period': 'Settembre 2025 - Completato',
    'experience.items.frontend.description': 'Corso Front-End di 160h offerto da Riverloop, finanziato da Formatemp e promosso da Synergie Italia con rilascio di attestato certificato.',
    'experience.items.frontend.achievements.0': 'JavaScript ES6+ - Async/await, DOM manipulation, SPA development',
    'experience.items.frontend.achievements.1': 'TypeScript (ESNext/v5) - tipizzazione statica, interfacce/generics, utility',
    'experience.items.frontend.achievements.2': 'React: sviluppo componenti riutilizzabili, gestione stato con Hooks e Context API',
    'experience.items.frontend.achievements.3': 'Next.js: SSR e SSG, gestione API Routes, ottimizzazione performance e SEO',
    'experience.items.backend.title': 'Corso Back-End',
    'experience.items.backend.company': 'Synergie Italia - Riverloop',
    'experience.items.backend.location': 'Remoto',
    'experience.items.backend.period': 'Ottobre 2025 - Completato',
    'experience.items.backend.description': 'Corso Back-End di 160h offerto da Riverloop, finanziato da Formatemp e promosso da Synergie Italia con rilascio di attestato certificato.',
    'experience.items.backend.achievements.0': 'Node.js (v20+) – Runtime event-driven, I/O non bloccante, programmazione asincrona',
    'experience.items.backend.achievements.1': 'Express.js – Sviluppo API RESTful, routing, architettura middleware, gestione errori',
    'experience.items.backend.achievements.2': 'MongoDB – Database NoSQL, modello dati flessibile, Mongoose ODM',
    'experience.items.backend.achievements.3': 'REST API – Operazioni CRUD, metodi HTTP, formato JSON, separazione client-server',
    'experience.items.ai.title': 'AI Integration Specialist',
    'experience.items.ai.company': 'Progetti Innovativi con IA',
    'experience.items.ai.location': 'Remoto',
    'experience.items.ai.period': 'Presente',
    'experience.items.ai.description': 'Specializzato nell\'integrazione di soluzioni IA avanzate in applicazioni mobile e web, con particolare focus su OpenAI GPT-4 e DALL-E.',
    'experience.items.ai.achievements.0': 'Integrato OpenAI GPT-4 per generazione di testo e analisi semantica',
    'experience.items.ai.achievements.1': 'Implementato DALL-E per generazione di immagini da prompt testuali',
    'experience.items.ai.achievements.2': 'Sviluppato Dream Visualizer: app mobile con IA per interpretazione sogni',
    'experience.items.ai.achievements.3': 'Creato sistemi di raccomandazione intelligenti e chatbot conversazionali',
    'experience.items.gamedev.title': 'Game Developer',
    'experience.items.gamedev.company': 'Progetti Game Development',
    'experience.items.gamedev.location': 'Remoto',
    'experience.items.gamedev.period': 'Presente',
    'experience.items.gamedev.description': 'Sviluppo di game engine e giochi interattivi utilizzando C/C++ e SDL2, con focus su performance e grafica.',
    'experience.items.gamedev.achievements.0': 'Creato Tetris Game Engine completo in C++ con SDL2',
    'experience.items.gamedev.achievements.1': 'Implementato sistema di rendering grafico e gestione eventi',
    'experience.items.gamedev.achievements.2': 'Ottimizzato performance e memoria per gameplay fluido',
    'experience.items.gamedev.achievements.3': 'Applicato principi OOP e design patterns per architettura pulita',
    'experience.items.education.title': 'Diploma - Geometra',
    'experience.items.education.company': 'Istituto Tecnico per Geometri',
    'experience.items.education.location': 'Latina (LT), Italia',
    'experience.items.education.period': '2011 - 2016',
    'experience.items.education.description': 'Percorso di studi tecnico che ha sviluppato capacità di problem solving, pensiero logico e gestione progetti complessi.',
    'experience.items.education.achievements.0': 'Sviluppato solide basi di matematica e fisica applicate',
    'experience.items.education.achievements.1': 'Acquisito competenze in disegno tecnico e progettazione CAD',
    'experience.items.education.achievements.2': 'Parallelamente ho iniziato il percorso da autodidatta in programmazione',

    // Projects
    'projects.title': 'I miei progetti',
    'projects.description': 'Ecco una selezione dei progetti che ho sviluppato, dalle applicazioni mobile ai siti web complessi.',
    'projects.filters.all': 'Tutti',
    'projects.filters.webapp': 'Web App',
    'projects.filters.mobileai': 'Mobile & AI',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.gameengine': 'Game Engine',
    'projects.filters.ecommerce': 'E-commerce',
    'projects.filters.static': 'Static Site',
    'projects.items.travelmate.description': 'App web per pianificare viaggi con API di mappe, meteo e immagini. Interfaccia moderna con Next.js 15 e TypeScript.',
    'projects.items.cinema.description': 'Piattaforma cinema completa con backend Spring Boot, ML per raccomandazioni film e interfaccia web interattiva.',
    'projects.items.dream.description': 'App mobile innovativa che utilizza OpenAI GPT-4 e DALL-E per interpretare e visualizzare sogni con immagini AI.',
    'projects.items.tetris.description': 'Game engine Tetris completo sviluppato in C++ con SDL2, con gestione grafica, fisica e logica di gioco.',
    'projects.items.watchfilm.description': 'Web app per ricerca film con TheMovieDB API, ES6+ modules e design moderno con async/await.',
    'projects.items.magic.description': 'Sito web statico elegante con HTML5 e CSS3 avanzato, animazioni e design responsive puro.',
    'projects.items.ecommerce.description': 'E-commerce cart con React, gestione stato Context API, localStorage e supporto multilingua i18n.',
    'projects.code': 'Codice',
    'projects.demo': 'Demo',

    // Contact
    'contact.title': 'Contattami',
    'contact.description': 'Hai un progetto in mente? Sono sempre interessato a nuove opportunità di collaborazione.',
    'contact.form.title': 'Invia un messaggio',
    'contact.form.name': 'Nome',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tua@email.com',
    'contact.form.subject': 'Oggetto',
    'contact.form.subjectPlaceholder': 'Oggetto del messaggio',
    'contact.form.message': 'Messaggio',
    'contact.form.messagePlaceholder': 'Il tuo messaggio...',
    'contact.form.send': 'Invia messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.success': 'Messaggio inviato con successo! Ti risponderò al più presto.',
    'contact.error': 'Si è verificato un errore. Riprova più tardi.',
    'contact.info.title': 'Informazioni di contatto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefono',
    'contact.info.location': 'Posizione',
    'contact.social': 'Seguimi sui social',
    'contact.cta.title': 'Pronto per iniziare un progetto?',
    'contact.cta.description': 'Contattami per discutere delle tue idee e trasformarle in realtà.',
    'contact.cta.button': 'Scrivimi ora',

    // Footer
    'footer.description': 'Full Stack, Mobile & Game Developer specializzato in Front-End, integrazione AI e sviluppo mobile cross-platform.',
    'footer.links': 'Links',
    'footer.contacts': 'Contatti',
    'footer.copyright': '© 2025 Vittorio Ciampi. Tutti i diritti riservati.',
    // Toggles
    'theme.switchToLight': 'Passa a tema chiaro',
    'theme.switchToDark': 'Passa a tema scuro',
    'language.switchToEnglish': 'Passa a Inglese',
    'language.switchToItalian': 'Passa a Italiano',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Available for new opportunities',
    'hero.title1': 'Full Stack Developer',
    'hero.title2': 'Mobile Developer',
    'hero.title3': 'Game Developer',
    'hero.title4': 'AI Integration Specialist',
    'hero.description': 'Software Developer specialized in <span class="gradient-text">mobile development</span>, <span class="gradient-text">full stack</span> and <span class="gradient-text">AI integration</span>.',
    'hero.stats.projects': 'Projects',
    'hero.stats.technologies': 'Technologies',
    'hero.cta.projects': 'View my projects',
    'hero.cta.cv': 'Download CV',
    'hero.scroll': 'Scroll',

    // About
    'about.title': 'About Me',
    'about.intro': 'My Story',
    'about.description': 'I am a self-taught Software, Mobile & Game Developer. During my studies, I have acquired various skills especially in full-stack development, AI system implementation and mobile development through my personal project of an entire innovative App. I am a person focused on learning and above all passionate about this field.',
    'about.highlights.cleanCode.title': 'Clean Code',
    'about.highlights.cleanCode.description': 'Readable and maintainable code',
    'about.highlights.performance.title': 'Performance',
    'about.highlights.performance.description': 'Optimization and speed',
    'about.highlights.responsive.title': 'Responsive',
    'about.highlights.responsive.description': 'Adaptive design',
    'about.highlights.scalable.title': 'Scalable',
    'about.highlights.scalable.description': 'Robust architectures',
    'about.skillsTitle': 'My Skills',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend & Database',
    'about.skills.mobile': 'Mobile & Game Dev',
    'about.skills.tools': 'Tools & AI',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.description': 'Technologies and tools I use daily to create innovative solutions.',
    'skills.categories.languages': 'Languages',
    'skills.categories.frontend': 'Frontend',
    'skills.categories.backend': 'Backend & Database',
    'skills.categories.specializations': 'Specializations',
    'skills.categories.tools': 'Tools',
    'skills.categories.soft': 'Soft Skills',
    'skills.items.react': 'React.js & Hooks',
    'skills.items.nextjs': 'Next.js 15',
    'skills.items.htmlCss': 'HTML5/CSS3 - Tailwind',
    'skills.items.responsive': 'Responsive Design',
    'skills.items.animations': 'CSS/JS Animations',
    'skills.items.fullstack': 'Full Stack Development',
    'skills.items.gamedev': 'Game Development',
    'skills.items.aiIntegration': 'AI Integration',
    'skills.items.mobiledev': 'Mobile Development',
    'skills.items.performance': 'Performance Optimization',
    'skills.items.aiDev': 'AI-Assisted Development',
    'skills.items.architecture': 'Software Architecture',
    'skills.items.problemSolving': 'Problem Solving',
    'skills.items.aiProductivity': 'AI-Enhanced Productivity',
    'skills.items.teamwork': 'Teamwork',
    'skills.items.pressure': 'Stress Management',
    'skills.items.adaptability': 'Adaptability',
    'skills.stats.projects': 'Portfolio Projects Completed',
    'skills.stats.technologies': 'Technologies Mastered',
    'skills.stats.dedication': 'Dedication & Passion',
    'skills.stats.aiProductivity': 'AI-Enhanced Productivity',
    'skills.stats.courses': 'Courses Completed',

    // Experience
    'experience.title': 'My Journey',
    'experience.description': 'From self-taught to skilled developer: a journey of intensive learning and constant growth.',
    'experience.achievements': 'Key Achievements:',
    'experience.items.frontend.title': 'Front-End Course',
    'experience.items.frontend.company': 'Synergie Italia - Riverloop',
    'experience.items.frontend.location': 'Remote',
    'experience.items.frontend.period': 'September 2022 - Completed',
    'experience.items.frontend.description': '160-hour Front-End course offered by Riverloop, funded by Formatemp and promoted by Synergie Italia with certified completion certificate.',
    'experience.items.frontend.achievements.0': 'JavaScript ES6+ - Async/await, DOM manipulation, SPA development',
    'experience.items.frontend.achievements.1': 'TypeScript (ESNext/v5) - static typing, interfaces/generics, utilities',
    'experience.items.frontend.achievements.2': 'React: development of reusable components, state management with Hooks and Context API',
    'experience.items.frontend.achievements.3': 'Next.js: SSR and SSG, API Routes management, performance and SEO optimization',
    'experience.items.backend.title': 'Back-End Course',
    'experience.items.backend.company': 'Synergie Italia - Riverloop',
    'experience.items.backend.location': 'Remote',
    'experience.items.backend.period': 'October 2025 - Completed',
    'experience.items.backend.description': '160-hour Back-End course offered by Riverloop, funded by Formatemp and promoted by Synergie Italia with certified completion certificate.',
    'experience.items.backend.achievements.0': 'Node.js (v20+) – Event-driven runtime, non-blocking I/O, asynchronous programming',
    'experience.items.backend.achievements.1': 'Express.js – RESTful API development, routing, middleware architecture, error handling',
    'experience.items.backend.achievements.2': 'MongoDB – NoSQL database, flexible data model, Mongoose ODM',
    'experience.items.backend.achievements.3': 'REST API – CRUD operations, HTTP methods, JSON format, client-server separation',
    'experience.items.ai.title': 'AI Integration Specialist',
    'experience.items.ai.company': 'Innovative AI Projects',
    'experience.items.ai.location': 'Remote',
    'experience.items.ai.period': 'Present',
    'experience.items.ai.description': 'Specialized in integrating advanced AI solutions into mobile and web applications, with particular focus on OpenAI GPT-4 and DALL-E.',
    'experience.items.ai.achievements.0': 'Integrated OpenAI GPT-4 for text generation and semantic analysis',
    'experience.items.ai.achievements.1': 'Implemented DALL-E for image generation from text prompts',
    'experience.items.ai.achievements.2': 'Developed Dream Visualizer: mobile app with AI for dream interpretation',
    'experience.items.ai.achievements.3': 'Created intelligent recommendation systems and conversational chatbots',
    'experience.items.gamedev.title': 'Game Developer',
    'experience.items.gamedev.company': 'Game Development Projects',
    'experience.items.gamedev.location': 'Remote',
    'experience.items.gamedev.period': 'Present',
    'experience.items.gamedev.description': 'Development of game engines and interactive games using C/C++ and SDL2, focusing on performance and graphics.',
    'experience.items.gamedev.achievements.0': 'Created complete Tetris Game Engine in C++ with SDL2',
    'experience.items.gamedev.achievements.1': 'Implemented graphics rendering system and event handling',
    'experience.items.gamedev.achievements.2': 'Optimized performance and memory for smooth gameplay',
    'experience.items.gamedev.achievements.3': 'Applied OOP principles and design patterns for clean architecture',
    'experience.items.education.title': 'High School Diploma - Surveyor',
    'experience.items.education.company': 'Technical Institute for Surveyors',
    'experience.items.education.location': 'Aprilia (LT), Italy',
    'experience.items.education.period': '2011 - 2016',
    'experience.items.education.description': 'Technical education path that developed problem-solving skills, logical thinking and complex project management.',
    'experience.items.education.achievements.0': 'Developed strong foundations in applied mathematics and physics',
    'experience.items.education.achievements.1': 'Acquired skills in technical drawing and CAD design',
    'experience.items.education.achievements.2': 'In parallel, started self-taught journey in programming',

    // Projects
    'projects.title': 'My Projects',
    'projects.description': 'Here is a selection of projects I have developed, from mobile applications to complex websites.',
    'projects.filters.all': 'All',
    'projects.filters.webapp': 'Web App',
    'projects.filters.mobileai': 'Mobile & AI',
    'projects.filters.fullstack': 'Full Stack',
    'projects.filters.gameengine': 'Game Engine',
    'projects.filters.ecommerce': 'E-commerce',
    'projects.filters.static': 'Static Site',
    'projects.items.travelmate.description': 'Web app for travel planning with map, weather and image APIs. Modern interface with Next.js 15 and TypeScript.',
    'projects.items.cinema.description': 'Complete cinema platform with Spring Boot backend, ML for movie recommendations and interactive web interface.',
    'projects.items.dream.description': 'Innovative mobile app that uses OpenAI GPT-4 and DALL-E to interpret and visualize dreams with AI images.',
    'projects.items.tetris.description': 'Complete Tetris game engine developed in C++ with SDL2, with graphics, physics and game logic management.',
    'projects.items.watchfilm.description': 'Web app for movie search with TheMovieDB API, ES6+ modules and modern design with async/await.',
    'projects.items.magic.description': 'Elegant static website with advanced HTML5 and CSS3, animations and pure responsive design.',
    'projects.items.ecommerce.description': 'E-commerce cart with React, Context API state management, localStorage and i18n multilingual support.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',

    // Contact
    'contact.title': 'Contact Me',
    'contact.description': 'Have a project in mind? I\'m always interested in new collaboration opportunities.',
    'contact.form.title': 'Send a message',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Message subject',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.success': 'Message sent successfully! I will reply as soon as possible.',
    'contact.error': 'An error occurred. Please try again later.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.social': 'Follow me on social',
    'contact.cta.title': 'Ready to start a project?',
    'contact.cta.description': 'Contact me to discuss your ideas and turn them into reality.',
    'contact.cta.button': 'Write me now',

    // Footer
    'footer.description': 'Full Stack, Mobile & Game Developer specialized in Full Stack, AI integration and mobile development.',
    'footer.links': 'Links',
    'footer.contacts': 'Contacts',
    'footer.copyright': '© 2025 Vittorio Ciampi. All rights reserved.',
    // Toggles
    'theme.switchToLight': 'Switch to light theme',
    'theme.switchToDark': 'Switch to dark theme',
    'language.switchToEnglish': 'Switch to English',
    'language.switchToItalian': 'Switch to Italian',
  },
};
