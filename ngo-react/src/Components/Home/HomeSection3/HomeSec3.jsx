import React from "react";
import "./homeSec3.css";
import home3img from "../../../assets/home3img.png";
import h3Icon1 from "../../../assets/h3Icon1.svg";
import h3Icon2 from "../../../assets/h3Icon2.svg";
import h3Icon3 from "../../../assets/h3Icon3.svg";
import h3Icon4 from "../../../assets/h3Icon4.svg";
const HomeSec3 = () => {
  return (
    <div className="homeSec3">
      <div className="home3">
        <div className="home3-left">
          <p className="h3left-p1">-------WHAT WE DO</p>
          <h3>Some services we provide for our children</h3>
          <p className="h3left-p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="home3-list">
            <hr />
            <div className="h3-icon-list">
              <div className="h3-in">
                <img src={h3Icon1} alt="" />
                <div className="div-in">
                  <h4>Family support</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspe Lorem.
                  </p>
                </div>
              </div>
              <div className="h3-in">
                <img src={h3Icon2} alt="" />
                <div className="div-in">
                  <h4>Health benefits</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspe.
                  </p>
                </div>
              </div>
              <div className="h3-in">
                <img src={h3Icon3} alt="" />
                <div className="div-in">
                  <h4>Scholarships</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspe Lorem ipsum.
                  </p>
                </div>
              </div>
              <div className="h3-in">
                <img src={h3Icon4} alt="" />
                <div className="div-in">
                  <h4>Therapy</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="home3-right">
          <img src={home3img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec3;
