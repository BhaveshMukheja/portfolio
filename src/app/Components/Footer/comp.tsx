// components/Footer.tsx
'use client'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaArrowUp, FaHeart } from 'react-icons/fa';
// import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#0A0E1A] text-white pt-12 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold">Bhavesh Mukheja</h2>
          <p className="mt-3 text-sm text-gray-400">
            I am an AI Researcher and Web Developer, and forever Physicist and musicsian. I aim for bridging the gap between Physics and CS. Want to know about me, dig in!
          </p>
        </div>

        {/* Quick Links */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/assets/Bhavesh_CV_2025.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">Resume ↗</a></li>
            <li><a href="/publications" className="hover:underline">Publications</a></li>
            <li><a href="/coming_soon?tab=about" className="hover:underline">About Me</a></li>
            <li><a href="/coming_soon?tab=contact" className="hover:underline">Contact</a></li>
            <li><a href="/coming_soon?tab=blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-3">
            <a href="https://github.com/BhaveshMukheja" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bhavesh-mukheja-1925b2239/" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:bhavesh.bm.3000@gmail.com" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/bhavesh_mukheja/" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Credits</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              {/* <kbd className="px-2 py-1 bg-gray-700 rounded text-sm">⌘ K</kbd> Search */}
              <ul className='space-y-2'>
                <li>
                  <a href="https://www.freepik.com/free-ai-image/japanese-pagoda-sunset-serene-coastal-landscape_418346681.htm#fromView=keyword&page=1&position=21&uuid=da54375c-20aa-4f01-901f-2ce12e053cb7&query=Ghibli+Wallpaper+4k" target="_blank" rel="noopener noreferrer" className='hover:underline'>Coming Soon Background by <span className=' font-semibold'>Freepik </span></a>
                </li>
                   <li>
                  <a href="https://www.freepik.com/free-ai-image/anime-style-cozy-home-interior-with-furnishings_133783516.htm?epik=dj0yJnU9cU9ONi16ZUlWcFd3NV9kcnpCd0UtX1RaX08ySzlsVHUmcD0wJm49SU53T2VoMG9yeDFaT2lwbm9xdlduZyZ0PUFBQUFBR2lQTncw#fromView=search&page=6&position=10&uuid=a225c714-b843-410d-b6b2-484b4443efde" target="_blank" rel="noopener noreferrer" className='hover:underline'>Publication Background by <span className=' font-semibold'>Freepik </span></a>
                </li>
                   <li>
                  <a href="https://sketchfab.com/3d-models/lo-fi-study-girlroom-cd5c5ec1107e42558f692b316462ccfb" target="_blank" rel="noopener noreferrer" className='hover:underline'>3D model by <span className=' font-semibold'>雨花Rain flower</span></a>
                </li>
              </ul>
            </li>
            {/* <li className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-gray-700 rounded text-sm">T</kbd> Toggle theme
            </li> */}
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {year} Bhavesh Mukheja. All rights reserved.</p>
        <p>
          Built with <span className="text-white"> ♥ </span> using Next.js & Tailwind
        </p>
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
