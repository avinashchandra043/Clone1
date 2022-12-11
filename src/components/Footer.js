import React from "react";
import "./Footer.css";
import AppStore from "../assets/appstore.svg";
import PlayStore from "../assets/playstore.svg";
function Footer() {
  return (
    <div className="footer_body">
      <div className="footer_u_body">
        <div className="footer_left">
          <div className="footer_content">
            <div>Download Paytm App</div>
            <div>to Pay from anywhere</div>
          </div>
          <div>
            <img src={AppStore} alt="" />
          </div>
          <div>
            <img src={PlayStore} alt="" />
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_svg ch">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </div>
          <div className="footer_svg">
            <svg
              fill="transparent"
              stroke="gray"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </div>
          <div className="footer_svg ch">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="me">© 2022 Paytm — Developed by Avinash with ❤️</div>
    </div>
  );
}

export default Footer;
