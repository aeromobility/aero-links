import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
//Import Components
import { Navbar, Footer } from "./components/index";
//Import Pages
import { Homepage } from "./pages/index";

function App() {
  const [dataFromChild, setDataFromChild] = useState('Aero');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <Navbar dataFromChild={dataFromChild} />
        <div className="flex-grow">
          <Routes>
            <Route path="/links" element={<Homepage currentTab={handleDataFromChild} />} />
          </Routes>
        </div>
        <Footer dataFromChild={dataFromChild} />
      </Router>
    </div>
  );
}

export default App;
