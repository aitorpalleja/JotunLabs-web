import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "../../configs/particles.json";
import { loadFull } from "tsparticles";
import '../Header/Header.scss'

function Header() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className='particles-body'>
            <Particles 
            options={particlesOptions} 
            init={particlesInit}
            />
        </div>
    );
}

export default Header;