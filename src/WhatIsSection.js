import React, { useEffect, useRef } from 'react';

const WhatIsSection = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('fade-in');
    }
  }, []);
  return (
    <section className="what-is-section">
      <div className="what-is-content" ref={ref}>
        <h2>What is StudySprint?</h2>
        <p>StudySprint turns your boring study sessions into a cozy little game. Every time you complete a focus sprint, your garden grows. Earn XP. Water your plants. Level up. Unlock beautiful new gardens.</p>
        <ul className="features-list">
          <li>Custom length focus sessions</li>
          <li>Animated growth after each session</li>
          <li>XP, coins, levels, and streaks</li>
          <li>Track your stats and habit progress</li>
          <li>No pressure. Just cozy productivity vibes.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhatIsSection; 