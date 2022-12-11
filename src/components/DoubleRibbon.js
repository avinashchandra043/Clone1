import React from "react";
import "./DoubleRibbon.css";
import DoubleRibbonInfo from "./DoubleRibbonInfo";
import Hero1 from "../assets/hero_1.png";
import Hero2 from "../assets/hero_2.png";
import Hero3 from "../assets/hero_3.png";
import Hero4 from "../assets/hero_4.png";
import Hero5 from "../assets/hero_5.png";
import Hero6 from "../assets/hero_6.png";
import Hero7 from "../assets/hero_7.png";

import Hero8 from "../assets/hero_8.png";
import Hero9 from "../assets/hero_9.png";
import Hero10 from "../assets/hero_10.png";
import Hero11 from "../assets/hero_11.png";
import Hero12 from "../assets/hero_12.png";
import Hero13 from "../assets/hero_13.png";
import Hero14 from "../assets/hero_14.webp";

function DoubleRibbon() {
  return (
    <div className="ribbons_hold">
      <div className="upper_ribbon">
        <div className="ribbon_text">Recharge & Pay Bills on Paytm.</div>
        <div className="ribbon_images">
          <DoubleRibbonInfo
            img={Hero1}
            text1="Recharge"
            text2="Prepaid"
            text3="Mobile"
          />
          <DoubleRibbonInfo
            img={Hero2}
            text1="Pay"
            text2="Rent"
            text3="Payment"
          />
          <DoubleRibbonInfo
            img={Hero3}
            text1="Pay"
            text2="Electricity"
            text3="Bill"
          />
          <DoubleRibbonInfo
            img={Hero4}
            text1="Recharge"
            text2="DTH"
            text3="Connection"
          />
          <DoubleRibbonInfo
            img={Hero5}
            text1="Book"
            text2="Gas"
            text3="Cylinder"
          />
          <DoubleRibbonInfo
            img={Hero6}
            text1="Pay"
            text2="Credit"
            text3="Card Bill"
          />
          <DoubleRibbonInfo
            img={Hero7}
            text1="All"
            text2="Payment"
            text3="Services"
          />
        </div>
      </div>
      <div className="lower_ribbon">
        <div className="ribbon_text">Book & Buy on Paytm.</div>
        <div className="ribbon_images">
          <DoubleRibbonInfo
            img={Hero8}
            text1="Movie"
            text2=""
            text3="Tickets"
          />
          <DoubleRibbonInfo
            img={Hero9}
            text1="Flight"
            text2=""
            text3="Tickets"
          />
          <DoubleRibbonInfo img={Hero10} text1="Bus" text2="" text3="Tickets" />
          <DoubleRibbonInfo
            img={Hero11}
            text1="Train"
            text2=""
            text3="Tickets"
          />
          <DoubleRibbonInfo
            img={Hero12}
            text1="Buy"
            text2=""
            text3="Insurance"
          />
          <DoubleRibbonInfo
            img={Hero13}
            text1="International"
            text2=""
            text3="Flights"
          />
          <DoubleRibbonInfo
            img={Hero14}
            text1="Invest"
            text2=""
            text3="in Stocks"
          />
        </div>
      </div>
    </div>
  );
}

export default DoubleRibbon;
