"use client";
import React, { useEffect, useState } from "react";

import { useskillHoverContext } from "@/app/Context/skillHoverContext";

interface CompProps {
  id: number;
  logo: string;
  title: string;
  skills: string;
}

const Comp: React.FC<CompProps> = ({ id, logo, title, skills }) => {
  const { hoveredKey, setHoveredKey } = useskillHoverContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHoveredKey(id);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredKey(null);
        setIsHovered(false);
      }}
      className="w-full max-w-[422px] [background:linear-gradient(45deg,theme(colors.slate.50),theme(colors.slate.50)_50%,theme(colors.slate.50))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.slate.800)_100%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-rotate border border-transparent animate-border hover:scale-102 transition-all duration-300"
    >
      <div className="relative p-4 w-full h-full rounded-[15px] overflow-hidden transition-all duration-300  hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] group border border-transparent hover:border-gray-500">
        <div className="grid grid-rows-2 grid-cols-5 z-10 font-rob">
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <i className={`ci ci-${logo} ci-2x`}></i>
          </div>
          <div className="col-span-4 row-span-1 flex items-center text-black">
            {title}
          </div>
          <div
            className={`col-span-4 row-span-1 text-xs flex items-center ${
              isHovered ? "text-gray-700" : "text-gray-400"
            } transition-all duration-200`}
          >
            ({skills})
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
