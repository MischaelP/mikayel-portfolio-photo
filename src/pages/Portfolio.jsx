import React from 'react'
import Slider1 from '../components/Slider1'

function Portfolio() {
  return (
   <>
      <div className='flex flex-col max-w-[1280px] border border-t-1 mx-auto sm:pt-2 sm:flex-row h-[100px]'>
        <p className=' mx-auto '>Preview du Portfolio</p>
      </div>
      <Slider1 />
   </>
  )
}

export default Portfolio