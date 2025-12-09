import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <img src="/fazii.jpeg" alt="FAZIM R" className="logo-image" />
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;