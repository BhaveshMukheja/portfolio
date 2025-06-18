import React from 'react'
import CompetitionCard from './CompetitionCard/comp'
import CompetitonData from '../../Data/competitions.json'

const comp = () => {
  return (
    <div>


      <div className='text-5xl'>Competitons</div>
    <div className="flex space-x-6 justify-center items-center">
      {CompetitonData.map((item, index) => (
        <CompetitionCard key={index} data={item} />
      ))}
    </div>
    
    </div>
  )
}

export default comp