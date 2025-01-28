import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/"><h1>MunchRun</h1></Link>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;