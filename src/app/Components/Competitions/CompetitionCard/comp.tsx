"use client";

import React, { useState } from "react";
import PixelCard from "../PixelCard/comp";

interface CompetitonsCardProps {
  key: number;
  data: {
    title:string,
    year:string,
    descrip:string,
    medal:string
  };
}

const ProjectCard: React.FC<CompetitonsCardProps> = ({ data }) => {
//   const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <PixelCard variant="pink"
        >

          {/* Conditionally render GitHub or Demo icon */}
          {/* <div className="absolute right-10 top-5 cursor-pointer flex space-x-4">
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-black text-gray-500 text-xl" />
              </a>
            )}
            {data.demoLink && (
              <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
                <MdOpenInNew className="hover:text-black text-gray-500 text-xl" />
              </a>
            )}
          </div> */}

          <div className="flex flex-col">
            <div className="text-xl font-semibold text-black">{data.title}</div>

            <div
              className={`text-md transition-colors my-2 duration-300 text-black
              `}
            >
              {data.descrip}
            </div>

             <div
              className={`text-md transition-colors my-2 duration-300 text-black
              `}
            >
              {data.medal}
            </div>
             <div
              className={`text-md transition-colors my-2 duration-300 text-black
              `}
            >
              {data.year}
            </div>

          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default ProjectCard;
