import React from 'react'
import './Tokenomics_style.css'
// import trackmap1 from '../../assets/trackmap1.png'
// import trackmap2 from '../../assets/trackmap2.png'
// import { AiOutlineApi } from "react-icons/ai";
// import { BiPurchaseTagAlt } from "react-icons/bi";
// import { BsFlag } from "react-icons/bs";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import { GiHorseHead } from "react-icons/gi";





export default function Tokenomics() {
    return (
        <div>

            <div className="bgimage my-5">
                <div className='container '>
                    <h2 className='text-center tokenomictitle'>Tokenomics</h2>
                    <p className='text-center'> Governance and Utility Tokens</p>
                    <div className='row '>
                        <div className="col-md-4">
                            <div className="card border-0 bgtransparent">
                                <div className="card-body ">
                                    <h3 className="card-title text-center py-5"><pre>     </pre></h3>
                                    <ul className="list-group text-center fontsize19">
                                        <li className="list-group-item">Blockchain</li>
                                        <li className="list-group-item">Token Name</li>
                                        <li className="list-group-item">Token Symbol</li>
                                        <li className="list-group-item">Use Case</li>

                                        <li className="list-group-item">Token Decimals</li>

                                        <li className="list-group-item">Token Type</li>
                                        <li className="list-group-item">Total Supply</li>



                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card cardshadow">
                                <div className="card-body pb-5 ">
                                    <h3 className="card-title text-center py-5">PGX</h3>

                                    <ul className="list-group text-center fontsize19 pt-2">
                                        <li className="list-group-item">Polygon (Matic) Chain</li>
                                        <li className="list-group-item">Pegaxy Stone</li>
                                        <li className="list-group-item">PGX</li>
                                        <li className="list-group-item"> Governance</li>

                                        <li className="list-group-item">18</li>
                                        <li className="list-group-item">ERC-20</li>



                                        <li className="list-group-item">1,000,000,000 PGX (1B)</li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card  border-0 bgtransparent fontsize19">
                                <div className="card-body  ">
                                    <h3 className="card-title text-center py-5">VIS</h3>

                                    <ul className="list-group text-center">
                                        <li className="list-group-item">Polygon (Matic) Chain</li>
                                        <li className="list-group-item">Vigorus</li>
                                        <li className="list-group-item">VIS</li>
                                        <li className="list-group-item">Utility</li>

                                        <li className="list-group-item">18</li>

                                        <li className="list-group-item">ERC-20</li>
                                        <li className="list-group-item">Uncapped Utility Token</li>



                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
