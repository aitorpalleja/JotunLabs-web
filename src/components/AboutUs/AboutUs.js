import React from 'react';
import '../AboutUs/AboutUs.scss'

function AboutUs() {
    return (
        <div className='about-us__body' id='about-us'>
            <div className='about-us__text'>
                <p className='about-us__title'>What is Ants Lab?</p>
                <p className='about-us__subtitle'>
                    Ants Lab was born out of our conviction that
                    WEB3 is and should be the future.
                    We see many projects that talk about WEB3, but it is still something distant for the user, intangible.
                    Our goal is to break down that wall that separates the two realities,
                    we come to create decentralized alternatives to your favorite applications. </p>

                <p className='about-us__subtitle'>
                    We decided that our first development will be a  <mark className='aboutus__yellow'>all-in-one Social Network.</mark> Fully decentralized,
                    without servers where our data is stored, analyzed and exploited.
                    We will use the Solana blockchain, due to its low transaction cost, speed and unparalleled scalability. 
                </p>

                <p className='about-us__subtitle'>
                We will provide you with all the functionalities of a conventional social network. In addition, users will be able
                 to have their own <mark className='aboutus__yellow'>gallery of NFTs</mark>, updated <mark className='aboutus__yellow'>NFTs and cryptocurrency data, Web3 job search engine</mark>...
                </p>

                <p className='about-us__subtitle'>
                The development has been divided into two phases. At the moment, one of our development team is 
                working on <mark className='aboutus__yellow'>NFTMarketCap</mark>, an application focused on Solana's NFTs where you will be able to see 
                rankings, charts, news and where users will have the option to 
                create their portfolio and analyze their earnings in real time.
                </p>

                <p className='about-us__subtitle'>
                When NFTMarketCap is finalized, it will be integrated into 
                the social network to create Solana's top all-in-one application. 
                </p>

                <p className='about-us__subtitle'>
                    The core team consists of three developers and one artist.
                    Our CTO is a computer engineer with experience in several
                    WEB2 startups and is currently a computer science professor.
                    We will work divided in two teams under the SCRUM methodology,
                    Dev Team 1 will be in charge of developing the NFTMarketCap project and will be led by our founder.
                    Dev Team 2 will be led by our CTO, they will be in charge of the social network.
                </p>
            </div>
        </div>

    );
}

export default AboutUs;

