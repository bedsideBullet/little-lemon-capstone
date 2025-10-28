import React from 'react'
import logo from "../assets/Logo.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon" />
      </div>
      
      <div className="footer-column">
        <h4>Doormat Navigation</h4>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Log In</a></li>
          </ul>
        </nav>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <address>
          <p>123 Lemon Street<br />Chicago, IL 60601</p>
          <p>(123) 456-7890</p>
          <p>contact@littlelemon.com</p>
        </address>
      </div>

      <div className="footer-column">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
          <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
          <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

