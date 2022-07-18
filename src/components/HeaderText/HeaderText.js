import React from 'react';
import '../HeaderText/HeaderText.scss'

/*            <mark className='header-subtitle'> Create and explore with us the next generation DApps. <mark className='yellow'>Own your data.</mark>
                \n <mark className='twitter'>Twitter?</mark> <mark className='whatsapp'>Whatsapp?</mark> <mark className='instagram'>Instagram?</mark> <mark className='yellow'>We're gonna improve all of them.</mark></mark>*/ 

function HeaderText() {
    return (
        <div className='header-text'>
            <p className='header-title'>Building <mark className='yellow'>Decentralized Apps</mark></p> 

            <p className='header-subtitle'>Create and explore with us the next generation <br></br> <mark className='yellowsub'> all-in-one Social Network </mark> based on Solana Blockchain.</p>
        </div>
    );
}

export default HeaderText;