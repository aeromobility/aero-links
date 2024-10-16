import React from "react";
import logo from "./aero-logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-2xl justify-between">
      
        <img src={logo} className="h-8" alt="aero-logo" />
      
      <div className="flex flex-col mr-8 text-sm">
        <p>Call us at: </p>
        <a href="tel:+18773254000" className="hover:underline">
          (877) 325-4000
        </a>
      </div>
    </div>
  );
};

export default Navbar;
