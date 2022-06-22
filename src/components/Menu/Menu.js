import React from 'react';
import '../Menu/Menu.scss'
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

import { Link } from "react-scroll";
//import { Link, animateScroll as scroll } from "react-scroll";

//                <img src={logo} className="logo" alt='logo' /> debajo del nav



function Menu() {
    return (
        <div className='fondo'>
            <nav className="menu" id='menu'>
                <ul className='menu__ul'>
                    <li className='menu__li'><a href="#menu">Home</a></li>

                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={600}
                        >
                            Features
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        >
                            Roadmap
                        </Link>
                    </li>
                    <li className='menu__li'>
                        <Link
                            activeClass="active"
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Team
                        </Link>
                    </li>
                    <li className='menu__icons'><a href="#!"><FaDiscord /></a></li>
                    <li className='menu__icons'><a href="#!"><FaTwitter /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;