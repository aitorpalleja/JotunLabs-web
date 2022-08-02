import React from 'react';
import '../TeamCard/TeamCard.scss'
import MoneyBoy from '../../assets/MoneyBoy.png'
import MoneyBoy2 from '../../assets/MoneyBoy2.png'
import Gemmy from '../../assets/Gemmy.png'
import Saigo from '.././../assets/Saigo.png'
import Fish from '../../assets/Fish.png'
import { FaTwitter } from 'react-icons/fa';

function TeamCard() {
    return (
        <div className='team__body' id='team'>
            <p className='team__title'>Team</p>
            <div class="grid-container">
                <div class="grid-item">
                    <img className='team-card__image' src={MoneyBoy} alt="profile" />
                    <p className='team-card__name'>Aitor</p>
                    <p className='team-card__position'>Founder and Dev</p>
                    <a href="https://twitter.com/Aitor_nft" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Gemmy} alt="profile" />
                    <p className='team-card__name'>Blue Neptune</p>
                    <p className='team-card__position'>Head of Art </p>
                    <a href="https://twitter.com/BlueneptuneNft" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Saigo} alt="profile" />
                    <p className='team-card__name'>Osk</p>
                    <p className='team-card__position'>Head of Development  </p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={MoneyBoy2} alt="profile" />
                    <p className='team-card__name'>Tyr</p>
                    <p className='team-card__position'>Full Stack Developer</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Fish} alt="profile" />
                    <p className='team-card__name'>Santana</p>
                    <p className='team-card__position'>Front End Developer</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>

            </div>
        </div>

    );
}

export default TeamCard;