import React from "react";
import { aeroLinks, giantLinks } from "./Items";

const Links = ({ currentCompany }) => {
  // Determine which set of links to use based on the current company
  const linksToUse = currentCompany.name === '@AeroMobility' ? aeroLinks : giantLinks;

  return (
    <div className="w-full flex justify-center">
      <ul className="menu rounded-box flex flex-col h-fit min-w-96 shadow-md m-12 glass">
        {linksToUse.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 shadow-md p-2 bg-white m-1 pl-8 pr-8 h-12"
            >
              <img src={link.icon} alt="social media icons" className="w-6" />
              <span>{link.description}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
