import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";

function Details() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [expl, setExpl] = useState('');

    useEffect(() => {
        const fetchDetails = () => {
            axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
                .then(res => {
                    setTitle(res.data.title);
                    setDate(res.data.date);
                    setExpl(res.data.explanation);
                })
                .catch(err => {
                    debugger
                })
        }
        fetchDetails()
    }, [])

    return (
        <div className='details'>
            <div className='details-box'>
                <p className='photo-details'><b>Title:</b><br/>{title}</p>
                <p className='photo-details'><b>Date:</b><br/>{date}</p>
                <p className='photo-details'><b>Explanation:</b><br/>{expl}</p>
            </div>
        </div>
    )
}

export default Details;