import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-slate-100'>
      <div className='text-lg font-bold'>
        <p>Futur logo</p>
      </div>
      <div className='flex space-x-4'>
        <Link to ="/" className='font-semibold hover:text-xl hover:font-semibold'>Home</Link>
        <Link to ="/Services" className='font-semibold hover:text-xl hover:font-semibold'>Services</Link>
        <Link to ="/Portfolio" className='font-semibold hover:text-xl hover:font-semibold'>Portfolio</Link>
        <Link to ="/Contact" className='font-semibold hover:text-xl hover:font-semibold'>Contact</Link>
      </div>
    </nav>
  )
} 

export default NavBar