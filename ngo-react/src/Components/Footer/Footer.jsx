import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <h1>
          largerthan<i>i</i>
        </h1>
      </div>
      <div className="footer2">
        <h5 className="bold">Home</h5>
        <li>About us</li>
        <li>Team</li>
        <li>What we do</li>
        <li>Connect</li>
      </div>
      <div className="footer3">
        <h5 className="bold">More</h5>
        <li>Project</li>
        <li>Events</li>
        <li>Donate</li>
        <li>Blog</li>
      </div>
      <div className="footer4">
        <h5 className="bold">Connect</h5>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Linkedin</li>
      </div>
      <div className="footer5">
        <h2>Subscribe to get latest updates.</h2>
        <div className="footer5-1">
          <input type="text" name="" placeholder="Your email" id="" />
          <button className="footer-btn">Subscribe</button>
        </div>

        <div className="anand">
          <a href="https://linkedin.com/in/anand-shankar-dev">
            {" "}
            Developed By Anand Shankar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
