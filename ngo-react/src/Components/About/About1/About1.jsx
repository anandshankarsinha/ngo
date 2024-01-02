import React from "react";
import "./about1.css";
import aboutBG from "../../../assets/aboutBG.png";
import home2logo1 from "../../../assets/home2logo1.svg";
import home2logo2 from "../../../assets/home2logo2.svg";
import home2logo3 from "../../../assets/home2logo3.svg";
import home2logo4 from "../../../assets/home2logo4.svg";
import home2logo5 from "../../../assets/home2logo5.svg";
import home2logo6 from "../../../assets/home2logo6.svg";
const About1 = () => {
  return (
    <div className="about-1">
      <div className="about-top">
        <div className="about1-top-left">
          <p className="about1-p1">-------KNOW ABOUT US</p>
          <h2 className="about1-h1">
            We are a <br /> non-governmental organization
          </h2>
        </div>
        <div className="about-bg">
          <img src={aboutBG} alt="" />
        </div>
        <div className="about1-top-right">
          <h6 className="about1-h2">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere.
          </h6>
          <p className="about1-p2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim elementum tristique.
          </p>
        </div>
      </div>
      <div className="about-bottom-home">
        <div className="about-bottom">
          <div className="about-bottom-row">
            <div className="about-bottom-row-l">
              <h6 className="about1-h3">OUR MISSION</h6>
              <h6 className="about1-h4">
                We make sure to provide inclusive care for children with special
                needs
              </h6>
              <p className="about1-p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="about-bottom-row-r">
              <h6 className="about1-h3">OUR VISION</h6>
              <h6 className="about1-h4">
                Provide more inclusive care to children around the world
              </h6>
              <p className="about1-p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.{" "}
              </p>
            </div>
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

    </div>
  );
};

export default About1;
