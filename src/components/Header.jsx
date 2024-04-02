import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Header.css';

function Header() {
  return (
    <header>
       <nav>
      <div className="left" >Apna Grocery app</div>
        <ul>
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
