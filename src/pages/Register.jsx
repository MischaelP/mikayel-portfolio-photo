import React from 'react'
import { useState } from 'react';

function Register() {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            userLogin,
            userPassword
        }
        
        console.log(newUser);
    }

  return (
    
    <>
    <div className='flex'>
    <div className='flex'>
      <div className='w-1/2 bg-grey-100 rounded-sm'>
        <form>
          <label htmlFor='Login'>User Login: </label>
          <input type='email' name='login' placeholder='Your email' onChange={(e) => setUserLogin(e.target.value)} />
          <label htmlFor='password'> User Password : </label>
          <input type='password' name='loginPassword' placeholder='Your password' onChange={(e) => setUserPassword(e.target.value)} />
          <button className=' px-4 py-2 rounded-xl bg-gray-600 hover:text-white hover:font-semibold' onClick={handleRegister}>Register</button>
        </form>
      </div>

    </div>
    </div>
    </>
  )
}

export default Register