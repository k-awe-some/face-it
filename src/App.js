import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import { auth, createUserDocument } from "./firebase/firebase";

// import logo from "./logo.svg";

import "./App.scss";
import Particles from "react-particles-js";
import particlesConfig from "./utils/particles-config";

import Homepage from "./components/homepage/homepage.component";
import AppPage from "./components/app-page/app-page.component";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      this.setState({ ...this.state, currentUser: user });
      createUserDocument(user);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        <div className="App">
          <Particles className="App__particles" params={particlesConfig} />
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
              render={() => (currentUser ? <AppPage /> : <Redirect to="/" />)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
