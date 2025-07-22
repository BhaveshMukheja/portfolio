import React from "react";
import ProjectCard from "./ProjectCard/comp";
import ProjectData from "../../Data/projects.json";

const ProjectsSection: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 mb-16 uppercase text-white">
        Projects
      </div>

      <div className="w-full px-8 space-y-24">
        {/* Web Dev Section */}
        <div className="flex space-x-12 w-full">
          <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-50 to-transparent opacity-25 dark:via-neutral-50"></div>
          <div className="w-full">
            <span className="flex items-center space-x-4 "><div className="w-10 mb-2 h-4 bg-gradient-to-r from-violet-900 to-indigo-600"></div><div className="text-4xl mb-8 text-white uppercase">Web Dev</div></span>

            <div className="space-y-4">
              {ProjectData.webdev.map((item, index) => (
                <ProjectCard key={index} id={index} data={item} type="webdev" />
              ))}
            </div>
          </div>
        </div>

        {/* ML and Research Section */}
        <div className="flex space-x-12 w-full">
          <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-50 to-transparent opacity-25 dark:via-neutral-50"></div>
          <div className="w-full">
            <span className="flex items-center space-x-4 "><div className="w-10 mb-2 h-4 bg-gradient-to-r from-violet-900 to-indigo-600"></div><div className="text-4xl mb-8 text-white uppercase">ML and Research</div></span>
            <div className="space-y-12 ">
              {ProjectData.MLnResearch.map((item, index) => (
                <ProjectCard key={index} id={index} type="MLnResearch" data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
