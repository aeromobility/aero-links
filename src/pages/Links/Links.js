import React from "react";
import allLinks from "./Items";

const Links = () => {
  return (
    <ul className="menu rounded-box w-56 flex flex-col h-fit w-fit shadow-md m-12 glass">
      {allLinks.map((link, index) => (
        <li key={index} className="">
          <a href={link.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 shadow-md p-2 bg-white m-1 pl-8 pr-8 h-12">
            <img src={link.icon} alt="socialmediaicons" className="w-6"/>
            <span>{link.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
