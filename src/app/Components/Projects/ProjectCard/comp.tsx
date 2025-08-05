"use client";

import React, { useState } from "react";
import SpotlightCard from "../../Cards/SpotightCard/comp";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { useProjectHoverContext } from "@/app/Context/projectHoverContext";

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
  id: number;
  type: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, data, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setProjectHoveredKey, setProjectType } = useProjectHoverContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setProjectHoveredKey(id);
    setProjectType(type);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setProjectHoveredKey(0);
    setProjectType("blackScreen");
  };

  return (
    <div className="w-[45%]">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(241, 4, 4, 0.2)"
        >
          {/* Top right icons */}
          <div className="absolute right-10 top-5 cursor-pointer flex space-x-4">
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-white text-gray-300 text-xl" />
              </a>
            )}
            {data.demoLink && (
              <a
                href={data.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOpenInNew className="hover:text-white text-gray-300 text-xl" />
              </a>
            )}
          </div>

          {/* Card Content */}
          <div className="flex flex-col">
            {/* Project Title */}
            <div className="text-xl font-semibold text-white">
              {data.title}
            </div>

            {/* Description */}
            <div
              className={`text-md transition-colors my-2 duration-300 ${
                isHovered ? "text-white" : "text-gray-300"
              }`}
            >
              {data.descrip}
            </div>

            {/* Tech Stack */}
            <div className="text-xs text-gray-400 flex flex-wrap gap-2">
              {data.stack.map((item, index) => (
                <div
                  key={index}
                  className="bg-indigo-900/80 rounded-xs px-2 py-0.5 flex items-center justify-center text-white mt-1"
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
