import React from 'react'
import './Card.css'
const Card = ({ img, Title, des }) => {
    return (
        <div className='ico'>
            <div className="ico2">
            <img src={img} alt="" />
            <h3>{Title}</h3>
            <p>{des}</p>
            </div>
        </div>
        
    )
}

export default Card