import React from "react";

import { auth } from "../../firebase/firebase";
import logo from "../../logo.png";
import "./nav-bar.styles.scss";

const NavBar = ({ currentUser }) => (
  <div className="navbar">
    <div className="navbar__item z-index-1">
      <img src={logo} alt="Face It! logo" width={120} height={120} />
      <p>Face It!</p>
    </div>

    <div className="navbar__item z-index-1" onClick={() => auth.signOut()}>
      {currentUser ? <span>Sign out</span> : null}
    </div>
  </div>
);

export default NavBar;
