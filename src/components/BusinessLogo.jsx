import React from "react";

import "./BusinessLogo.css";

const BusinessLogo = ({ url }) => {
  return (
    <div className='logo-container'>
      <img src={url} alt='logo' className='business-logo' />
    </div>
  );
};

export default BusinessLogo;
