import React, { Suspense, useRef } from 'react';
import './App.css';
import HeroSection from './HeroSection';
import WhatIsSection from './WhatIsSection';
import ComingSoonSection from './ComingSoonSection';
import RealTalkSection from './RealTalkSection';
import SocialMediaSection from './SocialMediaSection';
import NavBar from './NavBar';
const FooterCTASection = React.lazy(() => import('./FooterCTASection'));

function App() {
  const footerCTARef = useRef();

  const handleScrollToForm = () => {
    if (footerCTARef.current) {
      footerCTARef.current.show();
      const formSection = document.getElementById('footer-cta-section');
      if (formSection) {
        // Custom scroll: slow down by 30% in the last 20% of the scroll
        const viewportHeight = window.innerHeight;
        const offset = viewportHeight * 0.1; // 10% from top
        const targetY = formSection.getBoundingClientRect().top + window.pageYOffset - offset;
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const duration = 1600;
        let startTime = null;
        function customEase(t) {
          if (t < 0.8) {
            return t / 0.8 * 0.7; // first 80% of time, 70% of distance
          } else {
            // last 20% of time, 30% of distance, slower
            return 0.7 + ((t - 0.8) / 0.2) * 0.3;
          }
        }
        function scrollStep(timestamp) {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = customEase(progress);
          window.scrollTo(0, startY + distance * eased);
          if (progress < 1) {
            window.requestAnimationFrame(scrollStep);
          }
        }
        window.requestAnimationFrame(scrollStep);
      }
    }
  };

  return (
    <div className="App">
      <NavBar />
      <section id="hero-section">
        <HeroSection onNotifyClick={handleScrollToForm} />
      </section>
      <section id="real-talk-section">
        <RealTalkSection />
      </section>
      <section id="what-is-section">
        <WhatIsSection />
      </section>
      <section id="coming-soon-section">
        <ComingSoonSection />
      </section>
      <section id="social-media-section">
        <SocialMediaSection />
      </section>
      <Suspense fallback={null}>
        <FooterCTASection ref={footerCTARef} />
      </Suspense>
    </div>
  );
}

export default App;
