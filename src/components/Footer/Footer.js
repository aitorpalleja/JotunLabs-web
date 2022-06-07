import React from 'react';
import '../Footer/Footer.scss'
import { FaDiscord } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { SiGitbook } from 'react-icons/si';

function Footer() {
    return (
        <nav className="footer">
            <ul className='footer__list'>
                <li><a href="#!"><FaDiscord /></a></li>
                <li><a href="#!"><FaTwitter /></a></li>
                <li><a href="#!"><SiGitbook /></a></li>
            </ul>
        </nav>
    );
}

export default Footer;