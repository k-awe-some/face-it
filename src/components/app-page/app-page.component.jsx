import React from "react";

import NavBar from "../nav-bar/nav-bar.component";
import Rank from "../rank/rank.component";
import LinkForm from "../link-form/link-form.component";
import FaceDetection from "../face-detection/face-detection.component";

const AppPage = ({ onInputChange, onButtonSubmit, imageUrl, faceBoxes }) => (
  <React.Fragment>
    <NavBar />
    <Rank />
    <LinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
    <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} />
  </React.Fragment>
);

export default AppPage;
