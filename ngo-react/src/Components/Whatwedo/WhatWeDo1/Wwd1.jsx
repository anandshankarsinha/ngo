import React from "react";
import "./wwd1.css";
import wwd1 from "../../../assets/wwd1.png";
const Wwd1 = () => {
  return (
    <div className="wwd1">
      <div className="wwd1-left">
        <p className="wwd1-p1">------- What We Do </p>
        <h2 className="wwd1-h">We are working cross the country</h2>
        <p className="wwd1-p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="wwd1-right">
        <img src={wwd1} alt="" />
      </div>
    </div>
  );
};

export default Wwd1;
