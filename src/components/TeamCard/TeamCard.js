import React from 'react';
import '../TeamCard/TeamCard.scss'
import { FaTwitter } from 'react-icons/fa';


import Elve from '../../assets/elve.webp'
import LunarPink from '../../assets/lunarpink.webp'
import LunarTiger from '../../assets/lunartiger.webp'
import LunarDragon from '../../assets/lunardragon.webp'
import Tiger from '../../assets/tiger.webp'


function TeamCard() {
   return (
       <div className='team__body' id='team'>
           <p className='team__title'>Team</p>
           <div className="grid-container">
               <div className="grid-item">
                   <img className='team-card__image' src={Elve} alt="profile" />
                   <p className='team-card__name'>Tenzo</p>
                   <p className='team-card__position'>Founder and Dev</p>
                   <a href="https://twitter.com/TenzoNFT" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
               </div>
               <div className="grid-item">
                   <img className='team-card__image' src={LunarPink} alt="profile" />
                   <p className='team-card__name'>Blue Neptune</p>
                   <p className='team-card__position'>Head of Art </p>
                   <a href="https://twitter.com/BlueneptuneNft" target="_blank" rel="noreferrer"><FaTwitter size={20} /></a>
               </div>
               <div className="grid-item">
                   <img className='team-card__image' src={LunarDragon} alt="profile" />
                   <p className='team-card__name'>Osk</p>
                   <p className='team-card__position'>Head of Development  </p>
                   <a className='notwitter' href="#!"><FaTwitter size={20} /></a>
               </div>
               <div className="grid-item">
                   <img className='team-card__image' src={LunarTiger} alt="profile" />
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