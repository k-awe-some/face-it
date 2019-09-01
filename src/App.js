import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import Navbar from "./components/nav-bar/nav-bar.component";
import LinkForm from "./components/link-form/link-form.component";
import Rank from "./components/rank/rank.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Rank />
      <LinkForm />
    </div>
  );
}

export default App;
