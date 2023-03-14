import React from "react";

import "./findus.css";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__findus max-width">
    <div className="app__findus-info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant ">Find Us</h1>
      <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <p className="p__cormorant-yellow">Opening Hours</p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      <button type="button" className="custom__button">
        Visit Us
      </button>
    </div>
    <div className="app__findus-image flex__center">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
