import React from "react";

import InputField from "../input-field/input-field.component";
import "./sign-up.styles.scss";

const SignUp = () => (
  <div className="sign-up">
    <h1>{"I'd like to be signed up."}</h1>
    <form>
      <InputField type="text" placeholder="Display name" />
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <InputField type="password" placeholder="Confirm password" />
    </form>
  </div>
);

export default SignUp;
