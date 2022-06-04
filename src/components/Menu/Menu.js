import React from 'react';
import '../Menu/Menu.scss'
import logo from "../../assets/lug.png"

function Menu() {
    return (
    <nav className="menu" id='menu'>
    <img src={logo} className="logo" alt='logo'/>
    <ul>
        <li><a href="#menu">Home</a></li>
        <li><a href="#about-us">About</a></li>
        <li><a href="#!">Roadmap</a></li>
        <li><a className='team' href="#!">Team</a></li>

    </ul>
    </nav>
    );
}

export default Menu;