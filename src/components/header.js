
import React from 'react';
import '../styles.css'; // Add a header-specific CSS file

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#about">Home</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
