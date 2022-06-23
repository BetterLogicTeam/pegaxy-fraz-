import React from 'react'
// import { Row, Col, Button, Container, Card } from 'react-bootstrap'
// import * as Icon from 'react-bootstrap-icons';
import { FaBeer } from 'react-icons/fa';
import horseimage from '../../assets/horse.png'
// import gameplaybg from '../../assets/gameplaybg.png'
import './Home_style.css'
import Game_Play from '../../components/Game_Play/Game_Play';
import How_To_Play from '../How_Play/How_To_Play';
import Tokenomics from '../Tokenomics/Tokenomics';
import Meet_Our_Team from '../Meet_Our_Team/Meet_Our_Team';
import Investor from '../Investor/Investor';
import Roadmap from '../Roamap/Roadmap';
import Footer from '../Footer/Footer';




const Home = () => {
    return (
        <div className='home-main-section'>
            <div className='container'>
                <div className=' bgblack '>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-9 col-md-12 bgwhite py-5 px-md-5'>
                                <div className='row'>
                                    <div className='col-md-6 col-lg-9  order-3 order-md-1  ' >
                                        <div className='container' style={{ paddingTop: "150px" }}>
                                            <h1 className=' mb-0'>ABOUTPEGAXY</h1>
                                            <p>Learn more about us</p>
                                            <p style={{ fontSize: "1.2rem" }}>Pegaxy (Pegasus Galaxy) is a racing game with futuristic mythological styling. Pega (the horses) are descendants of the mighty Pegasus. In this game, players will participate in PvP format races to win rewards in the platforms native utility token, VIS (Vigorus)</p>
                                            <div className='btn btn-danger px-5 py-3 rounded-pill'>BloodLines</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-6 col order-1 order-md-3'>
                                        <img src={horseimage} className="imagesetting" />
                                    </div>

                                </div>
                              <div className='row cardshiftright cardshiftup'>
                              <div className='col-lg-4 col-md-12 my-3'>
                                    <div class="card py-3 px-4 rounded-5 cardborderradius h-100">

                                        <div class="card-body">
                                        <h5 class="card-title">
                                                <FaBeer/></h5>
                                            <h5 class="card-title">
                                                RACING</h5>
                                            <p class="card-text">It’s not as easy as it looks! Mastering the elements is important and winning VIS is the end goal. Refine your skills, understand the mechanics and dominate the competition.</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-12 my-3'>
                                    <div class="card py-3 px-4 rounded-5 cardborderradius h-100" style={{backgroundColor:"#cf0000"}}>

                                        <div class="card-body">
                                        <h5 class="card-title">
                                                <FaBeer/></h5>
                                            <h5 class="card-title">
                                            BREEDING</h5>
                                            <p class="card-text">Whether you breed Pega for resale profit, for fun or even breed for your scholars, the more Pega you have, the better.</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-4 col-md-12 my-3'>
                                    <div class="card py-3 px-4 rounded-5 cardborderradius h-100 bg-white text-black">

                                        <div class="card-body">
                                        <h5 class="card-title">
                                                <FaBeer/></h5>
                                            <h5 class="card-title">
                                            RENTING</h5>
                                            <p class="card-text">If you plan to be a manager, there’s no need for manual scholar payments and multiple wallets. Everything in Pegaxy is handled via escrow automatically. It’s safe, transparent and fast for everyone.</p>

                                        </div>
                                    </div>

                                </div>
                              </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <Game_Play/>
            <How_To_Play/> 
            <Tokenomics />
            <Meet_Our_Team />
            <Investor />
            <Roadmap />
            <Footer />
        </div>
    )
}

export default Home