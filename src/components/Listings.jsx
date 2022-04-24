import React from "react";
import Listing from "./Listing";

import "./Listings.css";

const Listings = ({ data, filtered, onAddFilter }) => {
  return (
    <main className={`listings ${filtered ? "filtered" : ""}`}>
      {data.map((listing) => (
        <Listing key={listing.id} listing={listing} onAddFilter={onAddFilter} />
      ))}
    </main>
  );
};

export default Listings;
