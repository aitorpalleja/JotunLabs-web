import React from 'react';
import '../Work/Work.scss'
import DevPhase from '../DevPhase/DevPhase';

function Work() {
    return (
        <div className='work__body' id=''>

            <div className='about-us__text'>
                <p className='work__title'>Work phases</p>
            </div>
            <DevPhase></DevPhase>
            <div className='about-us__text'>
            </div>
        </div>

    );
}

export default Work;

