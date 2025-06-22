import React from 'react'
import PhoneComponent from './PhoneComponent/comp'
import TerminalComponent from './TerminalComponent/comp'

const comp = () => {
  return (
    <div className='h-screen'>

    <div className='text-5xl'>about me</div>
    <div className=' grid grid-cols-2 '>
        <div className='flex'> <PhoneComponent/></div>
        <div className='flex justify-center items-center'><TerminalComponent/></div>
    </div>
    </div>
  )
}

export default comp