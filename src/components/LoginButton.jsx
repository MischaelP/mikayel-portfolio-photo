import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    
    <div className='flex flex-col max-w-[1280px] mx-[300px] sm:pt-2 sm:flex-row h-[100px]'>
    <button onClick={() => loginWithRedirect()}>Connexion</button>
    </div>
  )
};


export default LoginButton