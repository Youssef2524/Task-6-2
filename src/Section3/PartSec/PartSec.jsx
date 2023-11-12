import React from 'react'
import './PartSec.css'
const PartSec = ({title2,descr2,img22}) => {
  return (
    <div className='PartSec'>
            <div className="box1">
                <div className="card1">
                            <img src={img22} alt="" />
                </div>
                <div className="tit">
                    <h3>{title2}</h3>
                    <p>{descr2}</p>
                </div>
            </div>
         
    </div>
  )
}

export default PartSec