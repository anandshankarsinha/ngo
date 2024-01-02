import React from "react";
import "./about4.css";
import t1 from "../../../assets/t1.png";
import t2 from "../../../assets/t2.png";
import t3 from "../../../assets/t3.png";
import t4 from "../../../assets/t4.png";
import t5 from "../../../assets/t5.png";
import t6 from "../../../assets/t6.png";
import t7 from "../../../assets/t7.png";
import t8 from "../../../assets/t8.png";
import fb from "../../../assets/fb.svg";
import x from "../../../assets/x.svg";
import Lin from "../../../assets/in.svg";

const About4 = () => {
  return (
    <div className="about4">
      <div className="about4-head">
        <h2>Meet our team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
      </div>

      <div className="about4-team">
        <div className="about4-team-row1">
          <div className="team">
            <img src={t1} alt="NA" />
            <h5>Leonard John Davies</h5>
            <p>Cofounder, CEO</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t2} alt="NA" />
            <h5>Francis Weber</h5>
            <p>Vice Chairman</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t3} alt="NA" />
            <h5>Kyla Obrien</h5>
            <p>head of Authority</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t4} alt="NA" />
            <h5>Adrian Dixon</h5>
            <p>Support Executive</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
        </div>
        <div className="about4-team-row1">
          <div className="team">
            <img src={t5} alt="NA" />
            <h5>freddy Busby</h5>
            <p>Project Manager</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t6} alt="NA" />
            <h5>Dale Banks</h5>
            <p>Accountant, Finance</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t7} alt="NA" />
            <h5>Miriam Middleton</h5>
            <p>Cofounder, CEO</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
          <div className="team">
            <img src={t8} alt="NA" />
            <h5>Ellen Walton</h5>
            <p>Vice Chairman</p>
            <div className="">
              <img src={fb} alt="fb" />
              <img src={x} alt="x" />
              <img src={Lin} alt="in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
