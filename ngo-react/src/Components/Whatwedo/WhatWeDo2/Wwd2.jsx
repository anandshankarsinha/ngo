import React from "react";
import "./wwd2.css";
import wwd21 from "../../../assets/wwd21.svg"
import wwd22 from "../../../assets/wwd22.svg"
import wwd23 from "../../../assets/wwd23.svg"
import wwd24 from "../../../assets/wwd24.svg"
import wwd25 from "../../../assets/wwd25.svg"
import wwd26 from "../../../assets/wwd26.svg"
const Wwd2 = () => {
  return (
    <div className="wwd2-home">
      <div className="wwd2">
        <h2 className="wwd2-h">What we do for our kids with special needs</h2>
        <div className="wwd2-options">
          <div className="wwd2-row1">
            <div className="wwd2-img">
                <img src={wwd21} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Family Support</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="wwd2-img">
            <img src={wwd22} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Health Benefits</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="wwd2-img">
            <img src={wwd23} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Education</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="wwd2-row1">
            <div className="wwd2-img">
            <img src={wwd24} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Basic ameneties</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="wwd2-img">
            <img src={wwd25} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Therapy</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="wwd2-img">
            <img src={wwd26} alt="" />
            </div>
            <div className="wwd2-text">
              <h4 className="wwd2-h4">Public Outreach</h4>
              <p className="wwd2-p1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wwd2;
