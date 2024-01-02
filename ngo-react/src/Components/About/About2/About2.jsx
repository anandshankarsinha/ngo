import React from "react";
import "./about2.css";
import award1 from "../../../assets/award1.svg";
import award2 from "../../../assets/award2.svg";
import award3 from "../../../assets/award3.svg";

const About2 = () => {
  return (
    <div className="about-sec-2">
      <h2 className="about-award-h">Awards & Recognitions</h2>

      <div className="awards">
        <div className="award-1">
          <img src={award1} alt="" />
          <h5 className="award-h2">2021</h5>
          <h6 className="award-h3">Best NGO Award</h6>
          <p className="award-p1">BERLIN, GERMANY</p>
        </div>
        <div className="award-2">
          <img src={award2} alt="" />
          <h5 className="award-h2">2018</h5>
          <h6 className="award-h3">Global Award</h6>
          <p className="award-p1">NEW YORK, USA</p>
        </div>
        <div className="award-3">
          <img src={award3} alt="" />
          <h5 className="award-h2">2014</h5>
          <h6 className="award-h3">CSN Award</h6>
          <p className="award-p1">NEW DELHI, INDIA</p>
        </div>
        <div className="award-4">
          <img src={award3} alt="" />
          <h5 className="award-h2">2010</h5>
          <h6 className="award-h3">NGO of the year Award</h6>
          <p className="award-p1">VIENNA, AUSTRIA</p>
        </div>
      </div>
    </div>
  );
};
export default About2;
