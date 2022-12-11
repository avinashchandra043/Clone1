import React from "react";
import "./Card1.css";
import DownloadButton from "./DownloadButton";
function Card(props) {
  return (
    <div className="card">
      <div className="card_in">
        <div className="card_left">
          <div className="img_logo_card">
            <div>
              <img className="img_logo_card_pic" src={props.logo} alt="" />
            </div>
            <div className="logo_text_text">
              <div>{props.main1}</div>
              <div>{props.main2}</div>
            </div>
          </div>
          <div className="card_title">
            <div>{props.title1}</div>
            <div>{props.title2}</div>
            <div>{props.title3}</div>
          </div>
          <div className="card_content">{props.content}</div>
          <div className="DonwloadButton_position">
            {props.check ? (
              <DownloadButton />
            ) : (
              <button className="learn_more">Learn More</button>
            )}
          </div>
        </div>
        <div className="card_right">
          <div>
            <img className="cards_banner" src={props.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
