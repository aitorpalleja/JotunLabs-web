import React from 'react';
import '../MenuMobile copy/MenuMobile.scss'
import $ from 'jquery';
import jQuery from 'jquery'



$(document).ready(function () {
  $(document).delegate('.open', 'click', function (event) {
    $(this).addClass('oppenned');
    event.stopPropagation();
  })
  $(document).delegate('body', 'click', function (event) {
    $('.open').removeClass('oppenned');
  })
  $(document).delegate('.cls', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
  $(document).delegate('.mobile__a', 'click', function (event) {
    $('.open').removeClass('oppenned');
    event.stopPropagation();
  });
});


function MenuMobile2() {
  return (
    <div className='mobilemenu__body'>

      <div class="open">
        <span class="cls"></span>
        <span>
          <ul class="sub-menu ">
            <li>
              <a className='mobile__a' href="#about" title="about">Sobre / About</a>
            </li>
            <li>
              <a className='mobile__a' href="#skills" title="skills">Habilidades / Skills</a>
            </li>
            <li>
              <a className='mobile__a' href="#jobs" title="jobs">Trabalhos / Jobs</a>
            </li>
            <li>
              <a className='mobile__a' href="#contact" title="contact">Contato / Contact</a>
            </li>
          </ul>
        </span>
        <span class="cls"></span>
      </div>





    </div>

  );
}

export default MenuMobile2;