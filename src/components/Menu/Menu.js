import React from 'react';
import '../Menu/Menu.scss'
import logo from "../../assets/lug.png"
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Menu() {
    return (
        <div className='fondo'>
            <nav className="menu" id='menu'>
                <img src={logo} className="logo" alt='logo' />
                <ul>
                    <li><a href="#menu">Home</a></li>
                    <li><a href="#about-us">About</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a className="menu__last" href="#team">Team</a></li>
                    <li className='menu__icons'><a href="#!"><FaDiscord /></a></li>
                    <li className='menu__icons'><a href="#!"><FaTwitter /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;