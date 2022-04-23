import React from "react";

import "./ListingFlag.css";

const ListingFlag = ({ flagTag, flagColor }) => {
  return <span className={`tag ${flagColor}`}>{flagTag}</span>;
};

export default ListingFlag;
