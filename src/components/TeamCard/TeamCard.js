import React from 'react';
import '../TeamCard/TeamCard.scss'
import profile from '../../assets/MoneyBoy.png'


function TeamCard() {
    return (
        <div className='team__body' id='team'>
            <p className='team__title'>Team</p>
            <div class="grid-container">
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Aitor</p>
                    <p className='team-card__position'>Founder and DEV</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Chucky</p>
                    <p className='team-card__position'>Head of Development  </p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Tyr</p>
                    <p className='team-card__position'>Full Stack Developer</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Artist Name</p>
                    <p className='team-card__position'>Head of Art </p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Marketer Name</p>
                    <p className='team-card__position'>Head of Marketing</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Dev Team 1</p>
                    <p className='team-card__position'>Over 3 DEVS</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__name'>Dev Team 2</p>
                    <p className='team-card__position'>Over 3 DEVS</p>
                </div>
            </div>
        </div>

    );
}

export default TeamCard;