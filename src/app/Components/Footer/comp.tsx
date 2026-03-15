import { 
  FaGithub, FaLinkedin, FaEnvelope, FaInstagram 
} from 'react-icons/fa';
import ScrollToTopButton from '../Buttons/ScrollToTopButton';

export default function Footer() {
  // Get the current year for dynamic copyright
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0E1A] text-white pt-12 pb-8 px-6 md:px-16">
      {/* Main footer grid layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold">Bhavesh Mukheja</h2>
          <p className="mt-3 text-sm text-gray-400">
            I am an AI Researcher and Web Developer, and forever Physicist and musician. 
            I aim to bridge the gap between Physics and CS.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a 
                href="/assets/Bhavesh_SDE_CV_March_26.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline"
              >
                Resume ↗
              </a>
            </li>
            <li><a href="/publications" className="hover:underline">Publications</a></li>
            <li><a href="/coming_soon?tab=about" className="hover:underline">About Me</a></li>
            <li><a href="/coming_soon?tab=contact" className="hover:underline">Contact</a></li>
            <li><a href="/coming_soon?tab=blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex gap-3">
            <a 
              href="https://github.com/BhaveshMukheja" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/bhavesh-mukheja-1925b2239/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:bhavesh.bm.3000@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <FaEnvelope />
            </a>
            <a 
              href="https://www.instagram.com/bhavesh_mukheja/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Credits and Asset Attributions */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Credits</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.freepik.com/free-ai-image/japanese-pagoda-sunset-serene-coastal-landscape_418346681.htm#fromView=keyword&page=1&position=21&uuid=da54375c-20aa-4f01-901f-2ce12e053cb7&query=Ghibli+Wallpaper+4k" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    Coming Soon Background by <span className="font-semibold">Freepik</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.freepik.com/free-ai-image/anime-style-cozy-home-interior-with-furnishings_133783516.htm" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    Publication Background by <span className="font-semibold">Freepik</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sketchfab.com/3d-models/lo-fi-study-girlroom-cd5c5ec1107e42558f692b316462ccfb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    3D model by <span className="font-semibold">雨花Rain flower</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.freepik.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                  >
                    Wallpaper used in 3D model by <span className="font-semibold">Freepik</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Strip with Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {year} Bhavesh Mukheja. All rights reserved.</p>
        <p>
          Built with <span className="text-white">♥</span> using Next.js & Tailwind
        </p>
      </div>

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />
    </footer>
  );
}
