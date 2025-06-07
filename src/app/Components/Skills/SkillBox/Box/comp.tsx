import React from 'react';

interface CompProps {
  logo: string;
  title: string;
  skills: string;
}

const comp: React.FC<CompProps> = ({ logo, title, skills }) => {
  return (
    <div className='grid grid-rows-2 grid-cols-5 border w-94'>
      <div className="col-span-1 row-span-2 flex justify-center items-center">
        <i className={`ci ci-${logo} ci-2x`}></i>
      </div>
      <div className="col-span-4 row-span-1">{title}</div>
      <div className="col-span-4 row-span-1 text-xs">({skills})</div>
    </div>
  );
};

export default comp;
