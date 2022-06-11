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
                    <li className='menu__li'><a href="#menu">Home</a></li>
                    <li className='menu__li'><a href="#about-us">About</a></li>
                    <li className='menu__li'><a href="#features">Features</a></li>
                    <li className='menu__li'><a href="#roadmap">Roadmap</a></li>
                    <li className='menu__li'><a href="#team">Team</a></li>
                    <li className='menu__icons'><a href="#!"><FaDiscord /></a></li>
                    <li className='menu__icons'><a href="#!"><FaTwitter /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;