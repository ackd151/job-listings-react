import React from "react";

import ListingInfo from "./ListingInfo";
import FilterTag from "./FilterTag";
import "./Listing.css";

const Listing = ({ listing, onAddFilter }) => {
  const filterTags = [
    listing.role,
    listing.level,
    ...listing.languages,
    ...listing.tools,
  ];

  return (
    <div className={`listing shadowed ${listing.featured ? "featured" : ""}`}>
      <ListingInfo listing={listing} />
      <div className='tags'>
        {filterTags.map((tag, idx) => (
          <FilterTag key={idx} tag={tag} onAddFilter={onAddFilter} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
