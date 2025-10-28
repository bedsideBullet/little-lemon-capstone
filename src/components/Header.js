import React from 'react'
import logo from "../assets/Logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
      <nav>
        <ul className='nav-list'>
          <li className='nav-link'><a href="/">Home</a></li>
          <li className='nav-link'><a href="/about">About</a></li>
          <li className='nav-link'><a href="/menu">Menu</a></li>
          <li className='nav-link'><a href="/reservations">Reservations</a></li>
          <li className='nav-link'><a href="/order-online">Order Online</a></li>
          <li className='nav-link'><a href="/login">Login</a></li> 
        </ul>
      </nav>
    </header>
  )
}

export default Header