'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme } = useTheme();

  const handleClick = () => {
    console.log('Language toggle clicked, current language:', language);
    toggleLanguage();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="toggle-btn"
      aria-label={language === 'it' ? t('language.switchToEnglish') : t('language.switchToItalian')}
  title={language === 'it' ? t('language.switchToEnglish') : t('language.switchToItalian')}
    >
      {theme === 'dark' ? (
        <span className="toggle-btn__label text-white">{language === 'it' ? 'EN' : 'IT'}</span>
      ) : (
        <span className="toggle-btn__label text-gray-800">{language === 'it' ? 'EN' : 'IT'}</span>
      )}
    </button>
  );
}
