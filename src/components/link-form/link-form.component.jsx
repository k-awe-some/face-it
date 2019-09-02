import React from "react";
import { FaBinoculars } from "react-icons/fa";

import InputField from "../input-field/input-field.component";

import "./link-form.styles.scss";

const LinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div className="linkform z-index-1">
    <h3 className="linkform__instruction">
      {"This magic app will detect faces in your images. Give it a try!"}
    </h3>

    <InputField
      type="text"
      placeholder="Place your image link"
      onInputChange={onInputChange}
    />

    <button onClick={onButtonSubmit}>
      <FaBinoculars size={30} />
    </button>
  </div>
);

export default LinkForm;
