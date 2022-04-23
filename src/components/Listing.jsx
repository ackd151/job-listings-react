import React from "react";

import ListingInfo from "./ListingInfo";
import "./Listing.css";

const Listing = ({ listing }) => {
  return (
    <div className='listing featured'>
      <ListingInfo listing={listing} />
      <div className='tags'></div>
    </div>
  );
};

export default Listing;
