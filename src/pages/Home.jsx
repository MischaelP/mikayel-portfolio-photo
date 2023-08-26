import React from 'react'



function Home() {
  return (
    <>
        <div className='flex flex-col sm:flex-row md:pt-[60px] h-100'>
          <div className='px-2 py-1 sm:w-2/3'>
            <h2 className='font-prata text-lg pt-8 font-bold text-center md:text-[60px]'>Welcome to my photography</h2>
            <p className='font-prata text-center text-align'></p>
          </div>
          <div className='flex px-2 py-1 sm:pt-4 sm:w-1/3' >
            <p>This is great</p>
        </div>
        </div>
    </>
  )
}

export default Home