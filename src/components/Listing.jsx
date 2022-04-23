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
    <div className={`listing ${listing.featured && "featured"}`}>
      <ListingInfo listing={listing} />
      <div className='tags'>
        {filterTags.map((tag) => (
          <FilterTag tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
