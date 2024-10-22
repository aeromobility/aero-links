import React from "react";
import { aeroInfo } from "../../pages/Homepage/content/items"

const Footer = ({dataFromChild}) => {
  const companyData = dataFromChild.name === "@GiantMobility" ? dataFromChild : aeroInfo;
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p>{companyData.location}</p>
        <p>{companyData.phone}</p>
        <p>Hours: 8:00am - 6:00pm</p>
      </aside>
    </footer>
  );
};

export default Footer;
