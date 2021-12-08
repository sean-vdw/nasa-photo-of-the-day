import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from '../constants/keys';
import axios from "axios";
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
