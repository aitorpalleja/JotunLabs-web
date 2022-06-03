import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import HeaderLinkButton from './components/HeaderLinkButton/HeaderLinkButton';
import HeaderText from './components/HeaderText/HeaderText';
import Menu from './components/Menu/Menu'
import Roadmap from './components/Roadmap/Roadmap';

function App() {
    return (
        <div className="App">

            <Menu></Menu>
            <Header></Header>
            <HeaderText></HeaderText>
            <AboutUs></AboutUs>
            <Roadmap></Roadmap>
            

        </div>
    );
}

export default App;
