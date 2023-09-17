import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useAuth0 } from '@auth0/auth0-react';




function NavBar() {
    const [showMenu, setShowMenu] = useState(true);
    const { isAuthenticated } = useAuth0();

    const handlenav = () => {
      setShowMenu(!showMenu);
    }

  return (
      <>
       <div className='flex justify-between items-center h-24 max-w-[1280px] mx-auto px-4'>
        <h1 className='w-full text-2xl font-bold font-prata'>
          Mischael
        </h1>
          <ul className='hidden md:flex'>
            <li className='font-prata  md:text-2xl p-4'><Link to = "/">Home</Link></li>
            <li className='font-prata md:text-2xl p-4'><Link to = "/Portfolio">Portfolio</Link></li>
            <li className='font-prata md:text-2xl p-4'><Link to = "/Services">Services</Link></li>
            <li className='font-prata md:text-2xl p-4'><Link to = "/Contact">About</Link></li>
            {isAuthenticated && <li className='font-prata md:text-2xl p-4'><Link to="/Profile">Profile</Link></li>}
          </ul>
            <div onClick={handlenav} className='block md:hidden'>
              {!showMenu  ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

          {/*Mobile nav*/}
          <div className={!showMenu ? 'fixed left-0 top-0 z-10 w-[60%] h-full bg-gray-400 ease-in-out duration-500 ' : 'fixed left-[-100%] ease-out duration-500' } >
              
              <ul className='p-4 m-4'>
                <li className='font-prata text-xl p-4 border-b border-white'><Link to = "/">Home</Link></li>
                <li className='font-prata text-xl p-4 border-b border-white' ><Link to = "/Portfolio">Portfolio</Link></li>
                <li className='font-prata text-xl p-4 border-b border-white'><Link to = "/Services">Services</Link></li>
                <li className='font-prata text-xl p-4'><Link to = "/Contact">About</Link></li>
                {isAuthenticated && <li className='font-prata text-xl p-4'><Link to="/Profile">Profile</Link></li>}
              </ul>
          </div>
       </div>
      </>
    )
} 

export default NavBar