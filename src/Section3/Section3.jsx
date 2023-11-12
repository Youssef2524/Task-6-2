import React from 'react'
import PartSec from './PartSec/PartSec'
import image3 from '../componet/Image/ic3.webp'
import image4 from '../componet/Image/ic2.png'
import image5 from '../componet/Image/ic5.png'
import image66 from '../componet/Image/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.webp'
import image55 from '../componet/Image/ic1.webp'
import image54 from '../componet/Image/ic2.png'
import image53 from '../componet/Image/ic4.webp'
import './Section3.css'
const Section3 = ({ Tit3, des3 }) => {
    return (
        <div className='Section3'>

            <div className="titl">
                <h2>{Tit3}</h2>
                <p>{des3}</p>
            </div>

           <div className="boox">
          <div className="boox1">
          <PartSec title2={"INTELLIGENT PROCESSOR"} descr2={"Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"} img22={image3 } />
            <PartSec title2={"HD SURROUND AUDIO"} descr2={"Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am."} img22={image4}/>
            <PartSec title2={"STYLISH BEVEL EDGES"} descr2={"STYLISH BEVEL EDGES"} img22={image5}/>
          </div>
            <div className="boox2">
            <PartSec  img22={image66}/>
            </div>
           <div className="boox3">
           <PartSec title2={"4.0 WIFI SPECS"} descr2={"Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum sed iacus."} img22={image55}/>
            <PartSec title2={"MULIT TASKING & THREADING"} descr2={"Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi"} img22={image54}/>
            <PartSec title2={"CLOUD STORAGE"} descr2={"Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun"} img22={image53}/>
           </div>
           </div>
        </div>
    )
}

export default Section3