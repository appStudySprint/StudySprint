import React, { useEffect, useRef } from 'react';

const RealTalkSection = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('fade-in');
    }
  }, []);
  return (
    <section className="real-talk-section">
      <div className="real-talk-content" ref={ref}>
        <h2>Real Talk</h2>
        <p>I’m building StudySprint because I was tired of burnout. Of planning all day and doing nothing. Of having 1,000 tabs open and still not starting.<br/>
        This app doesn’t yell at you. It grows with you. For every session you complete, you get visual proof that you’re showing up. That’s how habits are built.<br/>
        I’m still building StudySprint, and I hope you’ll join me on this journey!</p>
      </div>
    </section>
  );
};

export default RealTalkSection; 