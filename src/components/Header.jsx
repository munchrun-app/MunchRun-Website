import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const location = useLocation();
  
  // Access theme context safely with fallback
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme || 'light';
  const toggleTheme = themeContext?.toggleTheme || (() => {
    console.warn('Theme toggle not available, using fallback');
    // Fallback direct toggle if context method fails
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  });
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-base-100 shadow-md' : 'bg-base-100/90 backdrop-blur-sm'}`}>
      {/* Coming Soon Banner */}
      <div className="bg-secondary text-secondary-content py-1 text-center text-sm font-bold" role="alert">
        <span aria-hidden="true">🚧</span> MunchRun is currently in early planning stages <span aria-hidden="true">🚧</span>
      </div>
      
      {/* Main Navbar */}
      <nav className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <img 
              src="/logo-small.png" 
              alt="MunchRun Logo" 
              className="h-10 w-auto"
              onError={(e) => {e.target.onerror = null; e.target.src = 'https://placehold.co/40?text=MR'}}
            />
            <span><span className="text-primary">Munch</span>Run</span>
          </Link>
        </div>

        {/* Desktop navigation links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link to="/" className={isActive('/') ? 'active font-bold' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active font-bold' : ''}>About</Link>
            </li>
            <li>
              <Link to="/drivers" className={isActive('/drivers') ? 'active font-bold' : ''}>Drivers</Link>
            </li>
            <li>
              <Link to="/restaurants" className={isActive('/restaurants') ? 'active font-bold' : ''}>Restaurants</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active font-bold' : ''}>Contact</Link>
            </li>
            <li>
              <Link to="/faq" className={isActive('/faq') ? 'active font-bold' : ''}>FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Dark mode toggle button */}
          <button 
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            data-testid="theme-toggle"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Mobile menu toggle button */}
          <button
            className="btn btn-ghost lg:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="menu menu-vertical p-4 bg-base-100 shadow-lg">
          <li>
            <Link to="/" className={isActive('/') ? 'active font-bold' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={isActive('/about') ? 'active font-bold' : ''}>About</Link>
          </li>
          <li>
            <Link to="/drivers" className={isActive('/drivers') ? 'active font-bold' : ''}>Drivers</Link>
          </li>
          <li>
            <Link to="/restaurants" className={isActive('/restaurants') ? 'active font-bold' : ''}>Restaurants</Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact') ? 'active font-bold' : ''}>Contact</Link>
          </li>
          <li>
            <Link to="/faq" className={isActive('/faq') ? 'active font-bold' : ''}>FAQ</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;