import React from "react";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import "./homepage.styles.scss";

const Homepage = () => (
  <div className="homepage z-index-1">
    <SignIn />
    <SignUp />
  </div>
);

export default Homepage;
