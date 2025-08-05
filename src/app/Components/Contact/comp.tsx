import React from 'react'
import PhoneComponent from './PhoneComponent/comp'
import TerminalComponent from './TerminalComponent/comp'




const comp = () => {
  return (
    <div className='h-full bg-gradient-to-b from-black to-slate-900 p-10' id='contact'>

   <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 text-white uppercase mb-16 ">
        Contact 
      </div>
    <div className=' grid grid-cols-2 '>
        <div className='flex'> <PhoneComponent/></div>
        <div className='flex justify-center items-center'><TerminalComponent/></div>
    </div>
    </div>
  )
}

export default comp