import React from 'react';
import '../Work/Work.scss'

function Work() {
    return (
        <div className='work__body' id=''>
            <div className='about-us__text'>
                <p className='work__title'>How we work</p>


                <p className='about-us__subtitle'>
                    We have two development teams, Team 1 consists of two developers and our Founder.
                    Team 2 consists of three developers and our CTO.
                    We know that the project is ambitious and that is
                    why we are going to divide the development into three phases.
                    As if we were working on three different applications.
                </p>

                <p className='about-us__subtitle'>
                    1.- <mark className='aboutus__yellow'>NFTMarketCap</mark>:
                    rankings, charts, news, portfolio... Team 1 is already developing this.
                </p>

                <p className='about-us__subtitle'>
                    2.- <mark className='aboutus__yellow'>Social Network</mark>:  Imagine a kind of twitter, with all its features, plus: Use your wallet to login,
                    choose your PFP directly from your wallet, a section in your profile to show your NFTs as a gallery and much more. All decentralized, using the Solana blockchain. <br></br>Team 2 will be in charge of this project.
                </p>

                <p className='about-us__subtitle'>
                    3.- <mark className='aboutus__yellow'>Job search engine</mark>: Do you need mods? Artists? Devs? This will be the best place to find the jobs and workers of the future. <br></br>Team 1 will take care of the project after finishing NFTMarketCap, or maybe we will do an event to find talents among the holders...
                </p>

                <p className='about-us__subtitle'>
                    We know that it is important for users to see the progress, 
                    so we will be <mark className='aboutus__yellow'>releasing the applications individually</mark> as they are completed. 
                    The ultimate goal is to <mark className='aboutus__yellow'>merge</mark> everything to <mark className='aboutus__yellow'>to create an all-in-one social network</mark>. We will be able to use the same profile to search and create job offers, 
                    create our portfolio and use the social network.
                </p>

            </div>
        </div>

    );
}

export default Work;

