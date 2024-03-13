import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Authentication from "./components/Authentication";
import Report from "./components/Report";

function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/report" element={<Report />} /> {/* Route for the Report component */}
        </Routes>
      </div>
  
  );
}

export default App;
