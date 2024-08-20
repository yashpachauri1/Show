import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo.svg';
import openIcon from '../../assets/images/icon-menu.svg';
import closeIcon from '../../assets/images/icon-menu-close.svg';

const links = [
  <li key="home">Home</li>,
  <li key="new">New</li>,
  <li key="popular">Popular</li>,
  <li key="trending">Trending</li>,
  <li key="categories">Categories</li>
];

const Header = () => {
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  
  const handleMenuBarToggle = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
  };
     
  return (
    <header className='header'>
      <div className={`content ${isMenuBarOpen ? 'blurred' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className='desktop_nav-links'>
          <ul className='desktop-links'>
            {links}
          </ul>
        </nav>
      </div>
      <div className="mobile">
          {!isMenuBarOpen && (
            <button className='toggle' onClick={handleMenuBarToggle}>
              <img className='toggle_icon' src={openIcon} alt="open" />
            </button>
          )}
          {isMenuBarOpen && (
            <nav className='mobile_nav-links'>
              <button className='toggle' onClick={handleMenuBarToggle}>
                <img className='toggle_icon' src={closeIcon} alt="close" />
              </button>
              <ul className='mobile-links'>
                {links}
              </ul>
            </nav>
          )}
        </div>
    </header>
  );
};

export default Header;
