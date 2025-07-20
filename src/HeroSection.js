import React from 'react';

function smoothScrollTo(element, duration = 1200) {
  const targetY = element.getBoundingClientRect().top + window.pageYOffset;
  const startY = window.pageYOffset;
  const diff = targetY - startY;
  let start;

  function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startY + diff * easeInOutQuad(percent));
    if (percent < 1) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  window.requestAnimationFrame(step);
}

const HeroSection = () => {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('footer-cta-section');
    if (formSection) {
      smoothScrollTo(formSection, 1200);
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