import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HeaderText from './components/HeaderText/HeaderText';
import Menu from './components/Menu/Menu'
import Roadmap from './components/Roadmap/Roadmap';
import Services from './components/Services/Services';
import TeamCard from './components/TeamCard/TeamCard'
import MenuMobile from './components/MenuMobile/MenuMobile'
import MediaQuery from "react-responsive";

function App() {
    return (
        <div className="App">
            <MediaQuery minWidth={1150}>
                <Menu></Menu>
                <Header></Header>
                <div id="home"><HeaderText></HeaderText></div>
                <div id="about"> <AboutUs></AboutUs></div>
                <div id="services"> <Services></Services></div>
                <div id="roadmap"> <Roadmap></Roadmap></div>
                <div id="team"> <TeamCard></TeamCard></div>
                <Footer></Footer>
            </MediaQuery>

            <MediaQuery maxWidth={1150}>
                <MenuMobile></MenuMobile>
                <Header></Header>
                <div id="homemobile"><HeaderText></HeaderText></div>
                <div id="about"> <AboutUs></AboutUs></div>
                <div id="services"> <Services></Services></div>
                <div id="roadmap"> <Roadmap></Roadmap></div>
                <div id="team"> <TeamCard></TeamCard></div>
                <Footer></Footer>
            </MediaQuery>
        </div>
    );
}

export default App;
