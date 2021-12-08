import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Photo";
import Details from "./Details";
import { BASE_URL, API_KEY } from '../constants/keys';

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
