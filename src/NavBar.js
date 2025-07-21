import React, { useState, useRef, useEffect } from 'react';
import './NavBar.css';

const navLinks = [
  { label: 'Home', to: 'hero-section' },
  { label: 'Real Talk', to: 'real-talk-section' },
  { label: 'The App', to: 'what-is-section' },
  { label: 'Coming Soon', to: 'coming-soon-section' },
  { label: 'Socials', to: 'social-media-section' },
  { label: 'Beta', to: 'footer-cta-section' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  // Close menu on nav link click
  function handleNavClick(id) {
    scrollToSection(id);
    setMenuOpen(false);
  }

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 10,
        right: 10,
        zIndex: 99999,
        background: 'lime',
        color: 'black',
        padding: '10px',
        border: '2px solid red'
      }}>
        BURGER TEST
      </div>
      <nav className="navbar">
        <div className="navbar-content">
          <span className="navbar-logo">StudySprint</span>
          <button
            className="navbar-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="burger-bar" />
            <span className="burger-bar" />
            <span className="burger-bar" />
          </button>
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <button className="navbar-link" onClick={() => scrollToSection(link.to)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Mobile menu */}
          <div
            className={`navbar-mobile-menu${menuOpen ? ' open' : ''}`}
            ref={menuRef}
            aria-hidden={!menuOpen}
          >
            <ul>
              {navLinks.map(link => (
                <li key={link.to}>
                  <button className="navbar-link" onClick={() => handleNavClick(link.to)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar; 