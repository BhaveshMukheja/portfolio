"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
// import logoBg from "../../../../public/assets/logo.png";

const navItems = [
  "Home",
  "Resume",
  "Publications",
  "About Me",
  "Contact",
  "Blog",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hovered, setHovered] = useState<string | null>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [navStyle, setNavStyle] = useState({
    background: "bg-black",
    textColor: "text-white",
  });
  const [logoStyle, setLogostyle] = useState("/assets/logo.png");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const sectionHeight = window.innerHeight;

    if (latest < sectionHeight) {
      setNavStyle({ background: "bg-black", textColor: "text-white" });
      setLogostyle("/assets/logo.png");
    } else if (latest >= sectionHeight && latest < 6 * sectionHeight) {
      setNavStyle({ background: "bg-transparent", textColor: "text-black" });
      // setLogostyle('/assets/logo-white.png')
    } else {
      setNavStyle({ background: "bg-transparent", textColor: "text-white" });
      setLogostyle("/assets/logo.png");
    }
  });

  useEffect(() => {
    if (pathname === "/") return setActive("Home");
    if (pathname === "/publications") return setActive("Publications");
    if (pathname === "/#contact") return setActive("Contact");

    if (pathname === "/coming_soon") {
      const tab = searchParams.get("tab");
      switch (tab) {
        case "resume":
          return setActive("Resume");
        case "about":
          return setActive("About Me");
        case "blog":
          return setActive("Blog");
        default:
          return setActive("Resume");
      }
    }

    return setActive("Home");
  }, [pathname, searchParams]);

  const getLinkHref = (item: string) => {
    switch (item.toLowerCase()) {
      case "home":
        return "/";
      case "contact":
        return "/#contact";
      case "publications":
        return "/publications";
      case "resume":
        return "assets/Bhavesh_CV_2025.pdf";
      case "about me":
        return "/coming_soon?tab=about";
      case "blog":
        return "/coming_soon?tab=blog";
      default:
        return "/";
    }
  };

  const underline = {
    layoutId: "underline",
    className: "absolute left-0 bottom-0 h-[2px] w-full bg-yellow-400",
    transition: { type: "spring", stiffness: 500, damping: 30 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full sticky top-0 left-0 z-50 shadow-md backdrop-blur-md transition-all duration-500 ${navStyle.background}`}
    >
      <div className="max-w-7xl mx-auto p-2 flex justify-between items-center">
        <Link href="/">
          <Image src={logoStyle} width={50} height={50} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-10 relative transition-colors duration-300 ${navStyle.textColor}`}
        >
          {navItems.map((item) => {
            const isActive = active === item;
            const isHovered = hovered === item;

            return (
              <motion.li
                key={item}
                className="relative pb-1 cursor-pointer"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={getLinkHref(item)}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-yellow-400" : navStyle.textColor
                  }`}
                  {...(item.toLowerCase() !== "contact"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
                {(isActive || isHovered) && <motion.div {...underline} />}
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className={`md:hidden ${navStyle.textColor}`}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black bg-opacity-90 px-6 pb-4 flex flex-col space-y-4 text-white"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer pb-1 ${
                  active === item ? "text-yellow-400" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Link
                  href={getLinkHref(item)}
                  {...(item.toLowerCase() !== "contact"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
