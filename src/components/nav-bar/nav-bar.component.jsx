import React from "react";

import { auth } from "../../firebase/firebase";
import logo from "../../logo.png";
import "./nav-bar.styles.scss";

const NavBar = ({ currentUser }) => (
  <div className="navbar">
    <img
      className="navbar__item z-index-1"
      src={logo}
      alt="Face It! logo"
      width={120}
      height={120}
    />
    <div className="navbar__item z-index-1" onClick={() => auth.signOut()}>
      {currentUser ? <span>Sign out</span> : null}
    </div>
  </div>
);

export default NavBar;
