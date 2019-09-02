import React from "react";
// import logo from "./logo.svg";
import { faceIt } from "./utils/clarifai-api";
import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Navbar from "./components/nav-bar/nav-bar.component";
import Homepage from "./components/homepage/homepage.component";
import Rank from "./components/rank/rank.component";
import LinkForm from "./components/link-form/link-form.component";
import FaceDetection from "./components/face-detection/face-detection.component";

class App extends React.Component {
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
    // must be 'input' and not 'imageUrl'
    // because at this point this.setState() hasn't done updating
  };

  displayFaceBox = faceBoxes => {
    this.setState({ faceBoxes });
    console.log(this.state.faceBoxes);
  };

  render() {
    const { imageUrl, faceBoxes } = this.state;
    return (
      <div className="App">
        <Particles className="App__particles" params={particlesConfig} />
        <Homepage />

        {/* <Navbar />

          <LinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
        <Rank />

        <FaceDetection imageUrl={imageUrl} faceBoxes={faceBoxes} /> */}
      </div>
    );
  }
}

export default App;
