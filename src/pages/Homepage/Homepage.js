import React from "react";
import Links from "../Links/Links";
import "./index.css";
import video from './building.mp4'

const Homepage = () => {
  return (
    <div className="flex justify-center">
      <video className="videoTag myVideo w-screen h-screen" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Links />
    </div>
  );
};

export default Homepage;
