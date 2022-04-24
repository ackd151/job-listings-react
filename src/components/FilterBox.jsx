import React from "react";

import Filter from "./Filter";
import "./FilterBox.css";

const FilterBox = ({ filter }) => {
  return (
    <div className={`filter-box shadowed ${filter.vis ? "" : "hidden"}`}>
      <div className='filters'>
        {filter.filters.map((filterVal, idx) => (
          <Filter key={idx} filterVal={filterVal} />
        ))}
      </div>
      <button className='clear-btn'>clear</button>
    </div>
  );
};

export default FilterBox;
