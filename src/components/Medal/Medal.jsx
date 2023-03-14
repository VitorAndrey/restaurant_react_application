import "./medal.css";

import { images } from "../../constants";

function Medal({ img, title, text }) {
  return (
    <div className="medal__container">
      <img src={img} alt="img" />
      <div className="medal__content">
        <p className="p__cormorant-yellow">{title}</p>
        <p className="p__opensans">{text}</p>
      </div>
    </div>
  );
}

export default Medal;
