import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div>
      <NavBar />
      <Authentication />
    </div>
  );
}

export default App;
