import React from 'react'
import './How_To_Play_style.css'
import trackmap1 from '../../assets/trackmap1.png'
import trackmap2 from '../../assets/trackmap2.png'
import { AiOutlineApi } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BsFlag } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiHorseHead } from "react-icons/gi";





export default function How_To_Play() {
    return (
        <div>

            <div className="container">
                <div className="row container">
                    <div className="col-lg-4 py-5 bgblack">
                        <img src={trackmap1} className='img-fluid dropShadow position-sticky top-0 ml displaynone' />
                        <img src={trackmap2} className='img-fluid dropShadow position-sticky top-0 ml'  />


                    </div>
                    <div className="col-lg-8 py-5">
                        <div className="container">
                            <div className='row'>
                                <div className="col-lg-6 offset-lg-4">
                                    <h1><strong style={{ fontSize: "100px" }}>How</strong> to Play</h1>
                                    <h3><AiOutlineApi />Connect</h3>
                                    <p>Connect your Wallet to the Polygon Chain and Pegaxy Website.</p>
                                    <h3 className='mt-5'><BiPurchaseTagAlt />Purchase or Rent</h3>
                                    <p>Purchase or rent a single Pega from the Marketplace.</p>
                                    <h3 className='mt-5'><BsFlag />Enter Race</h3>
                                    <p>Click the Enter Race button and you will be pushed into a lobby matching your Pega’s class, instantly.</p>
                                    <h3 className='mt-5'><AiOutlineCheckCircle />PREPARE</h3>
                                    <p>Once the lobby is full, you will have 60 seconds to assess the tracks variables and fit gear to help your Pega match the tracks variables.</p>
                                    <h3 className='mt-5'><GiHorseHead />RACE</h3>
                                    <p>Watch your Pega race against 14 others! If you place in the top 3, you win VIS tokens!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
