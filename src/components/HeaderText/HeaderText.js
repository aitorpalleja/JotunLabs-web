import React from 'react';
import '../HeaderText/HeaderText.scss'

function HeaderText() {
    return (
        <div className='header-text'>
            <h1 className='title'>Building <mark className='yellow'>Decentralized Apps.</mark></h1>
            <h2 className='subtitle'><mark className='twitter'>Twitter?</mark> <mark className='whatsapp'>Whatsapp?</mark> <mark className='instagram'>Instagram?</mark> We're gonna improve all of them.</h2>
        </div>
    );
}

export default HeaderText;