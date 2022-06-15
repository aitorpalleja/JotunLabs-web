import React from 'react';
import '../MenuMobile/MenuMobile.scss'
import { slide as Menu } from 'react-burger-menu'


function MenuMobile() {
  return (
    <div className='mobilemenu__body'>

      <input type="checkbox" id="active"/>
        <label for="active" class="menu-btn"><span></span></label>
        <label for="active" class="close"></label>
        <div class="wrapper">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>
    </div>
  );
}

export default MenuMobile;