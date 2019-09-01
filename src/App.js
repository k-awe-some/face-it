import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Navbar from "./components/nav-bar/nav-bar.component";
import LinkForm from "./components/link-form/link-form.component";
import Rank from "./components/rank/rank.component";

function App() {
  return (
    <div className="App">
      <Particles className="App__particles" params={particlesConfig} />
      <Navbar />
      <Rank />
      <LinkForm />
    </div>
  );
}

export default App;
