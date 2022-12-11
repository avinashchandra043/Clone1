import React from "react";
import "./UpperImage.css";
import PaytmSquareLogo from "../assets/ptm.png";
import PaytmBanner from "../assets/banner.webp";
import DownloadButton from "./DownloadButton";

function UpperImage() {
  return (
    <div className="upper_image">
      <div class="left_side_upper_image">
        <div className="PaytmSquareLogo">
          <img src={PaytmSquareLogo} className="SquareLogo" alt="" />
        </div>
        <div className="upper_upper_text">
          <h1>India's Most-loved Payments App</h1>
        </div>
        <div className="upper_lower-text">
          Recharges & pay bills, book flights & movie tickets,open a savings
          account, invest in stocks & mutual funds, and do a lot more.
        </div>
        <div>
          <DownloadButton />
        </div>
      </div>
      <div className="right_side_upper_image">
        <img src={PaytmBanner} className="PaytmBanner" alt="" />
      </div>
    </div>
  );
}
export default UpperImage;
