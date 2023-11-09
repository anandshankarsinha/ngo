import React from "react";
import "./mediaSec1.css";
import media1 from "../../../assets/media1.png";
import media2 from "../../../assets/media2.png";
import media3 from "../../../assets/media3.png";
const MediaSec1 = () => {
  return (
    <div className="mediaSec1">
      <div className="media">

   
      <div className="media-left">
        <p className="media-p1">----- TOP NEWS</p>
        <h2 className="media-h2">
          Our goal is to provide inclusive care for children with special needs.
        </h2>
        <p className="media-p2">
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
          ut sem vitae risus tristique posuere.
        </p>
        <button className="media-btn">Read more</button>
      </div>
      <div className="media-right">
        <div className="media-box">
          <div className="media-box-row">
            <div className="media-box-left">
              <img src={media1} alt="" />
            </div>
            <div className="media-box-right">
              <h5>Austin care day</h5>
              <p className="media-box-p1">15th Nov 2022</p>
              <p className="media-box-p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
          <div className="media-box-row">
            <div className="media-box-left">
              <img src={media2} alt="" />
            </div>
            <div className="media-box-right">
              <h5>Down syndrome outreach</h5>
              <p className="media-box-p1">15th Nov 2022</p>
              <p className="media-box-p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
          <div className="media-box-row">
            <div className="media-box-left">
              <img src={media3} alt="" />
            </div>
            <div className="media-box-right">
              <h5>Caring for children with cerebral parsy</h5>
              <p className="media-box-p1">15th Nov 2022</p>
              <p className="media-box-p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MediaSec1;
