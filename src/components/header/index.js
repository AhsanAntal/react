import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
    <Link to="/">
      <h3>Home</h3>
    </Link>
    <Link to="/Aboutus">
      <h3>Aboutus</h3>
    </Link>

    <Link to="/Cart">
      <h3>Cart</h3>
    </Link>
    <Link to="/signin">
      <h3>Sign-in</h3>
    </Link>
    <Link to="/signout">
      <h3>Signout</h3>
    </Link>
  </div>
  )
}
