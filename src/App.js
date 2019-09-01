import React from "react";
// import logo from "./logo.svg";
import faceIt from "./utils/clarifai-api";
import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Navbar from "./components/nav-bar/nav-bar.component";
import Rank from "./components/rank/rank.component";
import LinkForm from "./components/link-form/link-form.component";
import FaceDetection from "./components/face-detection/face-detection.component";

class App extends React.Component {
  state = {
    input: "",
    imageUrl: ""
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = event => {
    event.preventDefault();
    console.log("submitted!");
    this.setState({ imageUrl: this.state.input });
    faceIt(this.state.input); //
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="App">
        <Particles className="App__particles" params={particlesConfig} />
        <Navbar />
        <Rank />
        <LinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceDetection imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
