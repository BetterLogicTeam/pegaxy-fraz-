import React from 'react'
import './Game_Play_style.css'
import gameplay from '../../assets/gameplay.png'

export default function Game_Play() {
    return (
        <div>

            <div className="container main">
                <div className="main_div_game_play">
                    <div className="back_img">
                        {/* <img src={gameplaybg} alt="" /> */}
                    </div>
                    <div className="row  ">
                        <div className='col-md-6 py-5 px-5'>
                            <h1>Game_Play</h1>
                            <p className='mb-5'>Pegaxy has a very unique ecosystem that allows players to enter any race, for free. With this economic model, gameplay is very competitive, however the rewards are still lucrative. Players compete against 14 other racers in an attempt to earn a top 3 placement. All players inside the top 3 earn VIS tokens, the platforms utility token. Knowledge, strategy and skill are all required to place in the top 3. Be prepared to race, dedicate time and be one with your Pega, the rewards will make it all worthwhile.</p>
                        </div>
                        <div className='col-md-6 '>
                        <div className=' gameplayimage ' >
                            <img src={gameplay} className="imghw float-lg-end" />
                        </div></div>
                    </div>

                </div>



            </div>


        </div>
    )
}
