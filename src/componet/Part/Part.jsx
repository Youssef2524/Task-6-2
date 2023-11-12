import React from 'react'
import './Part.css'
const Part = ({ tit3, desc3, imgss }) => {
    return (
        
       
           <div className="Partt">
            <div className="imd">
            <img src={imgss} alt="" />
            </div>
                

                <div className="title2">
                    <h2>{tit3}</h2>
                    <p>{desc3}</p>

                </div>
            </div>
          
        
    )
}

export default Part