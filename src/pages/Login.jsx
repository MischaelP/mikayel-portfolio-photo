import React from 'react'
import LoginForm from "../components/LoginForm"
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

function UserLogin() {
  return (
    <main>
      <LoginButton/>
      <LogoutButton/>
    </main>
  )
}

export default UserLogin