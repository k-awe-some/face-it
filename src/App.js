import React from "react";
// import logo from "./logo.svg";
import faceIt from "./utils/clarifai-api";
import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Navbar from "./components/nav-bar/nav-bar.component";
import LinkForm from "./components/link-form/link-form.component";
import Rank from "./components/rank/rank.component";

class App extends React.Component {
  state = {
    input: ""
  };

  onButtonSubmit = event => {
    event.preventDefault();
    console.log("submitted!");
    faceIt();
  };

  onInputChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <Particles className="App__particles" params={particlesConfig} />
        <Navbar />
        <Rank />
        <LinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
