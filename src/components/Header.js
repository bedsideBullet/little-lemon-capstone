import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>
      <nav>
        <ul className='nav-list'>
          <li className='nav-link'><Link to="/">Home</Link></li>
          <li className='nav-link'><Link to="/about">About</Link></li>
          <li className='nav-link'><Link to="/menu">Menu</Link></li>
          <li className='nav-link'><Link to="/reservations">Reservations</Link></li>
          <li className='nav-link'><Link to="/order-online">Order Online</Link></li>
          <li className='nav-link'><Link to="/login">Login</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;