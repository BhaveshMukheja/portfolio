'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react'

type projectHoverContextType = {
  projectHoveredKey: number
  setProjectHoveredKey: (key: number ) => void
  projectType:string
  setProjectType: (key: string) => void

}

const projectHoverContext = createContext<projectHoverContextType | undefined>(undefined)

export const HoverProvider = ({ children }: { children: ReactNode }) => {
  const [projectHoveredKey, setProjectHoveredKey] = useState<number>(0)
  const [projectType, setProjectType] = useState<string>("blackScreen")


  return (
    <projectHoverContext.Provider value={{ projectHoveredKey, setProjectHoveredKey, projectType, setProjectType }}>
      {children}
    </projectHoverContext.Provider>
  )
}

export const useProjectHoverContext = (): projectHoverContextType => {
  const context = useContext(projectHoverContext)
  if (!context) {
    throw new Error('useprojectHoverContext must be used within a HoverProvider')
  }
  return context
}


export default HoverProvider