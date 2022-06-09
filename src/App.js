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

function App() {
    return (
        <div className="App">

            <Menu></Menu>
            <Header></Header>
            <HeaderText></HeaderText>
            <AboutUs></AboutUs>
            <Services></Services>
            <Roadmap></Roadmap>
            <TeamCard></TeamCard>
            <Footer></Footer>

        </div>
    );
}

export default App;
