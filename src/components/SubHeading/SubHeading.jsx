import React from "react";
import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} className="spoon_img" alt="spoon" />
  </div>
);

export default SubHeading;
