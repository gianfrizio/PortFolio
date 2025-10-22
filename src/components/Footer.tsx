import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vittorio Ciampi</h3>
            <p className="footer-text-muted">
              Full Stack, Mobile & Game Developer specializzato in Full Stack, integrazione AI e sviluppo mobile.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <Link href="#home" className="block footer-text-muted hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="block footer-text-muted hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="block footer-text-muted hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="block footer-text-muted hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
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
          <p>&copy; 2025 Vittorio Ciampi. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;