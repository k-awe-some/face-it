import React from "react";

import InputField from "../input-field/input-field.component";
import "./sign-in.styles.scss";

const SignIn = () => (
  <div className="sign-in">
    <h1>{"I already have an account."}</h1>
    <form>
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
    </form>
  </div>
);

export default SignIn;
