import React from 'react'
import Mika from '../img/presentation/miki_upscale.jpg'
import { motion } from 'framer-motion';
import { transition1 } from 'transition';



function Home() {
  return (
    <>
        <div className='flex flex-col mx-auto sm:flex-row md:pt-[60px] max-w-[1600px] sm:pt-2'>
          <div className='px-2 py-1  sm:w-2/3 bg-gray-400 h-[300px]'>
            <h2 className='font-prata text-lg pt-8 font-bold text-center md:text-[60px]'>Welcome to my photography</h2>
            <p className='font-prata text-center text-align'></p>
          </div>
          <div className='flex px-2  sm:w-1/3' >
            <img src={Mika} className='rounded-sm' />
          </div>
        </div>
    </>
  )
}

export default Home