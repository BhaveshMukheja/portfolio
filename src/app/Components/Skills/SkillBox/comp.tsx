import React from 'react';
import Box from './Box/comp';
import skillData from '../../../Data/skills.json';

const Comp = () => {
  return (
    <div className='grid grid-cols-2 gap-10'>
      {skillData.map((item, index) => (
 
            <Box key={index} logo={item.logo} title={item.title} skills={item.skills} />
        
      ))}
    </div>
  );
};

export default Comp;
