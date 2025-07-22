'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import logoBg from '../../../../public/assets/logo.png'

const navItems = ['Home', 'Resume', 'Publications', 'About Me', 'Contact', 'Blog']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [hovered, setHovered] = useState<string | null>(null)

  // Simplified scroll-based active section detection
  useEffect(() => {
    const handleScroll = () => {
      let closest = 'Home'
      let minDistance = Infinity

      navItems.forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, '-')
        const section = document.getElementById(id)
        if (section) {
          const distance = Math.abs(section.getBoundingClientRect().top - 100)
          if (distance < minDistance) {
            closest = item
            minDistance = distance
          }
        }
      })

      setActive(closest)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const underline = {
    layoutId: 'underline',
    className: 'absolute left-0 bottom-0 h-[2px] w-full bg-yellow-400',
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full absolute top-0 left-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
        <Link href="/"><Image src={logoBg} width={50} height={50} alt="Logo" /></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white relative">
          {navItems.map((item) => {
            const isActive = active === item
            const isHovered = hovered === item

            return (
              <motion.li
                key={item}
                className="relative pb-1 cursor-pointer"
                onClick={() => {
                  setActive(item)
                  setIsOpen(false)
                }}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
                {(isActive || isHovered) && <motion.div {...underline} />}
              </motion.li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-black bg-opacity-90 px-6 pb-4 flex flex-col space-y-4 text-white"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer pb-1 ${
                  active === item ? 'text-yellow-400' : 'text-white'
                }`}
                onClick={() => {
                  setActive(item)
                  setIsOpen(false)
                }}
              >
                <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
