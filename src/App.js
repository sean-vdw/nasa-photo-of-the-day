import React, { useState } from "react";
import "./App.css";
import Photo from "./Photo";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Photo />
        <Details />
      </div>
    </div>
  );
}

export default App;
