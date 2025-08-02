"use client";

import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope  } from "react-icons/fa6";

// Reuse classes
const iconWrapperClasses =
  "relative w-10 h-10 rounded-full transition-all duration-500 border-2 border-transparent hover:border-white flex items-center justify-center overflow-hidden group";
const iconInnerClasses =
  "relative z-10 text-[#262626] group-hover:text-white transition-all duration-500 ease-in-out group-hover:rotate-[360deg] text-xl";

const icons = [
  {
    Icon: FaInstagram,
    bg: "bg-[#d62976]",
    href: "https://www.instagram.com/bhavesh_mukheja/",
  },
  {
    Icon: FaEnvelope,
    bg: "bg-[#f2a60c]",
    href: "mailto:bhavesh.bm.3000@gmail.com",
  },
  {
    Icon: FaLinkedinIn,
    bg: "bg-[#0072b1]",
    href: "https://www.linkedin.com/in/bhavesh-mukheja-1925b2239/",
  },
  {
    Icon: FaGithub,
    bg: "bg-[#501DAF]",
    href: "https://github.com/BhaveshMukheja",
  },
];

function SocialIcons() {
  return (
    <ul className="flex gap-4">
      {icons.map(({ Icon, bg, href }, index) => (
        <li key={index} className="list-none">
          <a href={href} className={iconWrapperClasses} target="blank">
            <span
              className={`absolute top-full left-0 w-full h-full ${bg} transition-all duration-500 ease-in-out group-hover:top-0 z-0`}
            />
            <span className={iconInnerClasses}>
              <Icon />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

const Page = () => {
  return (
    <div>

      <div className="absolute top-0 w-screen h-screen bg-[url('/assets/picture.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-200/30 z-10" />

        {/* Card */}
        <div className="absolute right-20 bottom-10 w-[40%] h-[80%] bg-fuchsia-100/50 flex flex-col justify-center items-center z-20 text-center p-4 space-y-6">
          <h1 className="font-tang text-6xl font-bold">Thank you for visiting!</h1>

          <p>
            The page is <span className="font-semibold">under development</span>. Will be coming
            soon.
          </p>

          <p>Until then...</p>
          <p className="font-semibold">Let's Connect.</p>

          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Page;
