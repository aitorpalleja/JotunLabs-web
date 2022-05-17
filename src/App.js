import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './assets/logo192.png';
import './App.css';
import Header from './components/Header';

function App() {

    return (
        <div className="App">
            <Header></Header>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://particles.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
            </header>
        </div>
    );
}

export default App;
