'use client' // Next.js directive indicating this is a Client Component

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Type definition for the context's value structure
type skillHoverContextType = {
  hoveredKey: number | null       // Currently hovered skill ID (or null if none)
  setHoveredKey: (key: number | null) => void  // Function to update hover state
}

// Create context with undefined initial value (to be provided by HoverProvider)
const skillHoverContext = createContext<skillHoverContextType | undefined>(undefined)

/**
 * Context provider component that manages skill hover state
 * @param children - Child components that will consume the context
 */
export const HoverProvider = ({ children }: { children: ReactNode }) => {
  // State to track which skill is currently hovered (null means none)
  const [hoveredKey, setHoveredKey] = useState<number | null>(null)

  return (
    // Provide the hover state and setter to all child components
    <skillHoverContext.Provider value={{ hoveredKey, setHoveredKey }}>
      {children}
    </skillHoverContext.Provider>
  )
}

/**
 * Custom hook to access the skill hover context
 * @throws Error if used outside of HoverProvider
 * @returns The skill hover context value
 */
export const useskillHoverContext = (): skillHoverContextType => {
  const context = useContext(skillHoverContext)
  if (!context) {
    throw new Error('useskillHoverContext must be used within a HoverProvider')
  }
  return context
}

export default HoverProvider