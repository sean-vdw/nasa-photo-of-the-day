import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";

import Photo from "./Photo";
import Details from "./Details";

import { 
  Navbar,
  NavbarBrand,
  Container 
} from 'reactstrap';

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
    <div className='App'>
      <Navbar className='navbar-dark bg-dark'>
        <Container>
          <NavbarBrand href='../public/index.html'>NASA Photo of the Day &#128640;</NavbarBrand>
        </Container>
      </Navbar>
      <div className="d-flex flex-column">
        <Photo />
        <Details />
      </div>
    </div>
  );
}

export default App;
