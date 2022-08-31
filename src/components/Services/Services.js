import React from 'react';
import '../Services/Services.scss'


function Services() {
    return (
        <div className='services' id='features'>
            <p className='roadmap__title'>What we Provide</p>
            <div className="main-content">
                <div className="palette__wrapper">
                    <div className="palette palette--one">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>Social Network</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">We are creating a decentralized all-in-one Social Network based on the Solana Blockchain.</p>
                        </div>
                    </div>
                </div>
                <div className="palette__wrapper">
                    <div className="palette palette--five">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>NFT MARKET CAP</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">We will offer the best NFT tracking and portfolio builder app to keep up to date with your earnings. </p>
                        </div>
                    </div>
                </div>

                <div className="palette__wrapper">
                    <div className="palette palette--six">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>JOB Search Engine</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">There will be a specific section for users to create and apply to job offers.</p>
                        </div>
                    </div>
                </div>
                <div className="palette__wrapper">
                    <div className="palette palette--two">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>Staking  Token</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">
                                Holders will be able to stake our NFTs to earn tokens.</p>
                        </div>
                    </div>
                </div>

                <div className="palette__wrapper">
                    <div className="palette palette--seven">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>Private channel to PFP users</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">A private discord group for holders who use our NFT as a profile picture on Twitter.</p>
                        </div>
                    </div>
                </div>
                <div className="palette__wrapper">
                    <div className="palette palette--three">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>Reward users with PFP</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">Monthly rewards for holders who use our NFTs as a PFP on Twitter. SOL, raffles, NFTs, tokens...</p>
                        </div>
                    </div>
                </div>
                <div className="palette__wrapper">
                    <div className="palette palette--four">
                        <div className="palette__cover">
                            <div className="palette__cover__border"><span>HACKATHON to Holders</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">DApp creation competitions. After choosing the winners, they will receive SOL and the opportunity to join our team.</p>
                        </div>
                    </div>
                </div>
                <div className="palette__wrapper">
                    <div className="palette palette--eight">
                        <div className="palette__cover">
                            <div class="palette__cover__border"><span>Two DEV Teams</span></div>
                        </div>
                        <div className="palette__cover__top"></div>
                        <div className="palette__base">
                            <p className="services__text">We have two groups of developers who will work on different projects in parallel. All with years of experience in Web2 companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;