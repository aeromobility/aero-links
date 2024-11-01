import React from "react";
import { aeroInfo } from "../../pages/Homepage/content/items"

const Footer = ({dataFromChild}) => {
  const companyData = dataFromChild.name === "@GiantMobility" ? dataFromChild : aeroInfo;
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p>{companyData.location}</p>
        <a href={companyData.tel} className="hover:underline">
          {companyData.phone}
        </a>
        <p>Monday - Friday</p>
        <p>Hours: 8:00am - 6:00pm</p>
        <p>Saturdays</p>
        <p>Hours: 9:00am - 5:00pm</p>
        <p>Sundays</p>
        <p>Closed</p>
      </aside>
    </footer>
  );
};

export default Footer;
