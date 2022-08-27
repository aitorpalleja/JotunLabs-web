import React from 'react';
import '../DevPhase/DevPhase.scss'

function DevPhase() {
    return (
        <div class="containerPhase">
            <div class="card">
                <div class="box">
                    <div class="content">
                        <h2>01</h2>
                        <h3 class="phaseTitle1">NFTMarketCap</h3>
                        <p>Rankings, charts, news, portfolio... Team 1 is already developing this.</p>
                        {/*<a href="#">Read More</a>*/}
                        <br></br>
                        <p>Development team: Team 1. They are already working on it.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="content">
                        <h2>02</h2>
                        <h3 class="phaseTitle2">Social Network</h3>
                        <p>All the common features of a web2 social network, plus: Login with wallet, NFT gallery per profile and much more. All decentralized, using the Solana Blockchain.
                        </p>
                        <br></br>
                        <p>Development team: Team 2. They will start after the mint. Team 1 will join later.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="box">
                    <div class="content">
                        <h2>03</h2>
                        <h3 class="phaseTitle3">Job platform</h3>
                        <p>Artists, mods, shillers, devs... Welcome to the job search platform of the future. You will use the profile of our social network to apply and create job offers.
                        </p>
                        <br></br>
                        <p>Development team: ... It's a surprise!</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default DevPhase;