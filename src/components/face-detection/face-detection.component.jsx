import React from "react";

import "./face-detection.styles.scss";

const FaceDetection = ({ imageUrl, faceBox }) => (
  <div className="face-detection z-index-1">
    <img
      className="face-detection__image"
      id="inputImage"
      src={imageUrl}
      alt="Face(s) detected"
    />
    <div
      className="face-detection__face-box"
      style={{
        left: faceBox.leftCol,
        top: faceBox.topRow,
        right: faceBox.rightCol,
        bottom: faceBox.bottomRow
      }}
    ></div>
  </div>
);

export default FaceDetection;
