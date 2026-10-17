import { useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

export function Navbar({ theme, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleSelect = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={handleSelect}>
          Pawlos Yohannes
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div id="site-menu" className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleSelect}>
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={onToggleTheme}
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
}
