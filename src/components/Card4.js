import React from "react";
import "./Card4.css";
import W41 from "../assets/c1.webp";
import W42 from "../assets/c2.webp";
import W43 from "../assets/c3.webp";
import W44 from "../assets/c4.webp";
function Card4() {
  return (
    <div>
      <div className="c4-head">Business Tools to help your business grow</div>
      <div className="c4-in">
        <div className="c4-div">
          <div>
            <img src={W41} className="c4-div-img" alt="" />
          </div>
          <div className="c4-div-head">POS Billing Software</div>
          <div className="c4-div-cont">
            Say Hello to Smart Retail Business Management
          </div>
          <div className="c4-div-learn">Learn More</div>
        </div>
        <div className="c4-div">
          <div>
            <img src={W42} className="c4-div-img" />
          </div>
          <div className="c4-div-head">Paytm for Business App</div>
          <div className="c4-div-cont">
            Everything you need to manage your business on your phone
          </div>
          <div className="c4-div-learn">Learn More</div>
        </div>
        <div className="c4-div">
          <div>
            <img src={W43} className="c4-div-img" />
          </div>
          <div className="c4-div-head">Advertise on Paytm</div>
          <div className="c4-div-cont">
            Grow your business by advertising on India’s largest mobile business
          </div>
          <div className="c4-div-learn">Learn More</div>
        </div>
        <div className="c4-div">
          <div>
            <img src={W44} className="c4-div-img" />
          </div>
          <div className="c4-div-head">Business Khata</div>
          <div className="c4-div-cont">Managing Khata made easy</div>
          <div className="c4-div-learn">Learn More</div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
