import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";


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
        <div className='photo-container'>
            {
                <>
                <img src={photo}></img>
                </>
            }
        </div>
    )
}

export default Photo;