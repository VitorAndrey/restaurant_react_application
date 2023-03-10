import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__meniItem-name">
        <p className="p__cormorant" style={{ color: "var(--color-golden)" }}>
          {title}
        </p>
      </div>
      <div className="dash" />
      <div className="app__meniItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuItem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
