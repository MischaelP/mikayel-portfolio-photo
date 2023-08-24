import React from 'react'

function LoginForm() {
  return (
    <>
    <div className='flex'>
      <div className='w-1/2 bg-grey-100 rounded-sm'>
        <form>
          <label htmlFor='Login'>Login : </label>
          <input type='email' name='login' placeholder='Your email' />
          <label htmlFor='password'> Password : </label>
          <input type='password' name='loginPassword' placeholder='Your password'/>
          <button className=' px-4 py-2 rounded-xl bg-green-600 hover:text-white hover:font-semibold'>Connexion</button>
        </form>
      </div>

    </div>
    
    </>
  )
}

export default LoginForm