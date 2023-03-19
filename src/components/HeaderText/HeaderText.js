import React from 'react';
import '../HeaderText/HeaderText.scss'

function HeaderText() {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Building <mark className='yellow'>Decentralized Apps</mark></h1> 

            <h2 className='header-subtitle'>Create and explore with us the next generation <br></br> <mark className='yellowsub'> all-in-one Social Network </mark> based on Solana Blockchain.</h2>
        </div>
    );
}

export default HeaderText;