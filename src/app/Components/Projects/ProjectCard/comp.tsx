'use client';

import React, { useState } from 'react';
import SpotlightCard from '../SpotightCard/comp';
import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

interface ProjectCardProps {
  key: number;
  data: {
    title: string;
    descrip: string;
    githubLink: string;
    demoLink: string;
    stack: Array<string>;
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(241, 4, 4, 0.2)"
        >
          {/* Conditionally render GitHub or Demo icon */}
         <div className="absolute right-10 top-5 cursor-pointer flex space-x-4">
  {data.githubLink && (
    <a href={data.githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub className="hover:text-white text-gray-500 text-xl" />
    </a>
  )}
  {data.demoLink && (
    <a href={data.demoLink} target="_blank" rel="noopener noreferrer">
      <MdOpenInNew className="hover:text-white text-gray-500 text-xl" />
    </a>
  )}
</div>
          <div className="flex flex-col">
            <div className="text-xl font-semibold text-white">{data.title}</div>

            <div
              className={`text-md transition-colors my-2 duration-300 ${
                isHovered ? 'text-white' : 'text-gray-500'
              }`}
            >
              {data.descrip}
            </div>

            <div className="text-xs text-gray-400 flex flex-wrap space-x-4">
              {data.stack.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xs px-2 flex items-center justify-center text-black mt-2"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default ProjectCard;
