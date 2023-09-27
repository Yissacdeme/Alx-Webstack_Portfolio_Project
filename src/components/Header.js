import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src="path/logo.png" alt="Logo" />
        </div>
        <nav className="navigation">
          {/* Add your navigation menu items here */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/testimonial">Testimonial</a></li>    
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="dashboard-button">
          <a href="/dashboard">User Dashboard</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
