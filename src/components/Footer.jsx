import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='flex flex-cols sm:flex-row max-w-[1600px] py-3 mx-auto'>
        <Link to='/Contact' className='font-prata text-xl'>Contact me</Link>
        <p className='font-prata'>Logo instagram</p>
      </div>

    </>
  )
}

export default Footer