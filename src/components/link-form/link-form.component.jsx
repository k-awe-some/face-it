import React from "react";
import { FaBinoculars } from "react-icons/fa";

import "./link-form.styles.scss";

const LinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div className="linkform z-index-1">
    <h3 className="linkform__instruction">
      {"This magic app will detect faces in your images. Give it a try!"}
    </h3>

    <form className="linkform__input">
      <input
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
