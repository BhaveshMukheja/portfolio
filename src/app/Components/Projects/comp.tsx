import React from "react";
import ProjectCard from "./ProjectCard/comp";
import ProjectData from "../../Data/projects.json";

const ProjectsSection: React.FC = () => {
  return (
    <>
      {/* Main projects section title */}
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 mb-16 uppercase text-white sm:text-lg md:text-4xl lg:text-5xl text-heading-tiny">
        Projects
      </div>

      {/* Container for all project sections with padding and vertical spacing */}
      <div className="w-full px-8 space-y-24">
        
        {/* Web Development Projects Section */}
        <div className="flex space-x-12 w-full">
          {/* Vertical gradient line separator */}
          <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-50 to-transparent opacity-25 dark:via-neutral-50"></div>
          
          {/* Web Dev content container */}
          <div className="w-full">
            {/* Section header with gradient accent and title */}
            <span className="flex items-center space-x-4">
              <div className="sm:w-10 w-6 mb-2 sm:h-4 h-2 bg-gradient-to-r from-violet-900 to-indigo-600 "></div>
              <div className="text-4xl sm:mb-8 mb-4 text-white uppercase sm:text-lg md:text-4xl lg:text-5xl text-heading-tiny">Web Dev</div>
            </span>

            {/* Project cards container with vertical spacing */}
            <div className="space-y-4">
              {/* Map through webdev projects and render ProjectCard for each */}
              {ProjectData.webdev.map((item, index) => (
                <ProjectCard 
                  key={index} 
                  id={index} 
                  data={item} 
                  type="webdev" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Machine Learning & Research Projects Section */}
        <div className="flex space-x-12 w-full">
          {/* Vertical gradient line separator */}
          <div className="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-50 to-transparent opacity-25 dark:via-neutral-50"></div>
          
          {/* ML & Research content container */}
          <div className="w-full">
            {/* Section header with gradient accent and title */}
            <span className="flex items-center space-x-4">
              <div className="sm:w-10 w-6 mb-2 sm:h-4 h-2 bg-gradient-to-r from-violet-900 to-indigo-600"></div>
              <div className="text-4xl sm:mb-8 mb-4 text-white uppercase sm:text-lg md:text-4xl lg:text-5xl text-heading-tiny">ML and Research</div>
            </span>

            {/* Project cards container with larger vertical spacing */}
            <div className="space-y-12">
              {/* Map through MLnResearch projects and render ProjectCard for each */}
              {ProjectData.MLnResearch.map((item, index) => (
                <ProjectCard 
                  key={index} 
                  id={index} 
                  type="MLnResearch" 
                  data={item} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;