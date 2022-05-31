import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import HeaderLinkButton from './components/HeaderLinkButton/HeaderLinkButton';
import Menu from './components/Menu/Menu'

function App() {
    return (
        <div className="App">
            <Menu></Menu>
            <Header></Header>

        </div>
    );
}

export default App;
