import React, { useState } from "react";

import LinkForm from "../link-form/link-form.component";
import FaceDetection from "../face-detection/face-detection.component";

import { faceIt } from "../../utils/clarifai-api";

const AppPage = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [faceBoxes, setFaceBoxes] = useState([]);

  const onInputChange = event => {
    setInput(event.target.value);
  };

  const onButtonSubmit = event => {
    event.preventDefault();
    setImageUrl(input);
    faceIt(input, displayFaceBox);
  };

  const displayFaceBox = faceBoxes => {
    setFaceBoxes(faceBoxes);
  };

  return (
    <React.Fragment>
      <LinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit} />
      <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} />
    </React.Fragment>
  );
};

export default AppPage;
