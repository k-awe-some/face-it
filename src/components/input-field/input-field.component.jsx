import React from "react";

import "./input-field.styles.scss";

const InputField = ({ ...otherProps }) => (
  <div className="input">
    <input className="input__field" {...otherProps} />{" "}
  </div>
);

export default InputField;
