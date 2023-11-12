import React from 'react'
import './Home.css'
import  slider1  from '../../../componet/Image/phono-slider-1.webp'
import  slider2  from '../../../componet/Image/phono-slider-2.webp'
import  slider3  from '../../../componet/Image/phono-slider-3.webp'
function Home() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block  pops">
                        <p classNameName='p122'>ZANIA BLACK EDITION</p>
                        <h1 classNameName='h221'>CURVY BEVEL DUAL AUDIO</h1>
                        <button className="button">Shop Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block pop2">
                        <p classNameName='p122'>4K RESOULTION</p>
                        <h1 classNameName='h221'>EXCLUSIVE STEEL FRAME</h1>
                        <button className="button">Shop Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block pop33">
                        <p classNameName='p122'>DELTA ZERTIGA PROCESSOR</p>
                        <h1 classNameName='h221'>FULL SCREEN DISPLAY</h1>
                        <button className="button">Shop Now</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon spann"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon spann"
                    aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Home