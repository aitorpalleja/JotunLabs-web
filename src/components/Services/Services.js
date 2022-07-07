import React from 'react';
import '../Services/Services.scss'


function Services() {
    return (
        <div className='services' id='features'>
            <p className='roadmap__title'>What we Provide</p>
            <div class="main-content">
                <div class="palette__wrapper">
                    <div class="palette palette--one">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>Social Network</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">We are creating a web3 social network based on the Solana blockchain.</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--five">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>NFT MARKET CAP</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">Like CoinMarketCap, but better. We will offer the best portfolio creator to keep up to date with your earnings, without forgetting your staked NFTs. </p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--two">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>Staking Token</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">We will launch our staking platform after the mint.
                                Holders will be able to stake our NFTs to earn tokens.</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--six">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>REAL DAO</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">Not a group of alpha hunters, a real DAO. With power over important decisions and the path of the project.</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--seven">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>Private channel to PFP users</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">A private discord group for holders who use our NFT as a profile picture on Twitter.</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--three">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>Reward users with PFP</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">Monthly rewards for holders who use our NFTs as a PFP on Twitter. SOL, raffles, NFTs, tokens...</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--four">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>HACKATHON to Holders</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">We will organize DApp creation competitions. Our DAO will choose the winners, they will receive SOL and the opportunity to join our team.</p>
                        </div>
                    </div>
                </div>
                <div class="palette__wrapper">
                    <div class="palette palette--eight">
                        <div class="palette__cover">
                            <div class="palette__cover__border"><span>Two DEV Teams</span></div>
                        </div>
                        <div class="palette__cover__top"></div>
                        <div class="palette__base">
                            <p className="services__text">We have two groups of developers who will work on different projects in parallel. All with years of experience in WEB2 companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;