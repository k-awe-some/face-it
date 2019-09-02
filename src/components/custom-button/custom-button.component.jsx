import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ textContent }) => (
  <div class="custom-button">
    <span>{textContent.toUpperCase()}</span>
    <svg>
      <polyline class="poly1" points="0 0, 150 0, 150 50, 0 50, 0 0"></polyline>
      <polyline class="poly2" points="0 0, 150 0, 150 50, 0 50, 0 0"></polyline>
    </svg>
  </div>
);

export default CustomButton;
