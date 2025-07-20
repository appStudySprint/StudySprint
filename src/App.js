import React from 'react';
import './App.css';
import HeroSection from './HeroSection';
import WhatIsSection from './WhatIsSection';
import ComingSoonSection from './ComingSoonSection';
import RealTalkSection from './RealTalkSection';
import FooterCTASection from './FooterCTASection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <WhatIsSection />
      <ComingSoonSection />
      <RealTalkSection />
      <FooterCTASection />
    </div>
  );
}

export default App;
