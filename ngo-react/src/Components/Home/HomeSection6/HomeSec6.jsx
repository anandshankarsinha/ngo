import React from "react";
import "./homeSec6.css";
import arrowButton from "../../../assets/Arrowbutton.svg"
const HomeSec6 = () => {
  return (
    <div className="homeSec6">
      <div className="homeSec6-1">
        <div className="home6">
          <h2>
            You can contribute to provide a place for children with special
            needs!
          </h2>
          <div className="home6-btn">
            <button className="home6-btn1">Join as a volunteer</button>
            <button className="home6-btn2">Donate</button>
          </div>
        </div>
      </div>

      <div className="homeSec6-2">
        <div className="home6-heading">
            <h2>Our Events</h2>
            <div className="h6-hr">
                <hr />
            </div>
        </div>
        <div className="home6-box">
            <div className="home6-box-div">
                <div className="h6b1">
                    <h5>13</h5>
                    <p>APR</p>
                </div>
                <div className="h6b2">
                    <p>NEXT EVENTS -----</p>
                    <h4>A day with our wonderful children</h4>
                </div>
                <div className="h6b3">
                    <img src={arrowButton} alt="" />
                </div>
            </div>
            <div className="home6-box-div">
                <div className="h6b1">
                    <h5>25</h5>
                    <p>APR</p>
                </div>
                <div className="h6b2">
                    <p>NEXT EVENTS -----</p>
                    <h4>Seminar: Caring for children with autism</h4>
                </div>
                <div className="h6b3">
                    <img src={arrowButton} alt="" />
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default HomeSec6;
