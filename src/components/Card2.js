import React from "react";
import "./Card2.css";
function Card2(props) {
  return (
    <div className="card_2_out">
      <div className="card_2">
        <div>
          <img className="card_2_logo" src={props.logo} alt="" />
        </div>
        <div className="card_2_head">{props.heading}</div>
        <div className="card_2_cont">{props.content}</div>
        <div>
          <img className="card_2_ban" src={props.banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card2;
