import React from "react";

import "./Filter.css";

const Filter = ({ filterVal }) => {
  return (
    <div className='filter'>
      <div className='filter-val'>{filterVal}</div>
      <button className='filter-remove-btn'>
        <img src='./images/icon-remove.svg' alt='remove filter' />
      </button>
    </div>
  );
};

export default Filter;
