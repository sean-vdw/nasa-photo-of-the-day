import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";
import { Container } from 'reactstrap';
import styled from "styled-components";

const StyledCont = styled.div`
  background: rgb(188,182,204);
  background: linear-gradient(86deg, rgba(188,182,204,1) 0%, rgba(183,199,226,1) 50%, rgba(188,182,204,1) 100%);
`

const StyledImage = styled.img`
  margin: 5% 0;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 50px 15px rgba(0,0,0,0.75); 
  box-shadow: 0px 0px 50px 15px rgba(0,0,0,0.75);
  width: 35%;
`

function Photo() {
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
      <StyledCont >
        <StyledImage src={photo} alt='NASA Space Image'></StyledImage>
      </StyledCont>
    )
}

export default Photo;