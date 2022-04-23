import React from "react";

import BusinessLogo from "./BusinessLogo";
import "./ListingInfo.css";

const ListingInfo = ({ listing }) => {
  return (
    <div className='listing-info'>
      <BusinessLogo url={listing.logo} />
      <div className='business'>
        <div className='business-header'>
          <span className='business-name'>{listing.company}</span>
          {listing.new && <span className='tag'>NEW!</span>}
          {listing.featured && <span className='tag'>FEATURED</span>}
        </div>
        <div className='position'>{listing.position}</div>
        <div className='details'>
          <span className='posted'>{listing.postedAt}</span>
          <span className='contract'>{listing.contract}</span>
          <span className='location'>{listing.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
