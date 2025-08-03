  import React from 'react';
  import Box from './Box/comp';
  import skillData from '../../../Data/skills.json'

  const Comp = () => {
    return (
      <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1 sm:items-center'>
        {skillData.map((item, index) => (
  
              <Box key={index} id={item.id} logo={item.logo} title={item.title} skills={item.skills} />
          
        ))}
      </div>
    );
  };

  export default Comp;
