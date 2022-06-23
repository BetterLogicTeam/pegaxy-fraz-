import React from 'react'
import './Investor_style.css'
import cryptocapital from '../../assets/cryptocapital.png'
import ShimaCapital from '../../assets/ShimaCapital.png'
import kyberventures from '../../assets/kyberventures.png'
import astroventures3 from '../../assets/astroventures3.png'
import kyros from '../../assets/kyros.png'
import VectorRealDeallogov31 from '../../assets/VectorRealDeallogov31.png'





export default function Investor() {
    return (
        <div>

            <div className="investor_section">
                <div className="container">
                    <div className='text-center'>
                        <h3  className='investorfont'>Investors</h3>
                        <p>Spearheading the investment rounds we have some of the most influential companies in the crypto and blockchain space.</p>
                    </div>
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={cryptocapital} alt="" className="img-fluid " />
                        </div>
                        <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={kyberventures} alt="" className="img-fluid investor-logo" />
                        </div> <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={ShimaCapital} alt="" className="img-fluid investor-logo" />
                        </div>

                    </div>
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={kyros} alt="" className="img-fluid investor-logo" />
                        </div>
                        <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={astroventures3} alt="" className="img-fluid" />
                        </div> <div className='col-4 col-sm-4 col-md-3 col-lg-3 px-lg-4'>
                            <img src={VectorRealDeallogov31} alt="" className="img-fluid investor-logo" />
                        </div>

                    </div> 
                    <div className="text-center text-capitalize">
                   <strong> and many more notable investors.</strong> 
                    </div>
                </div>
            </div>


        </div>
    )
}
