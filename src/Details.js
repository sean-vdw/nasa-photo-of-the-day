import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from '../constants/keys';
import axios from "axios";
import "./App.css";




function Details() {
    return (
        <div className='details'>
            <h1>NASA Photo of the Day</h1>
            <div className='details-box'>
                <p className='photo-details'>Title: </p>
                <p className='photo-details'>Photographer: </p>
                <p className='photo-details'>Date: </p>
            </div>
        </div>
    )
}

export default Details;