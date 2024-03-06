import React from "react";
import './App.css'
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";

function App() {
  return (
    <div>
      <NavBar />
      <SignUp />
      <Admin/>
    </div>
  );
}

export default App;
