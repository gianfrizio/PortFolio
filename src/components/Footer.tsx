'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vittorio Ciampi</h3>
            <p className="footer-text-muted">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.links')}</h4>
            <div className="space-y-2">
              <Link href="#home" className="block footer-text-muted hover:text-white transition-colors">
                {t('nav.home')}
              </Link>
              <Link href="#about" className="block footer-text-muted hover:text-white transition-colors">
                {t('nav.about')}
              </Link>
              <Link href="#projects" className="block footer-text-muted hover:text-white transition-colors">
                {t('nav.projects')}
              </Link>
              <Link href="#contact" className="block footer-text-muted hover:text-white transition-colors">
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contacts')}</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gianfrizio"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-text-muted hover:text-white transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vittorio-ciampi"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-text-muted hover:text-white transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vittoriociampi83@gmail.com"
                className="footer-text-muted hover:text-white transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t footer-border mt-8 pt-8 text-center footer-text-muted">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;