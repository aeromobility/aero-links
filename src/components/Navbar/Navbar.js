import React from "react";
import aeroBanner from "../../pages/Homepage/content/aeroBanner.png"

const Navbar = ({dataFromChild}) => {
  const defaultBanner = dataFromChild.name === "@GiantMobility" ? dataFromChild.banner : aeroBanner;
  return (
    <div className="navbar bg-base-100 shadow-2xl justify-between">
      
        <img src={defaultBanner} className="h-8" alt="Banner Logo" />
      
      <div className="flex flex-col mr-8 text-sm">
        <p>Call us at: </p>
        <a href="tel:+18773254000" className="hover:underline">
          {dataFromChild.phone}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
