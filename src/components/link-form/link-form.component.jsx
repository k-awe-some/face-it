import React from "react";
import { FaBinoculars } from "react-icons/fa";

import InputField from "../input-field/input-field.component";

import "./link-form.styles.scss";

const LinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div className="linkform">
    <h1 className="linkform__instruction">{"Let there be faces!"}</h1>
    <form className="linkform__form">
      <InputField
        type="text"
        placeholder="Place your image link"
        onChange={onInputChange}
      />

      <button onClick={onButtonSubmit}>
        <FaBinoculars size={30} />
      </button>
    </form>
  </div>
);

export default LinkForm;
