import React from "react";

import "./FilterTag.css";

const FilterTag = ({ tag, onAddFilter }) => {
  return (
    <button className='filter-tag' value={tag} onClick={() => onAddFilter(tag)}>
      {tag}
    </button>
  );
};

export default FilterTag;
