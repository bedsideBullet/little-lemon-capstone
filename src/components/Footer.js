import React from 'react'

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
        </ul>
      </nav>
      <address>
        <p>Little Lemon Chicago</p>
        <p>123 Lemon Street, Chicago, IL 60601</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </address>
      <ul>
        <li><a href="https://facebook.com/littlelemon">Facebook</a></li>
        <li><a href="https://instagram.com/littlelemon">Instagram</a></li>
        <li><a href="https://twitter.com/littlelemon">Twitter</a></li>
      </ul>
      <p>&copy; 2025 Little Lemon. All rights reserved.</p>
    </footer>
  )
}

export default Footer