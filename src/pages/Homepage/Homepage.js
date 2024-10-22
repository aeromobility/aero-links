import React, { useState } from "react";
import Links from "../Links/Links";
import "./index.css";
import video from "./content/building.mp4";
import { aeroInfo, giantInfo } from "./content/items";

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

  return (
    <div className="flex justify-center flex-col">
      <video className="videoTag myVideo w-screen h-screen" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex justify-center">
        <div className="card glass w-96">
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
            <p>
              {currentCompany.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    currentCompany.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
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
      <Links currentCompany={currentCompany} />
    </div>
  );
};

export default Homepage;
