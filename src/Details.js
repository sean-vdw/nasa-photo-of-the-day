import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './keys';
import axios from "axios";
import "./App.css";
import styled from "styled-components";

const StyledDetails = styled.div`
    background-color: ${props => props.theme.primaryBg};
		color: ${props => props.theme.primaryTxt};
		text-align: center;
		padding: 5% 4%;
`

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
			<StyledDetails>
				<div className='d-flex flex-column justify-content-center'>
					<p><b>Title:</b><br/>{title}</p>
					<p><b>Date:</b><br/>{date}</p>
					<p><b>Explanation:</b><br/>{expl}</p>
				</div>
		</StyledDetails>
    )
}

export default Details;