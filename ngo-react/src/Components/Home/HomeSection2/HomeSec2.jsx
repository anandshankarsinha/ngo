import React from "react";
import home2img from "../../../assets/home2img.png";
import "./homeSec2.css";
import home2logo1 from "../../../assets/home2logo1.svg";
import home2logo2 from "../../../assets/home2logo2.svg";
import home2logo3 from "../../../assets/home2logo3.svg";
import home2logo4 from "../../../assets/home2logo4.svg";
import home2logo5 from "../../../assets/home2logo5.svg";
import home2logo6 from "../../../assets/home2logo6.svg";
const HomeSec2 = () => {
  return (
    <div className="homeSec2">
      <div className="home2">
        <div className="home2-left">
          <p home2-left-p1>--------- KNOW ABOUT US</p>
          <h3>We provide a place for children with special needs</h3>
          <p className="p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="p2">
            ‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
            posuere.
          </p>
          <button className="home2-btn">Learn more</button>
        </div>
        <div className="home2-right">
          <img src={home2img} alt="" />
        </div>
      </div>
      <div className="home2-footer">
        <div className="home2-support">
          <p>Our Supporters</p>
          <div className="home2-hr">
            <hr />
          </div>
        </div>
        <div className="home2-logos">
          <img src={home2logo1} alt="" />
          <img src={home2logo2} alt="" />
          <img src={home2logo3} alt="" />
          <img src={home2logo4} alt="" />
          <img src={home2logo5} alt="" />
          <img src={home2logo6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeSec2;
