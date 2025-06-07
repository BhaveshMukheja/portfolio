import React from 'react'
import SkillSphere from './SkillSphere/comp'
import SkillBox from './SkillBox/comp'
const comp = () => {
  return (
    <div className='h-screen'>
      <div className='text-5xl flex items-center justify-center'> Skills and Technologies</div>
      <div className='flex items-center justify-center overflow-hidden'> 
      <div className='w-3/5 pl-6' ><SkillBox/></div>
        
       <div className='w-2/5'> <SkillSphere/></div>
       </div>
    </div>
  )
}

export default comp