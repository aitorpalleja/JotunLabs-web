import React from 'react';
import '../HeaderTextSub/HeaderTextSub.scss'

/*            <mark className='header-subtitle'> Create and explore with us the next generation DApps. <mark className='yellow'>Own your data.</mark>
                \n <mark className='twitter'>Twitter?</mark> <mark className='whatsapp'>Whatsapp?</mark> <mark className='instagram'>Instagram?</mark> <mark className='yellow'>We're gonna improve all of them.</mark></mark>*/ 

function HeaderTextSub() {
    return (
        <div className='header-textsub'>
            <span className='header-titlesub'>Create and explore with us the next generation <br></br><mark className='header-text-sub-yellow'>all-in-on Social Network</mark> based on Solana Blockchain</span>
        </div>
    );
}

export default HeaderTextSub;