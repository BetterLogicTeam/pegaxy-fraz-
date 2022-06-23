import React from 'react'
import './Footer_style.css'
import pegaxylogo from "../../assets/pegaxy.png"
import { ImFacebook } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImTelegram } from 'react-icons/im';

import { SiDiscord } from 'react-icons/si';
import { SiMedium } from 'react-icons/si';





export default function Footer() {
    return (
        <div className='container'>

            <div className="footer_main_section">
                <div className="">
                    <div className="row">
                        <div className="col-md-4 bg-dark my-3" style={{maxHeight:"70px"}}>
                            <img
                                alt=""
                                src={pegaxylogo}
                                className=" img-fluid"
                                
                            />
                        </div>
                        <div className="col-md-2 my-3">
                            <h3>Quick Links</h3>
                            <p><a href="" className='text-decoration-none link-dark '>White Paper</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>User Support</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>Report a Bug</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>FAQ</a></p>

                            
             
                        </div>
                        <div className="col-md-2 my-3">
                            <h3>Quick Links</h3>
                            <p><a href="" className='text-decoration-none link-dark '>White Paper</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>User Support</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>Report a Bug</a></p>
                            <p><a href="" className='text-decoration-none link-dark'>FAQ</a></p>

                            
             
                        </div>
                        <div className="col-md-4 my-3">
                        <h3>FOLLOW US</h3>
                        <p><a href="" className='text-decoration-none link-danger h5'><span className='me-2' ><SiDiscord/></span>Discord</a></p>
                            <p><a href="" className='text-decoration-none link-danger h5'><span className='me-2' ><ImTwitter/></span> Twitter</a></p>
                            <p><a href="" className='text-decoration-none link-danger h5'> <span className='me-2' ><ImFacebook/></span>Faceebook</a></p>
                            <p><a href="" className='text-decoration-none link-danger h5'> <span className='me-2' ><ImTelegram/></span>Telegram</a></p>
                            <p><a href="" className='text-decoration-none link-danger h5'> <span className='me-2' ><SiMedium/></span>Medium</a></p>


                        </div>
                    </div>
                    <div className="  mt-5 d-flex justify-content-between">
                        <p>All Right Reserved. © Copyright 2022</p>
                        <p className='h4'>Pegaxy Policy</p>

                        </div>               
                     </div>

            </div>
        </div>
    )
}
