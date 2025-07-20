import React from 'react';

const features = [
  { icon: '🏡', text: 'Themed Gardens (Park, Space, Zen…)'},
  { icon: '🏆', text: 'Leaderboards (XP & streak rankings)'},
  { icon: '🌟', text: 'Boosters (Fertilizer, XP powerups)'},
  { icon: '👥', text: 'Study Groups (Sprint with friends)'},
  { icon: '🎨', text: 'Personalization (Sounds, themes, animations)'},
  { icon: '⚔️', text: 'Competitions coming soon!'},
];

const ComingSoonSection = () => (
  <section className="coming-soon-section">
    <h2>🚀 What’s Coming Soon</h2>
    <div className="coming-soon-grid">
      {features.map((f, i) => (
        <div className="coming-soon-feature" key={i}>
          <span className="feature-icon" role="img" aria-label="icon">{f.icon}</span>
          <span className="feature-text">{f.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ComingSoonSection; 