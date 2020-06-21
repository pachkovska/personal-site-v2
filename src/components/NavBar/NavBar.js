import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar () {
    return (
        <div className="NavBar">
            <div className="NavBar-vertical">
                    <div className="NavBar-menu">
                        <Link className={`NavBar-menu-item`}  to="/" >Home</Link>
                        <Link className={`NavBar-menu-item`}  to="/portfolio">Portfolio</Link>
                        <Link className={`NavBar-menu-item`}  to="/resume">Resume</Link>
                        <Link className={`NavBar-menu-item`}  to="/contact">Contact</Link>
                    </div>
                    <div className="NavBar-icon">
                        <div></div>
                    </div>
                    <div className="social">
                        <a className="btn icon" target="_blank" href="https://www.linkedin.com/in/yuliatuzov/">
                            <i className="fab fa-linkedin fa-3x"></i>
                        </a>
                        <a className="btn icon" target="_blank" href="https://github.com/pachkovska">
                            <i className="fab fa-github-square fa-3x"></i>
                        </a>
                    </div>
            </div>
        </div>
  )
}

export default NavBar;