import React from "react";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

const SignIn = () => (
  <div className="sign-in">
    <h1>{"I already have an account."}</h1>
    <form className="sign-in__form">
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <CustomButton textContent={"sign in"} />
    </form>
  </div>
);

export default SignIn;
