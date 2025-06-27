'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type skillHoverContextType = {
  hoveredKey: number | null
  setHoveredKey: (key: number | null) => void
}

const skillHoverContext = createContext<skillHoverContextType | undefined>(undefined)

export const HoverProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredKey, setHoveredKey] = useState<number| null>(null)

  return (
    <skillHoverContext.Provider value={{ hoveredKey, setHoveredKey }}>
      {children}
    </skillHoverContext.Provider>
  )
}

export const useskillHoverContext = (): skillHoverContextType => {
  const context = useContext(skillHoverContext)
  if (!context) {
    throw new Error('useskillHoverContext must be used within a HoverProvider')
  }
  return context
}


export default HoverProvider