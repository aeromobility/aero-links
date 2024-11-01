import React from "react";
import { aeroInfo } from "../../pages/Homepage/content/items";

const Navbar = ({ dataFromChild }) => {
  const companyData =
    dataFromChild.name === "@GiantMobility" ? dataFromChild : aeroInfo;

  const bannerSize = dataFromChild.name === "@GiantMobility" ? "h-6 w-48" : "h-8";

  return (
    <div className="navbar bg-base-100 shadow-2xl justify-between">
      <img
        src={companyData.banner}
        className={bannerSize}
        alt="Banner Logo"
      />

      <div className="flex flex-col mr-8 text-sm">
        <p>Call us at: </p>
        <a href={companyData.tel} className="hover:underline">
          {companyData.phone}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
