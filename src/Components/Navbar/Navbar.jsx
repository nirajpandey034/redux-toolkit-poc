import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/products'>Products</Link>
        </li>
        <li>
        <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
