import React, { useState } from "react";

import { auth } from "../../firebase/firebase";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserCredentials({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="sign-in">
      <h1>{"I already have an account."}</h1>
      <form className="sign-in__form">
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
          value={password}
          name="password"
          onChange={handleChange}
        />
        <CustomButton textContent={"sign in"} onButtonCLick={handleSubmit} />
      </form>
      <p className="z-index-1">
        Or click{" "}
        <span
          className="sign-in__anonymous"
          onClick={() => auth.signInAnonymously()}
        >
          here
        </span>{" "}
        to sign in anonymously.
      </p>
    </div>
  );
};

export default SignIn;
