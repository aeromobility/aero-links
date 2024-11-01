import React, { useState } from "react";
import Links from "../Links/Links";
import ImageCarousel from "./content/ImageCarousel";
import "./index.css";
import video from "./content/images/extra/building.mp4";
import { aeroInfo, giantInfo } from "./content/items";
import { rearImages, sideImages } from "./content/images/vehicleImages";

const Homepage = ({ currentTab }) => {
  const [currentCompany, setCurrentCompany] = useState(aeroInfo); // Default to aeroInfo

  const handleTabChange = (tab) => {
    switch (tab) {
      case "Aero":
        setCurrentCompany(aeroInfo);
        currentTab(aeroInfo);
        break;
      case "Giant":
        setCurrentCompany(giantInfo);
        currentTab(giantInfo);
        break;
      default:
        console.error("Invalid tab");
        break;
    }
  };

  const images =
    currentCompany.name === "@GiantMobility" ? rearImages : sideImages;

  return (
    <div className="flex justify-center flex-col">
      {/* Background Video */}
      <video className="videoTag myVideo w-screen h-screen" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      {/* Card that shows the company, plus the ability to switch between companies */}
      <div className="flex justify-center">
        <div className="card glass w-96 ">
          {/* carousel goes here and replaces the currentCompany.logo */}
          <figure>
            <img
              className="w-48 h-48 m-4"
              src={currentCompany.logo}
              alt="car!"
            />
          </figure>
          <div className="card-body bg-white text-center rounded-b-lg h-64">
            <h2 className="card-title flex justify-center">
              {currentCompany.name}
            </h2>
            {/* Information About Company */}
            <p>
              {currentCompany.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    currentCompany.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            {/* Buttons for Rear, and Side-Entry */}
            <div className="flex flex-row justify-center">
              <button
                className="btn p-2 m-2 w-6/12"
                onClick={() => handleTabChange("Aero")}
              >
                Side-Entry
              </button>
              <button
                className="btn p-2 m-2 w-6/12"
                onClick={() => handleTabChange("Giant")}
              >
                Rear-Entry
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Displays Links based on Selected Company */}
      <Links currentCompany={currentCompany} />
{/*       <div className="card w-full">
        <ImageCarousel images={images} />
      </div> */}
    </div>
  );
};

export default Homepage;
