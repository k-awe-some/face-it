import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { auth } from "./firebase/firebase";

// import logo from "./logo.svg";
import { faceIt } from "./utils/clarifai-api";
import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Navbar from "./components/nav-bar/nav-bar.component";
import Homepage from "./components/homepage/homepage.component";
import AppPage from "./components/app-page/app-page.component";

class App extends React.Component {
  state = {
    currentUser: null,
    input: "",
    imageUrl: "",
    faceBoxes: []
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ ...this.state, currentUser: user });
      console.log(this.state);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

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
    const { currentUser, imageUrl, faceBoxes } = this.state;
    return (
      <Router>
        <div className="App">
          <Particles className="App__particles" params={particlesConfig} />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                currentUser ? <Redirect to="/app" /> : <Homepage />
              }
            />
            <Route
              exact
              path="/app"
              render={() =>
                currentUser ? (
                  <AppPage
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                    imageUrl={imageUrl}
                    faceBoxes={faceBoxes}
                  />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
