'use client';

import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Reset status quando l'utente modifica il form
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mkgqeded', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Si è verificato un errore. Riprova più tardi.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Impossibile inviare il messaggio. Verifica la tua connessione.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'vittoriociampi83@gmail.com',
      link: 'mailto:vittoriociampi83@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefono',
      content: '+39 339 526 0163',
      link: 'tel:+393395260163'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Posizione',
      content: 'Aprilia (LT), Italia',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/gianfrizio',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vittorio-ciampi',
      color: 'hover:text-orange-600 dark:hover:text-blue-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: 'mailto:vittoriociampi83@gmail.com',
      color: 'hover:text-orange-700 dark:hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-16 section-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header">
          <h2 className="section-title">Contattami</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Hai un progetto in mente? Sono sempre interessato a nuove opportunità di collaborazione.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form-card">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Invia un messaggio</h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="alert alert-success">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <p>Messaggio inviato con successo! Ti risponderò al più presto.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="alert alert-error">
                <XCircle className="w-5 h-5 flex-shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 rounded-lg"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-3 rounded-lg"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Oggetto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input w-full px-4 py-3 rounded-lg"
                  placeholder="Oggetto del messaggio"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input w-full px-4 py-3 rounded-lg resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Invia messaggio
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informazioni di contatto</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 icon-bg rounded-lg flex items-center justify-center text-white shadow-md">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Seguimi sui social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-box">
              <h4 className="text-lg font-semibold mb-2">Pronto per iniziare un progetto?</h4>
              <p className="cta-box-text mb-4">
                Contattami per discutere delle tue idee e trasformarle in realtà.
              </p>
              <a
                href="mailto:vittoriociampi83@gmail.com"
                className="cta-box-btn"
              >
                <Mail className="w-4 h-4" />
                <span>Scrivimi ora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;