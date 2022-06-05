import React from 'react';
import '../TeamCard/TeamCard.scss'
import profile from '../../assets/MoneyBoy.png'

function TeamCard() {
    return (
        <div class="flex-container">
            <p className='team-card__title'>Team</p>
            <div class="flex-item">
                <img className='team-card__image' src={profile} alt='profile' />
            </div>
            <div class="flex-item">
                <img className='team-card__image' src={profile} alt='profile' />
            </div>
            <div class="flex-item">
                <img className='team-card__image' src={profile} alt='profile' />
            </div>
        </div>
        
    );
}

export default TeamCard;