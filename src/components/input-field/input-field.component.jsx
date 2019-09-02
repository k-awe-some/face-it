import React from "react";

import "./input-field.styles.scss";

const InputField = ({ onInputChange, ...otherProps }) => (
  <form className="input">
    <input className="input__field" onChange={onInputChange} {...otherProps} />{" "}
  </form>
);

export default InputField;
