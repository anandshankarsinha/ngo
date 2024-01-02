import React from "react";
import "./about3.css";
import about3 from "../../../assets/about3.png";
const About3 = () => {
  return (
    <div className="about3">
      <div className="about3-left">
        <p className="about3-p1">OUR JOURNEY</p>
        <h3 className="about3-h1">How we raised 34M</h3>
        <p className="about3-p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          Aenean faucibus nibh.
        </p>
        <div className="about3-stats">
          <div className="">
            <h5>34M+</h5>
            <p>Donation Recieved</p>
          </div>
          <div className="">
            <h5>400+</h5>
            <p>Volunteers</p>
          </div>
          <div className="">
            <h5>20+</h5>
            <p>Care Homes</p>
          </div>
        </div>
      </div>
      <div className="about3-right">
        <img src={about3} alt="" />
      </div>
    </div>
  );
};

export default About3;
