'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language, t } = useLanguage();

  const handleClick = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="toggle-btn"
    aria-label={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
  title={theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')}
    >
  {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-gray-800" />}
    </button>
  );
}
