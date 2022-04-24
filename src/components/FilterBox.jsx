import React from "react";

import Filter from "./Filter";
import "./FilterBox.css";

const FilterBox = ({ filter, onClearFilters, onRemoveFilter }) => {
  return (
    <div className={`filter-box shadowed ${filter.vis ? "" : "hidden"}`}>
      <div className='filters'>
        {filter.filters.map((filterVal, idx) => (
          <Filter
            key={idx}
            filterVal={filterVal}
            onRemoveFilter={onRemoveFilter}
          />
        ))}
      </div>
      <button className='clear-btn' onClick={onClearFilters}>
        clear
      </button>
    </div>
  );
};

export default FilterBox;
