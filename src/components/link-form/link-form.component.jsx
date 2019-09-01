import React from "react";

import "./link-form.styles.scss";

const LinkForm = () => (
  <div className="linkform">
    <h3 className="linkform__instruction">
      {"This magic app will detect faces in your images. Give it a try!"}
    </h3>

    <form className="linkform__input">
      <input type="text" label="link" />
      <input type="submit" value="Face it!" />
    </form>
  </div>
);

export default LinkForm;
