"use client";
import React, { useCallback, useState } from "react";
import { useskillHoverContext } from "@/app/Context/skillHoverContext";

interface CompProps {
  id: number;
  logo: string;    // icon class name for Custom Icon (CI)
  title: string;
  skills: string;  // skill summary
}

const Comp: React.FC<CompProps> = ({ id, logo, title, skills }) => {
  const { setHoveredKey } = useskillHoverContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHoveredKey(id);
    setIsHovered(true);
  }, [id, setHoveredKey]);

  const handleMouseLeave = useCallback(() => {
    setHoveredKey(null);
    setIsHovered(false);
  }, [setHoveredKey]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full max-w-[422px] 
        [background:linear-gradient(45deg,theme(colors.slate.50),theme(colors.slate.50)_50%,theme(colors.slate.50))_padding-box,
        conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.slate.800)_100%,
        theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box]
        rounded-2xl border-rotate border border-transparent 
        animate-border hover:scale-102 transition-all duration-300"
    >
      <div className="relative p-4 w-full h-full rounded-[15px] overflow-hidden transition-all duration-300 hover:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] group border border-transparent hover:border-gray-500">
        <div className="grid grid-rows-2 grid-cols-5 z-10 font-rob">
          {/* Icon */}
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <i className={`ci ci-${logo} ci-2x`} aria-hidden="true"></i>
          </div>

          {/* Title */}
          <div className="col-span-4 row-span-1 flex items-center text-black font-semibold">
            {title}
          </div>

          {/* Skill Description */}
          <div
            className={`col-span-4 row-span-1 text-xs flex items-center transition-all duration-200 ${
              isHovered ? "text-gray-700" : "text-gray-400"
            }`}
          >
            ({skills})
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
