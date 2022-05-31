import React, { useCallback } from 'react';
import '../Menu/Menu.scss'

function Menu() {
    return (
    <nav>
    <ul class="menu">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About us</a></li>
        <li><a href="#!">Roadmap</a></li>
        <li><a href="#!">Team</a></li>
    </ul>
    </nav>
    );
}

export default Menu;