import React from 'react';
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

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <span className="navbar-logo">StudySprint</span>
      <ul className="navbar-links">
        {navLinks.map(link => (
          <li key={link.to}>
            <button className="navbar-link" onClick={() => scrollToSection(link.to)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default NavBar; 