import React from 'react'
import Mika from '../img/presentation/miki_upscale.jpg'




function Home() {
  return (
    <>
        <div className='flex flex-col mx-auto sm:flex-row md:pt-[60px] max-w-[1600px] sm:pt-2'>
          <div className='px-2 py-6 sm:w-2/3 bg-gray-400 h-[300px]'>
            <h2 className='font-prata text-lg pt-8 font-semibold text-center md:text-[60px]'>Hi and welcome !</h2>
            <p className='font-prata text-center text-align pt-2'>I'm Mischaël, photographer based in Paris</p>
          </div>
          <div className='flex px-2 pt-2 md:w-1/3' >
            <img src={Mika}/>
          </div>
        </div>
    </>
  )
}

export default Home