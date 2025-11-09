import React from 'react';
import { Theme } from '../App';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={`theme-toggle-circle ${theme}`}>
        <span className="material-icons-outlined theme-toggle-icon sun-icon text-lg">light_mode</span>
        <span className="material-icons-outlined theme-toggle-icon moon-icon text-lg">dark_mode</span>
      </div>
    </button>
  );
};

export default ThemeToggle;