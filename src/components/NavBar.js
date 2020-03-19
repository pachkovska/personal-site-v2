import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render (){
    return (
        <div className="NavBar">
            <div className="NavBar-vertical">
                <div className="NavBar-menu">
                    <div className="NavBar-menu-item">Home</div>
                    <div className="NavBar-menu-item">Portfolio</div>
                    <div className="NavBar-menu-item">Resume</div>
                    <div className="NavBar-menu-item">Contact</div>
                </div>
                <div className="NavBar-icon">
                    <div></div>
                </div>
            </div>
        </div>
  )};
}

export default NavBar;