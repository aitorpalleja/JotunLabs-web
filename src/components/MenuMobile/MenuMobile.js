import React from 'react';
import '../MenuMobile/MenuMobile.scss'
import { slide as Menu } from 'react-burger-menu'


function MenuMobile() {
    return (
        <Menu>
        <a id="home" className="menu-item" href="/about-us">Home</a>
        <a id="about" className="menu-item" href="/roadmap">About</a>
        <a id="contact" className="menu-item" href="#!">Contact</a>
      </Menu>
    );
}

export default MenuMobile;