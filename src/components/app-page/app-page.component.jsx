import React from "react";

import LinkForm from "../link-form/link-form.component";
import FaceDetection from "../face-detection/face-detection.component";

import { faceIt } from "../../utils/clarifai-api";

class AppPage extends React.Component {
  state = {
    input: "",
    imageUrl: "",
    faceBoxes: []
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = event => {
    event.preventDefault();
    this.setState({ imageUrl: this.state.input });
    faceIt(this.state.input, this.displayFaceBox);
  };

  displayFaceBox = faceBoxes => {
    this.setState({ faceBoxes });
    console.log(this.state.faceBoxes);
  };

  render() {
    const { imageUrl, faceBoxes } = this.state;
    return (
      <React.Fragment>
        <LinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} />
      </React.Fragment>
    );
  }
}

export default AppPage;
