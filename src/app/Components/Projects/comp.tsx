import React from 'react';
import ProjectCard from './ProjectCard/comp';
import ProjectData from '../../Data/projects.json';

const comp: React.FC = () => {
  return (
    <>
    <div>

      <div className='text-5xl'>Web Dev</div>
    <div className="space-y-6">
      {ProjectData.webdev.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </div>
    </div>

    <div>

      <div className='text-5xl'>ML and Research</div>
    <div className="space-y-6">
      {ProjectData.MLnResearch.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </div>
    </div>
    </>
  );
};

export default comp;
