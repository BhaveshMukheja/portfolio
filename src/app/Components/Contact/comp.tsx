import React from 'react'
import PhoneComponent from './PhoneComponent/comp'
import TerminalComponent from './TerminalComponent/comp'




const comp = () => {
  return (
    <div className='h-full bg-gradient-to-b from-black to-slate-900 p-10 ' id='contact'>

   <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 text-white uppercase mb-16 sm:text-lg md:text-4xl lg:text-5xl text-heading-tiny">
        Contact 
      </div>
    <div className=' grid lg:grid-cols-2 grid-cols-1 gap-y-10'>
        <div className='flex'> <PhoneComponent/></div>
        <div className='flex justify-center items-center'><TerminalComponent/></div>
    </div>
    </div>
  )
}

export default comp