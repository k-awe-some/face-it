import React from "react";

import "./link-form.styles.scss";

const LinkForm = ({ onInputChange, onButtonSubmit }) => (
  <div className="linkform z-index-1">
    <h3 className="linkform__instruction">
      {"This magic app will detect faces in your images. Give it a try!"}
    </h3>

    <form className="linkform__input">
      <input type="text" onChange={onInputChange} />
      <button onClick={onButtonSubmit}>{"Face it!"}</button>
    </form>
  </div>
);

export default LinkForm;
