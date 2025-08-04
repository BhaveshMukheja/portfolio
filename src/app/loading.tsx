'use client'
import React from 'react'
import FuzzyText from './Components/FuzzyText/comp'


const Loading = () => {
  return (
    <>
    <main>
      <div className="min-h-screen min-w-screen absolute top-0 flex items-center justify-center">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
          color='black'
        >
          Loading portfolio...
        </FuzzyText>
      </div>
    </main>
    </>
  )
}

export default Loading