import React from "react";

import "./face-detection.styles.scss";

const FaceDetection = ({ imageUrl, faceBoxes }) => (
  <div className="face-detection">
    {imageUrl && (
      <React.Fragment>
        <img
          className="face-detection__image"
          id="inputImage"
          src={imageUrl}
          alt="Face(s) detected"
        />
        {faceBoxes.map((box, index) => (
          <div
            className="face-detection__face-box"
            key={index}
            style={{
              left: box.leftCol,
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow
            }}
          />
        ))}
      </React.Fragment>
    )}
  </div>
);

export default FaceDetection;
