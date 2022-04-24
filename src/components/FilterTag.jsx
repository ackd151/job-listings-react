import React from "react";

import "./FilterTag.css";

const FilterTag = ({ tag }) => {
  return (
    <button className='filter-tag' value={tag}>
      {tag}
    </button>
  );
};

export default FilterTag;
