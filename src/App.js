import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Authentication from "./components/Authentication";
import Report from "./components/Report"; // Import the Report component

function App() {
  return (
  <Router>
      <div>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/report" element={<Report />} /> {/* Route for the Report component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
