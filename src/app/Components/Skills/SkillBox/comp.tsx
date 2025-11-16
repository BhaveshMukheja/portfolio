import React from 'react';
import Box from './Box/comp'; // Import the Box component for displaying each skill category
import skillData from '../../../Data/skills.json'; // Import skill data from JSON file

const Comp = () => {
  return (
    // Responsive grid container:
    // - Large screens: 2 columns (lg:grid-cols-2)
    // - Small screens: 1 column (sm:grid-cols-1) with centered items (sm:items-center)
    // - Consistent 10-unit gap between items (gap-10)
    <div className='grid gap-10  grid-cols-1 lg:grid-cols-2 place-items-center w-full h-full'>
      {/* Map through skillData array to render each skill category */}
      {skillData.map((item, index) => (
        <Box 
          key={index} // Unique key for React reconciliation
          id={item.id} // Pass unique identifier
          logo={item.logo} // Pass logo/image path
          title={item.title} // Pass skill category title
          skills={item.skills} // Pass array of skills
        />
      ))}
    </div>
  );
};

export default Comp;