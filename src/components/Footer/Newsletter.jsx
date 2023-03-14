import React from "react";

import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
      <div className="newsletter-container ">
        <input type="text" placeholder="Enter your email" className="p__opensans" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  </div>
);

export default Newsletter;
