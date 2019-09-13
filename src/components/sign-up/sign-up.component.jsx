import React, { useState } from "react";

import { auth, createUserDocument } from "../../firebase/firebase";

import InputField from "../input-field/input-field.component";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });
  const { displayName, email, password, confirmedPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert("Passwords not matched!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserDocument(user, { displayName });
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-up">
      <h1>{"I'd like to be signed up."}</h1>
      <form className="sign-up__form">
        <InputField
          type="text"
          placeholder="Display name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <InputField
          type="password"
          placeholder="Confirm password"
          name="confirmedPassword"
          value={confirmedPassword}
          onChange={handleChange}
        />
        <CustomButton textContent={"sign up"} onButtonCLick={handleSubmit} />{" "}
      </form>
    </div>
  );
};

export default SignUp;
