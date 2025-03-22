import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context with default values to prevent errors when accessing outside provider
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Custom hook for using theme (simplified to avoid throwing errors)
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Get initial theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    try {
      // Check localStorage first
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      
      // Then check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      console.error('Error accessing theme preferences:', e);
    }
    
    // Default to light theme
    return 'light';
  });
  
  // Toggle theme function
  const toggleTheme = () => {
    try {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      console.log('Toggling theme from', theme, 'to', newTheme);
      
      // Update state
      setTheme(newTheme);
      
      // Store in localStorage
      localStorage.setItem('theme', newTheme);
      
      // Apply theme to document
      applyThemeToDOM(newTheme);
    } catch (e) {
      console.error('Error toggling theme:', e);
    }
  };

  // Function to apply theme to DOM
  const applyThemeToDOM = (currentTheme) => {
    try {
      document.documentElement.setAttribute('data-theme', currentTheme);
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    } catch (e) {
      console.error('Error applying theme to DOM:', e);
    }
  };

  // Apply theme when it changes
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
