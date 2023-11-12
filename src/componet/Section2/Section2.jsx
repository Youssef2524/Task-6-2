import React from 'react'
import img14 from "../Image/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.webp"
import './Section2.css'
import Part from '../Part/Part'
import imag7 from '../Image/ic7.webp'
import imag8 from '../Image/ic8.png'
import imag10 from '../Image/ic10.webp'
import imag11 from '../Image/ic11.webp'
const Section2 = ({ tit2, desc2 }) => {
    return (
        <div className='Sction2'>
            <div className="title2 ">
                <h2>{tit2}</h2>
                <p>{desc2}</p>
            </div>
            <div className="img2">
                <img src={img14} alt="" />
                <p className="ss">
                <div className="loader-pulse"></div>
                </p>
                <p className="ss1">
                <div className="loader-pulse1"></div>
                </p>
                <p className="ss2">
                <div className="loader-pulse2"></div>
                </p>
                <p className="ss3">
                <div className="loader-pulse3"></div>
                </p>
            </div>
            <div className="">
                <div className="item">
                    <Part imgss={imag7} tit3={"SCORPION PROCESSOR"} desc3={"Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."} />
                    <Part imgss={imag8} tit3={"DUAL SIM CARDS"} desc3={"Tristique senectus et netus et malesuada fames ac turpis."} />
                    <Part imgss={imag10} tit3={"48 MP CAMERA"} desc3={"Donec ultrices tincidunt arcu non sodales neque sodales ut."} />
                    <Part imgss={imag11} tit3={"48 HRS BACKUP"} desc3={"Natoque penatibus et magnis dis parturient montes nascetur."} />
                </div>
            </div>

        </div>
    )
}

export default Section2