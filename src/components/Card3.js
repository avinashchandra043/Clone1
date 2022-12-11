import React from "react";
import "./Card3.css";

function Card3(props) {
  return (
    <div className="card">
      {props.check ? (
        <div className="card_in3">
          <div className="card_left">
            <div className="main_head_c3">{props.h1}</div>
            <div className="img_logo_card">
              <div>
                <img className="img_logo_card_pic" src={props.logo} />
              </div>
            </div>
            <div className="card_title3">
              <div>{props.h2}</div>
            </div>
            <div className="card_content3">{props.title}</div>
            <div className="DonwloadButton_position">
              <button className="learn_more3">Learn More</button>
            </div>
          </div>
          <div className="card_right">
            <div>
              <img className="cards_banner3" src={props.banner} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div className="card_in3_out">
          <div className="card_left">
            <div className="main_head_c3">{props.h1}</div>
            <div className="img_logo_card">
              <div>
                <img className="img_logo_card_pic" src={props.logo} />
              </div>
            </div>
            <div className="card_title3">
              <div>{props.h2}</div>
            </div>
            <div className="card_content3">{props.title}</div>
            <div className="DonwloadButton_position">
              <button className="learn_more3">Learn More</button>
            </div>
          </div>
          <div className="card_right">
            <div>
              <img className="cards_banner3" src={props.banner} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card3;
