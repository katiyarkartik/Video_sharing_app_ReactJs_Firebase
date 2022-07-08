import React from "react";
import vid from "./video.mp4";
import "./VideoBg.css";
const VideoBg = () => {
  return (
    <div className="main">
      <video
        src={vid}
        autoPlay
        loop
        muted
        objectFit="cover" width={"100%"} height={"full"}
      />
    </div>
  );
};

export default VideoBg;
