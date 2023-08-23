import React from 'react'
import img1 from '../img/img1.jpg'


function Home() {
  return (
  <div className='flex'>
    <div className='bg-gray-50 flex w-full'>
      <div className='w-1/2 p-4'>
        <p>Welcome to my website</p>
      </div>

      <div className='w-1/2 p-4'>
        <p>The pix showdown</p>
        <img src={img1} alt='Mikayel' className='w-1/2 h-1/2 object-cover'/>
      </div>
    </div>
  </div>
  )
}

export default Home