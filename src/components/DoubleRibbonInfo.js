import React from "react";
import RightArrow from "../assets/right-chevron.png";
import "./DoubleRibbonInfo.css";
function DoubleRibbonInfo(props) {
  return (
    <div className="hover_doubleRibbon">
      <div>
        <img className="hover_doubleRibbon_image" src={props.img} alt="" />
      </div>
      <div className="hover_doubleRibbon_text">
        <div>{props.text1}</div>
        <div>{props.text2}</div>
        <div>
          {props.text3}
          <img className="RightArrow" src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DoubleRibbonInfo;
