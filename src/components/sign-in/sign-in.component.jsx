import React from "react";

import { auth } from "../../firebase/firebase";

import InputField from "../input-field/input-field.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const currentUser = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(currentUser);
      this.setState({ email: "", password: "" });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>{"I already have an account."}</h1>
        <form className="sign-in__form">
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <CustomButton
            textContent={"sign in"}
            onButtonCLick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
