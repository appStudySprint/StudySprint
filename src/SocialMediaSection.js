import React from 'react';
import './SocialMediaSection.css';

const socials = [
  { name: 'X', url: '#', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F5F5F7"/>
      <text x="16" y="22" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#111">X</text>
    </svg>
  ) },
  { name: 'Instagram', url: '#', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F5F5F7"/>
      <rect x="10" y="10" width="12" height="12" rx="4" fill="#111"/>
      <circle cx="16" cy="16" r="3" fill="#F5F5F7"/>
      <circle cx="21" cy="11" r="1" fill="#F5F5F7"/>
    </svg>
  ) },
  { name: 'TikTok', url: '#', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#F5F5F7"/>
      <path d="M20 12v5.5a2.5 2.5 0 11-2.5-2.5" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="22" cy="12" r="1" fill="#111"/>
    </svg>
  ) },
];

function SocialMediaSection() {
  return (
    <section className="social-media-section">
      <h2>Follow Us</h2>
      <div className="social-icons">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="social-icon"
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialMediaSection; 