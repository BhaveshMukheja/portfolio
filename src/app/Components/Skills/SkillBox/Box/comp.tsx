'use client';
import React, {useEffect} from 'react';

import { useskillHoverContext } from '@/app/Context/skillHoverContext';

interface CompProps {
  id:number;
  logo: string;
  title: string;
  skills: string;
}

const Comp: React.FC<CompProps> = ({id, logo, title, skills }) => {
  const { hoveredKey,setHoveredKey} = useskillHoverContext();
  // console.log(hoveredKey)
  
// useEffect(() => {
//     if (hoveredKey !== null) {
//       console.log('hoveredKey:', hoveredKey);
//     }
//   }, [hoveredKey]);

  return (
    <div
    onMouseEnter={() => {setHoveredKey(id)}}
    onMouseLeave={() => setHoveredKey(null)}
     className="">
      <div className="relative p-4 rounded-[15px] overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] group border hover:border-transparent">
        
        {/* Holographic ::before effect */}
        <div
          className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(0deg, transparent, transparent 30%, rgba(0,255,255,0.3))',
            transform: 'rotate(-45deg)',
          }}
        ></div>

        <div className="grid grid-rows-2 grid-cols-5 text-cyan-300 z-10">
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <i className={`ci ci-${logo} ci-2x`}></i>
          </div>
          <div className="col-span-4 row-span-1 flex items-center">{title}</div>
          <div className="col-span-4 row-span-1 text-xs flex items-center">({skills})</div>
        </div>
      </div>
    </div>
  );
};

export default Comp;

