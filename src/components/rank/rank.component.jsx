import React from "react";

import "./rank.styles.scss";

const Rank = () => (
  <p className="rank z-index-1">
    {`User, your current rank is`}
    <br />
    <span>{"#5"}</span>
  </p>
);

export default Rank;
