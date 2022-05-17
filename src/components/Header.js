import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "../configs/particles.json";
import { loadFull } from "tsparticles";

function Header() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
            <Particles 
            options={particlesOptions} 
            init={particlesInit}
            />

    );
}

export default Header;