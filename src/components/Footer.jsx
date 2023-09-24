import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import ig_logo from "../img/ig_logo.png"

function Footer() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
    <div className='flex flex-cols sm:flex-row max-w-[1280px] py-3 mx-auto p-10 text-center'>
      <p className='font-prata mt-2'>
        <a href='https://www.instagram.com/mika.yel/'>
          <img src={ig_logo} className='My instagram' alt="logo" />
        </a>
      </p>
      <div className="mt-2">
        <Link to='/Contact' className='font-prata text-xl'>Contact me</Link><br />
        {isAuthenticated && (
          <LogoutButton />
        )}
      </div>
    </div>
  </>
)
}

export default Footer