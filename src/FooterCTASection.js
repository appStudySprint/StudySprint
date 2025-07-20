import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

const FooterCTASection = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setClosed(false);
      setVisible(true);
    }
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottom = document.body.offsetHeight - 10;
      if (scrollPosition >= bottom && !closed) {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [closed]);

  const handleClose = () => {
    setVisible(false);
    setClosed(true);
  };

  return (
    <footer className={`footer-cta-section${visible ? ' show' : ''}`} id="footer-cta-section">
      <button className="footer-cta-close" onClick={handleClose} aria-label="Close">×</button>
      <div className="footer-cta-content">
        <p>Want to be the first to try StudySprint? Drop your email and we’ll invite you to the beta <span role="img" aria-label="seedling">🌱</span></p>
        <form className="cta-form" action="https://formspree.io/f/movljlbj" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <button type="submit">Notify Me</button>
        </form>
      </div>
    </footer>
  );
});

export default FooterCTASection; 