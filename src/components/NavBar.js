import React from "react";
import "./NavBar.css";
import PaytmLogo from "../assets/paytm_logo.png";

function navBar() {
  function myFunc() {
    document.getElementById("lc").classList.toggle("change");
    document.getElementById("mySidbar").classList.toggle("nav_menu_m");
    const lb = document.getElementById("logButton").style.visibility;
    if (lb === "hidden") {
      document.getElementById("logButton").style.visibility = "visible";
    } else {
      document.getElementById("logButton").style.visibility = "hidden";
    }
  }
  return (
    <div className="navBar">
      <div className="imgDiv">
        <div className="line_container" id="lc" onClick={myFunc}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="nav_menu_m1" id="mySidbar">
            <ul>
              <li>
                <a href="#">Investor&nbsp;Relations</a>
              </li>
              <li>
                {" "}
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
        <img src={PaytmLogo} className="paytmLogo" alt="" />
      </div>

      <div className="upperNav">
        <ul>
          <li>
            <a href="#">Paytm for Consumer</a>
            <div className="sub_menu_1">
              <ul>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Ticket Booking</a>
                </li>
                <li>
                  <a href="#">Financial Services</a>
                </li>
                <li className="hidden">
                  <a href="#">display none</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Paytm for Business</a>
            <div className="sub_menu_1">
              <ul>
                <li>
                  <a href="#">Consumer Payments</a>
                </li>
                <li>
                  <a href="#">Buiseness Payments</a>
                </li>
                <li>
                  <a href="#">Buiseness Software</a>
                </li>
                <li>
                  <a href="#">Financial Service</a>
                </li>
                <li>
                  <a href="#">Developer</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Investor relations</a>
          </li>
          <li>
            <a href="#">Company</a>
            <div className="sub_menu_1">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">CSR</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>

      <div className="logDiv">
        <button className="loginButton">Sign In </button>
      </div>
      <div className="logDiv-m">
        <button className="loginButton" id="logButton">
          Log In
        </button>
      </div>
    </div>
  );
}

export default navBar;
