import React from 'react';
import './NavBar.css';

function NavBar ({active, addActiveClass}) {
    return (
        <div className="NavBar">
            <div className="NavBar-vertical">
                <div className="NavBar-menu">
                    <div className={`NavBar-menu-item ${active === "home"? 'active': ''}`} id="home" onClick={addActiveClass}>Home</div>
                    <div className={`NavBar-menu-item ${active === "portfolio"? 'active': ''}`} id="portfolio" onClick={addActiveClass}>Portfolio</div>
                    <div className={`NavBar-menu-item ${active === "resume"? 'active': ''}`} id="resume" onClick={addActiveClass}>Resume</div>
                    <div className={`NavBar-menu-item ${active === "contact"? 'active': ''}`} id="contact" onClick={addActiveClass}>Contact</div>
                </div>
                <div className="NavBar-icon">
                    <div></div>
                </div>
            </div>
        </div>
  )
}

export default NavBar;