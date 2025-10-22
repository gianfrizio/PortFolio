'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="p-2 rounded-lg bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer border-2 border-neutral-200 dark:border-gray-700 shadow-sm hover:shadow-md"
      style={
        theme === 'dark'
          ? undefined
          : { backgroundColor: 'rgba(255,255,255,0.95)', borderColor: '#e5e7eb' }
      }
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Passa a tema chiaro' : 'Passa a tema scuro'}
    >
  {theme === 'dark' ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-gray-800" />}
    </button>
  );
}
