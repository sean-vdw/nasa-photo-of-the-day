import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from '../constants/keys';
import axios from "axios";
import "./App.css";




function Photo() {
    return (
        <div className='photo-container'>
            <img></img>
        </div>
    )
}

export default Photo;