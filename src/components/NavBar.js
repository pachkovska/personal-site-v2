import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render (){
    return (
        <div className="NavBar">
            <div className="NavBar-vertical">
                <div className="NavBar-menu">
                    <div className={`NavBar-menu-item ${this.props.active === "home"? 'active': ''}`} id="home" onClick={this.props.addActiveClass}>Home</div>
                    <div className={`NavBar-menu-item ${this.props.active === "portfolio"? 'active': ''}`} id="portfolio" onClick={this.props.addActiveClass}>Portfolio</div>
                    <div className={`NavBar-menu-item ${this.props.active === "resume"? 'active': ''}`} id="resume" onClick={this.props.addActiveClass}>Resume</div>
                    <div className={`NavBar-menu-item ${this.props.active === "contact"? 'active': ''}`} id="contact" onClick={this.props.addActiveClass}>Contact</div>
                </div>
                <div className="NavBar-icon">
                    <div></div>
                </div>
            </div>
        </div>
  )};
}

export default NavBar;