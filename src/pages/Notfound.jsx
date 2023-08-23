import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <>
    <h1>Your page is not found</h1>
    <Link to ="/">Back to Homepage</Link>
    </>
  )
}

export default Notfound