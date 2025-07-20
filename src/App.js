import React, { useRef } from 'react';
import './App.css';
import HeroSection from './HeroSection';
import WhatIsSection from './WhatIsSection';
import ComingSoonSection from './ComingSoonSection';
import RealTalkSection from './RealTalkSection';
import FooterCTASection from './FooterCTASection';

function App() {
  const footerCTARef = useRef();

  const handleScrollToForm = () => {
    if (footerCTARef.current) {
      footerCTARef.current.show();
      const formSection = document.getElementById('footer-cta-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="App">
      <HeroSection onNotifyClick={handleScrollToForm} />
      <RealTalkSection />
      <WhatIsSection />
      <ComingSoonSection />
      <FooterCTASection ref={footerCTARef} />
    </div>
  );
}

export default App;
