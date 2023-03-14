import React from "react";

import "./Footer.css";

import { Newsletter } from "../../components";

import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding app__bg">
    <Newsletter />
    <div className="app__footer-content">
      <div className="app__footer-info">
        <p className="menu__heading" id="contact">
          Contact US
        </p>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-344-1230 +1 212-555-1230</p>
      </div>

      <div className="app__footer-info-center">
        <h1 className="headtext__cormorant">Gerícht</h1>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="" />
        <div className="app__footer-icons">
          <FiFacebook className="app__footer-icon" />
          <FiInstagram className="app__footer-icon" />
          <FiTwitter className="app__footer-icon" />
        </div>
      </div>

      <div className="app__footer-info">
        <p className="menu__heading">Working Hours</p>
        <p className="p__opensans">
          Monday-Friday:
          <br />
          08:00 am -12:00 am
        </p>
        <p className="p__opensans">
          Saturday-Sunday:
          <br />
          07:00am -11:00 pm
        </p>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
