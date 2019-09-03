import React from "react";

import { auth } from "../../firebase/firebase";

import InputField from "../input-field/input-field.component";
import "./sign-up.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmedPassword: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmedPassword } = this.state;

    if (password !== confirmedPassword) {
      alert("Passwords not matched!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      user.displayName = displayName;
      console.log(user);
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmedPassword: ""
      });
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const { displayName, email, password, confirmedPassword } = this.state;
    return (
      <div className="sign-up">
        <h1>{"I'd like to be signed up."}</h1>
        <form className="sign-up__form">
          <InputField
            type="text"
            placeholder="Display name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
          />
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
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <InputField
            type="password"
            placeholder="Confirm password"
            name="confirmedPassword"
            value={confirmedPassword}
            onChange={this.handleChange}
          />
          <CustomButton
            textContent={"sign up"}
            onButtonCLick={this.handleSubmit}
          />{" "}
        </form>
      </div>
    );
  }
}

export default SignUp;
