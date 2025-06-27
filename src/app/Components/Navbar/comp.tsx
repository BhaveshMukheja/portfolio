'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import logobg from '../../../../public/assets/logo.png'
import Image from 'next/image'


const navItems = ['Home', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sectionOffsets = navItems.map((item) => {
        const section = document.getElementById(item.toLowerCase())
        return section ? section.offsetTop : 0
      })

      for (let i = 0; i < sectionOffsets.length; i++) {
        const current = sectionOffsets[i]
        const next = sectionOffsets[i + 1] ?? Infinity
        if (scrollY >= current - 80 && scrollY < next - 80) {
          setActive(navItems[i])
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
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
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        
           <Image src={logobg} width={'50'} height={'50'} alt=''/>  
        

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
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-yellow-400' : 'text-white'
                  } ${isHovered?'text-white': 'text-white'}`}
                >
                  {item}
                </Link>

                {(isActive || isHovered) && (
                  <motion.div {...underline} />
                )}
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
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
