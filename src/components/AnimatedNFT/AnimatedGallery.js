import React from 'react'
import Shogun from '../../images/Shogun.gif'
import Sensei from '../../images/Sensei.gif'
import Hani_Kami from '../../images/Hani_Kami.gif'
import Berserker from '../../images/Berserker.gif'

function Card() {
    return (
        <div className='ninja_card'>

            <div className='container'>

                <h1>Animated NFT Series</h1> <br/>

                <div className='row justify-content-center'>
                    <img src={Sensei} width='800px' height='400px' alt='Big_image' />
                </div>

                <div className='row my-3 justify-content-center'>
                    <div className='col-md-2'>
                        <div class="card"  >
                                <img src={Shogun} className='card-img-top'alt="..." />
                                <div class="card-body text-center my-3">
                                    <p class="card-text">Video Title</p>

                                </div>
                        </div>                           
                    </div>
                    <div className='col-md-2'>
                        <div class="card"  >
                                <img src={Sensei} className='card-img-top'alt="..." />
                                <div class="card-body text-center my-3">
                                    <p class="card-text">Video Title</p>

                                </div>
                        </div>                           
                    </div>
                    <div className='col-md-2'>
                        <div class="card"  >
                                <img src={Hani_Kami} className='card-img-top'alt="..." />
                                <div class="card-body text-center my-3">
                                    <p class="card-text">Video Title</p>

                                </div>
                        </div>                           
                    </div>
                    <div className='col-md-2'>
                        <div class="card"  >
                                <img src={Berserker} className='card-img-top'alt="..." />
                                <div class="card-body text-center my-3">
                                    <p class="card-text">Video Title</p>

                                </div>
                        </div>                           
                    </div>
                    <div className='col-md-2'>
                        <div class="card"  >
                                <img src={Shogun} className='card-img-top'alt="..." />
                                <div class="card-body text-center my-3">
                                    <p class="card-text">Video Title</p>

                                </div>
                        </div>                           
                    </div>

                </div>


            </div> { /* ending container */}
        </div> 
    )
}

export default Card
