import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";

import Photo from "./Photo";
import Details from "./Details";

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
        .then(res => {
          console.log(res.data);
          setPhoto(res.data.url)
        })
        .catch(err => {
          debugger
        })
    }
    fetchPhoto()
  }, [])

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
