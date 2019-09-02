import React from "react";

import Rank from "../rank/rank.component";
import LinkForm from "../link-form/link-form.component";
import FaceDetection from "../face-detection/face-detection.component";

const AppPage = ({ onInputChange, onButtonSubmit, imageUrl, faceBoxes }) => (
  <React.Fragment>
    <Rank />
    <LinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
    <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} />
  </React.Fragment>
);

export default AppPage;
