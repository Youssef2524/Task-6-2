import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">

            <p className="text-center text-white ">SUBSCRIBE NOW</p>
            <h1 className="text-center text-white mt-3">GET OUR UPDATES ALWAYS FAST</h1>
            <p className="text-center text-white mt-3">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
            <div className="for">
                <div className="search">
                    <input placeholder="Enter your email id" className="text-center" type="text" />
                    <button type="submit" className="text-center"></button>
                </div>

            </div>
            <div className="end-form">
                <p className="hover text-white">SEARCH</p>
                <span></span>
                <p className="hover text-white">HELP</p>
                <span></span>
                <p className="hover text-white">INFORMATION</p>
                <span></span>
                <p className="hover text-white">PRIVACY POLICY</p>
                <span></span>
                <p className="hover text-white"> SHIPPING DETAILS</p>
            </div>


        </div>
    )
}

export default Footer