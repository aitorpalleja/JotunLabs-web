import React from 'react';
import '../TeamCard/TeamCard.scss'
import profile from '../../assets/MoneyBoy.png'

function TeamCard() {
    return (
        <div className='team__body'>
            <p className='team__title'>Team</p>
            <div class="grid-container">
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
                <div class="grid-item">
                    <img className='team-card__image' src={profile} alt="profile" />
                    <p className='team-card__text'>Aitor</p>
                    <p className='team-card__text'>Founder and CEO</p>
                </div>
            </div>
        </div>

    );
}

export default TeamCard;