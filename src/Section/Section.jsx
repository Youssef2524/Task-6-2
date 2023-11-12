import Card from "./Card/Card"
import img11 from "../componet/Image/ic11.webp"
import img12 from "../componet/Image/ic12.webp"
import img13 from "../componet/Image/ic13.avif"

import './Section.css'
const Section = ({ tit, desc }) => {
  return (
    <div className="proj">
      <div className="Section1">
        <div className="Title">
          <h2>{tit}</h2>
          <p>{desc}</p>
        </div>
        <div className="part">
          <Card img={img11} Title={"PRETTYINTELLIGENT PROCESSING"} des={"Consequat ac habit amet asse felis donec et odio pellentesque diam."} />
          <Card img={img12} Title={"MOST POPULAR8GB DDR5 RAM"} des={"Dictum varius duis at consectetur lorem donec massa sap faucibus."} />
          <Card img={img13} Title={"POSSIBILITIES PERFORMANCE POWER."} des={"FASTER PROCESSING WITH LESS POWER"} />

        </div>

      </div>
  
    </div>
   
  )
}

export default Section