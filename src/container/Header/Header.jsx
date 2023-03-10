import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";

import "./Header.css";

const Header = () => {
  return (
    <div className="app__header max-width section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="headtext__cormorant">The Key to Fine Dinning</h1>
        <p className="p__opensans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque
          sapien. Et, penatibus aliquam amet tellus{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper-img">
        <img src={images.welcome} alt="chiken" />
      </div>
    </div>
  );
};

export default Header;
