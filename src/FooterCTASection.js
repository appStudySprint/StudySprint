import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';

function debounce(func, delay = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const FooterCTASection = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const animRef = useRef();

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
      setClosed(false);
    }
  }));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottom = document.body.offsetHeight - 10;
      const atBottom = scrollPosition >= bottom;
      if (!atBottom && closed) {
        const distanceFromBottom = document.body.offsetHeight - window.innerHeight - window.scrollY;
        if (distanceFromBottom > 200) {
          setClosed(false);
        }
      }
      if (atBottom && !closed) {
        setVisible(true);
      }
    };
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', debouncedHandleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', debouncedHandleScroll);
    };
  }, [closed]);

  useEffect(() => {
    if (visible && animRef.current) {
      animRef.current.classList.add('fade-in');
    }
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
    setClosed(true);
  };

  return (
    <footer className={`footer-cta-section${visible ? ' show' : ''}`} id="footer-cta-section">
      <button className="footer-cta-close" onClick={handleClose} aria-label="Close">×</button>
      <div className="footer-cta-anim" ref={animRef}>
        <div className="footer-cta-content">
          <p>Want to be the first to try StudySprint? Drop your email and we’ll invite you to the beta.</p>
          <form className="cta-form" action="https://formspree.io/f/movljlbj" method="POST">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              aria-required="true"
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              aria-required="true"
            />
            <button type="submit">Notify Me</button>
          </form>
        </div>
      </div>
    </footer>
  );
});

export default FooterCTASection; 