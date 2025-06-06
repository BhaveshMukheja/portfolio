// hooks/useWindowWidth.ts
import { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const [width, setWidth] = useState(1920) // Default to desktop

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  return width
}
