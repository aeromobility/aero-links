import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
//Import Components
import { Navbar, Footer } from "./components/index";
//Import Pages
import { Homepage } from "./pages/index";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/aero-links" element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
