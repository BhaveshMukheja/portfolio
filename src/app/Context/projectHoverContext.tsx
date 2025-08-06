'use client' // Next.js directive to mark this as a Client Component

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Type definition for the context value
type projectHoverContextType = {
  projectHoveredKey: number       // Currently hovered project ID
  setProjectHoveredKey: (key: number) => void  // Function to update hovered project
  projectType: string            // Type of project (e.g., "blackScreen")
  setProjectType: (key: string) => void  // Function to update project type
}

// Create context with initial undefined value
const projectHoverContext = createContext<projectHoverContextType | undefined>(undefined)

/**
 * Context provider component that manages project hover state
 * @param children - Child components that will consume the context
 */
export const HoverProvider = ({ children }: { children: ReactNode }) => {
  // State for tracking which project is hovered (default: 0)
  const [projectHoveredKey, setProjectHoveredKey] = useState<number>(0)
  
  // State for tracking project type (default: "blackScreen")
  // Used blackScreen as the buffer to the screen when any project is not hovered, you can use any image
  
  const [projectType, setProjectType] = useState<string>("blackScreen")

  return (
    // Provide the state values and setters to all child components
    <projectHoverContext.Provider 
      value={{ 
        projectHoveredKey, 
        setProjectHoveredKey, 
        projectType, 
        setProjectType 
      }}
    >
      {children}
    </projectHoverContext.Provider>
  )
}

/**
 * Custom hook to access the project hover context
 * @throws Error if used outside of HoverProvider
 * @returns The project hover context value
 */
export const useProjectHoverContext = (): projectHoverContextType => {
  const context = useContext(projectHoverContext)
  if (!context) {
    throw new Error('useProjectHoverContext must be used within a HoverProvider')
  }
  return context
}

export default HoverProvider