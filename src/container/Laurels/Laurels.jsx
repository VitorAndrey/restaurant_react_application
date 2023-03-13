import React from "react";
import { SubHeading, Medal } from "../../components";

import { images } from "../../constants";

import "./Laurels.css";

const Laurels = () => (
  <div className="app__laurel">
    <div className="app__laurel-info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurel-info_container">
        <Medal
          img={images.award02}
          title="Bib Gourmond"
          text="Lorem ipsum dolor sit amet, consectetur."
        />
        <Medal
          img={images.award01}
          title="Rising Star"
          text="Lorem ipsum dolor sit amet, consectetur."
        />
        <Medal
          img={images.award05}
          title="AA Hospitality "
          text="Lorem ipsum dolor sit amet, consectetur."
        />
        <Medal
          img={images.award03}
          title="Outstanding Chef"
          text="Lorem ipsum dolor sit amet, consectetur."
        />
      </div>
    </div>
    <div className="app__laurel-image">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
