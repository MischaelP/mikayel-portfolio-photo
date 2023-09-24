import React from 'react'
import Slider1 from '../components/Slider1'

function Portfolio() {
  return (
   <>
      <div className='flex flex-col max-w-[1280px]  mx-auto sm:pt-2 sm:flex-row h-[100px]'>
        <p className=' mx-auto '>Preview du Portfolio</p>
      </div>
      <div className="flex flex-col sm:flex-row max-w-[1280px] mx-auto p-4">
        <div className="w-full sm:w-1/">
          
          <p>Un peu de fashion ici</p>
        </div>
        <div className="w-full sm:w-1/2">
          {/* Slider */}
          <Slider1 />
        </div>
      </div>
   </>
  )
}

export default Portfolio