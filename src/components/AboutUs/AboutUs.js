import React from 'react';
import '../AboutUs/AboutUs.scss'

function AboutUs() {
    return (
        <div className='about-us__body' id='about-us'>
            <div className='about-us__text'>
                <p className='about-us__title'>What is Ants Lab?</p>
                <p className='about-us__subtitle'>Ants Lab was born out of our conviction that WEB3 is and should be the future.
                    We use Phantom instead of Binance, because we want to be in control of our money, now we need an alternative to social media where we can own our data. </p>

                <p className='about-us__subtitle'>Makes sense, right? This is where we decided to create Ants Lab and that our first big project had to be a social network.
                    Totally decentralized, without servers where our data is stored, analyzed and exploited. We will use the solana blockchain, due to its low transaction cost, speed and unparalleled scalability.</p>

                <p className='about-us__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget accumsan magna.
                    Aliquam et sollicitudin augue, vitae sagittis quam. Pellentesque lobortis urna nibh, sit amet dapibus turpis blandit sit amet.
                    In non nibh et augue faucibus rutrum vel non odio. Nam condimentum nisl lobortis, tincidunt arcu finibus, sagittis sapien.
                    Suspendisse potenti. Mauris at mi sollicitudin lectus vehicula mattis.
                    Suspendisse aliquet, est eu bibendum viverra, odio nunc finibus purus, ut efficitur turpis sem sit amet ipsum.</p>
            </div>
        </div>

    );
}

export default AboutUs;

