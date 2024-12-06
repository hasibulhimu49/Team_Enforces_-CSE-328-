import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Nature<span>Nest</span></h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>Trees</li>
          <li>Flowers</li>
          <li>Green Plants</li>
          <li>Fruits</li>
          <li>Vegetables</li>
          <li>Seeds</li>
          <li>Other</li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>🔍</button>
      </div>
    </header>
  );
}

export default Header;
