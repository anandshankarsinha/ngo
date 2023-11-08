import React from "react";
import "./homeSec1.css";
const HomeSec1 = () => {
  return (
    <div className="homeSec1">
      <div className="home1">
        <h1 className="home1-heading">
          Inclusive care for children with special needs
        </h1>
        <button className="home1-btn">What we do</button>



        <div className="home1-footer">
            <p>230 children under our care</p>
            <div className="home1-hr">
                <hr />
            </div>
            <p>58 donations collected</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSec1;
