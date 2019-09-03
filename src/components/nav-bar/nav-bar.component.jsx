import React from "react";

import { auth } from "../../firebase/firebase";
// import logo from "../../logo.svg";
import "./nav-bar.styles.scss";

const NavBar = () => (
  <div className="navbar z-index-1">
    <div className="navbar__item" onClick={() => auth.signOut()}>
      Sign out
    </div>
  </div>
);

export default NavBar;
