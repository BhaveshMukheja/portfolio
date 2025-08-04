'use client';

import React, { useEffect, useState } from 'react';
import FuzzyText from '../FuzzyText/comp';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress(progress + 1), 25);
      return () => clearTimeout(timeout);
    } else {
      // Trigger fade-out once we hit 100%
      setTimeout(() => setFadeOut(true), 300);
    }
  }, [progress]);

  return (
    <main

      className={`min-h-screen min-w-screen fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} fontSize={50}>
          Loading
        </FuzzyText>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true} color='#F6D13A' fontSize={80}>
          Portfolio
        </FuzzyText>
      </div>

      <div className="text-white text-xl font-mono tracking-widest absolute bottom-10 right-10 z-[100]">
        {progress}%
      </div>
    </main>
  );
};

export default Loader;
