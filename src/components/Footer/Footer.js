import React from "react";

const Footer = ({dataFromChild}) => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content p-4">
      <aside>
        <p>{dataFromChild.location}</p>
        <p>{dataFromChild.phone}</p>
        <p>Hours: 8:00am - 6:00pm</p>
      </aside>
    </footer>
  );
};

export default Footer;
