import React from 'react';
import '../Menu/Menu.scss'
import logo from "../../assets/lug.png"

function Menu() {
    return (
    <nav class="menu">
    <img src={logo} className="logo" />
    <ul>
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Roadmap</a></li>
        <li><a className='team' href="#!">Team</a></li>

    </ul>
    </nav>
    );
}

export default Menu;