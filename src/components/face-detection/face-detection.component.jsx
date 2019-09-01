import React from "react";

import "./face-detection.styles.scss";

const FaceDetection = ({ imageUrl }) => (
  <div className="face-detection z-index-1">
    <img
      className="face-detection__image"
      src={imageUrl}
      alt="Face(s) detected"
      width="100%"
      height="auto"
    />
  </div>
);

export default FaceDetection;
