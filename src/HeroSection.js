import React, { useEffect, useRef } from 'react';

const HeroSection = ({ onNotifyClick }) => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('fade-in');
    }
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-content" ref={ref}>
        <h1>Study smarter. Grow stronger.<br />One focus session at a time.</h1>
        <p className="hero-sub">Built for students who want to stop procrastinating, stay consistent, and finally feel good about studying.</p>
        <button className="cta-btn" onClick={onNotifyClick}>Get Notified on Launch</button>
      </div>
    </section>
  );
};

export default HeroSection; 