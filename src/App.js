import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderText from './components/HeaderText/HeaderText';
import Menu from './components/Menu/Menu'
import MenuMobile from './components/MenuMobile/MenuMobile';
import Roadmap from './components/Roadmap/Roadmap';
import Services from './components/Services/Services';
import TeamCard from './components/TeamCard/TeamCard'

function App() {
    return (
        <div className="App">

            <MenuMobile></MenuMobile>
            <Header></Header>
            <HeaderText></HeaderText>
            <div id="about"> <AboutUs></AboutUs></div>
            <div id="services"> <Services></Services></div>
            <div id="roadmap"> <Roadmap></Roadmap></div>
            <div id="team"> <TeamCard></TeamCard></div>
            <Footer></Footer>

        </div>
    );
}

export default App;
