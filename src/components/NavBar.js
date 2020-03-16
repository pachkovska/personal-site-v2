import React from 'react';
import './NavBar.css';
import menu from '../images/menu.svg';

const NavBar = () => {
  return (
    <div className="NavBar">
        <div className="NavBar-vertical">
            <img src={menu} alt="Hamburger menu" />
        </div>
    </div>
  );
}

export default NavBar;