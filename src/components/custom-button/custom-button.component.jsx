import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ textContent, onButtonCLick }) => (
  <button className="custom-button" onClick={onButtonCLick}>
    <span>{textContent.toUpperCase()}</span>
    <svg>
      <polyline
        className="poly1"
        points="0 0, 150 0, 150 50, 0 50, 0 0"
      ></polyline>
      <polyline
        className="poly2"
        points="0 0, 150 0, 150 50, 0 50, 0 0"
      ></polyline>
    </svg>
  </button>
);

export default CustomButton;
