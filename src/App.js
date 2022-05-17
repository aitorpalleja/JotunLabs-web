import React, { useCallback } from 'react';
import logo from './assets/logo192.png';
import './App.css';
import Header from './components/Header';

function App() {

    return (
        <div className="App">
            <Header></Header>
            <div className='header__text'>
                <h1 className='header__text-title'>Welcome to WEB3</h1>
                
            </div>
        </div>
    );
}

export default App;
