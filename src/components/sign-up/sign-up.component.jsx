import React from "react";

import InputField from "../input-field/input-field.component";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => (
  <div className="sign-up">
    <h1>{"I'd like to be signed up."}</h1>
    <form className="sign-up__form">
      <InputField type="text" placeholder="Display name" />
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm password" />
      <CustomButton textContent={"sign up"} />{" "}
    </form>
  </div>
);

export default SignUp;
