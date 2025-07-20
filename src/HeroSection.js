import React from 'react';

const HeroSection = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('footer-cta-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <h1>Study smarter. Grow stronger. One focus session at a time. <span role="img" aria-label="seedling">🌱</span></h1>
      <p className="hero-sub">Built for students who want to stop procrastinating, stay consistent, and finally feel good about studying.</p>
      <button className="cta-btn" onClick={handleScrollToForm}>📲 Get Notified on Launch</button>
    </section>
  );
};

export default HeroSection; 