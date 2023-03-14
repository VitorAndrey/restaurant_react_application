import React, { useState } from "react";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const [plaVideo, setPlaVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlaVideo((prevPlayVideo) => !prevPlayVideo);
    if (plaVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef} />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center unselectable" onClick={handleVideo}>
          {plaVideo ? <BsPauseFill className="icon" /> : <BsFillPlayFill className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
