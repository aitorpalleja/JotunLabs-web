import React from 'react';
import '../HeaderText/HeaderText.scss'

function HeaderText() {
    return (
        <div className='header-text'>
            <span className='header-title'>Building <mark className='yellow'>Decentralized Apps</mark> <br></br>
                <mark className='header-subtitle'> Create and explore with us the next generation DApps. <mark className='yellow'>Own your data.</mark>
                \n <mark className='twitter'>Twitter?</mark> <mark className='whatsapp'>Whatsapp?</mark> <mark className='instagram'>Instagram?</mark> <mark className='yellow'>We're gonna improve all of them.</mark></mark></span>
        </div>
    );
}

export default HeaderText;