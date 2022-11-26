import React from 'react';
import '../TeamCard/TeamCard.scss'
import { FaTwitter } from 'react-icons/fa';
import BlueJotun from '../../assets/BlueJotun.png'
import Quequel from '../../assets/Quequel.png'
import Jikan from '../../assets/Jikan.png'
import Jikan2 from '../../assets/Jikan2.png'
import Tiger from '../../assets/Tiger.png'

function TeamCard() {
    return (
        <div className='team__body' id='team'>
            <p className='team__title'>Team</p>
            <div className="grid-container">
                <div className="grid-item">
                    <img className='team-card__image' src={BlueJotun} alt="profile" />
                    <p className='team-card__name'>Tenzo</p>
                    <p className='team-card__position'>Founder and Dev</p>
                    <a href="https://twitter.com/TenzoNFT" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div className="grid-item">
                    <img className='team-card__image' src={Quequel} alt="profile" />
                    <p className='team-card__name'>Blue Neptune</p>
                    <p className='team-card__position'>Head of Art </p>
                    <a href="https://twitter.com/BlueneptuneNft" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
                </div>
                <div className="grid-item">
                    <img className='team-card__image' src={Jikan} alt="profile" />
                    <p className='team-card__name'>Osk</p>
                    <p className='team-card__position'>Head of Development  </p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div className="grid-item">
                    <img className='team-card__image' src={Jikan2} alt="profile" />
                    <p className='team-card__name'>Tyr</p>
                    <p className='team-card__position'>Full Stack Developer</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>
                <div className="grid-item">
                    <img className='team-card__image' src={Tiger} alt="profile" />
                    <p className='team-card__name'>Iván</p>
                    <p className='team-card__position'>Front End Developer</p>
                    <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
                </div>

            </div>
        </div>

    );
}

export default TeamCard;