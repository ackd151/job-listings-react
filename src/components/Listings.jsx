import React from "react";
import Listing from "./Listing";

import "./Listings.css";

const Listings = ({ data }) => {
  console.log(data);

  return (
    <main className='listings'>
      {data.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </main>
  );
};

export default Listings;
