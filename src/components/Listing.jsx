import React from "react";

import ListingInfo from "./ListingInfo";
import FilterTag from "./FilterTag";
import "./Listing.css";

const Listing = ({ listing }) => {
  const filterTags = [
    listing.role,
    listing.level,
    ...listing.languages,
    ...listing.tools,
  ];

  console.log(filterTags);

  return (
    <div className={`listing shadowed ${listing.featured ? "featured" : ""}`}>
      <ListingInfo listing={listing} />
      <div className='tags'>
        {filterTags.map((tag, idx) => (
          <FilterTag key={idx} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
