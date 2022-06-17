import React from 'react';
import '../HeaderText/HeaderText.scss'

function HeaderText() {
    return (
        <div className='header-text'>
            <span className='header-title'>Building <mark className='yellow'>Decentralized Apps</mark></span>
        </div>
    );
}

export default HeaderText;