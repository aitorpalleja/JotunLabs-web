import React from 'react';
import '../TeamCard/TeamCard.scss'
import MoneyBoy from '../../assets/MoneyBoy.png'
import MoneyBoy2 from '../../assets/MoneyBoy2.png'
import Mob from '../../assets/Mob.png'
import Gemmy from '../../assets/Gemmy.png'
import Saigo from '.././../assets/Saigo.png'
import Monkey from '../../assets/Monkey.png'
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
                    <p className='team-card__position'>Founder and DEV</p>
                    <a href="https://twitter.com/AitorForge" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Monkey} alt="profile" />
                    <p className='team-card__name'>Blue Neptune</p>
                    <p className='team-card__position'>Head of Art </p>
                    <a href="https://twitter.com/BlueneptuneNft" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={MoneyBoy2} alt="profile" />
                    <p className='team-card__name'>Osk</p>
                    <p className='team-card__position'>Head of Development  </p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Mob} alt="profile" />
                    <p className='team-card__name'>Tyr</p>
                    <p className='team-card__position'>Full Stack Developer</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Fish} alt="profile" />
                    <p className='team-card__name'>Marketer Name</p>
                    <p className='team-card__position'>Head of Marketing</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Gemmy} alt="profile" />
                    <p className='team-card__name'>Dev Team 1</p>
                    <p className='team-card__position'>Over 3 DEVS</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={Saigo} alt="profile" />
                    <p className='team-card__name'>Dev Team 2</p>
                    <p className='team-card__position'>Over 3 DEVS</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
            </div>
        </div>

    );
}

export default TeamCard;