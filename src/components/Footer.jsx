import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

function Footer() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
        <div className='flex flex-cols sm:flex-row max-w-[1280px] py-3 mx-auto p-10'>
                <Link to='/Contact' className='font-prata text-xl'>Contact me</Link>
                {isAuthenticated && (
                    
                        <LogoutButton />
                    
                )}
                <p className='font-prata'>Logo Instagram</p>
            </div>
    </>
  )
}

export default Footer