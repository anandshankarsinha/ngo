import React from "react";
import Pie from "../../../assets/pi.png";
import "./homeSec5.css";
const HomeSec5 = () => {
  return (
    <div className="homeSec5">
      <div className="home5">
        <div className="home5-left">
          <h2>How we spend your donations and where it goes</h2>
          <p className="h5-p1">
            We understand that when you make a  donation, you want to know
            exactly where your money is going and we pledge to be transparent.
          </p>
          <div className="home5-label">
            <div className="home5-label-list">
              <li>
                <div id="h3-lbl-1"></div>
                <p>40% child care home</p>
              </li>
              <li>
                <div id="h3-lbl-2"></div>
                <p>35% cleanliness program</p>
              </li>
              <li>
                <div id="h3-lbl-3"></div>
                <p>10% helping people</p>
              </li>
              <li>
                <div id="h3-lbl-4"></div>
                <p>10% exursions</p>
              </li>
              <li>
                <div id="h3-lbl-5"></div>
                <p>5% feeding the poor</p>
              </li>
            </div>
          </div>
        </div>
        <div className="home5-right">
          <img src={Pie} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec5;
