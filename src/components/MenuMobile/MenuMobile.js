import React from 'react';
import '../MenuMobile/MenuMobile.scss'

import { Link } from "react-scroll";

import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function MenuMobile() {
  return (
    <div className='mobilemenu__body'>

      <input type="checkbox" id="active" />
      <label for="active" class="menu-btn"><span></span></label>
      <label for="active" class="close"></label>
      <div class="wrapper">
        <ul>
          <li>
            <Link
              activeClass="active"
              to=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link></li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={600}
            >
              Features
            </Link></li>
          <li>
            <Link
              activeClass="active"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Roadmap
            </Link></li>
          <li>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
            >
              Team
            </Link></li>
          <li>
            <a href="#!"><FaDiscord /></a></li>
          <li>
            <a href="#!"><FaTwitter /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default MenuMobile;