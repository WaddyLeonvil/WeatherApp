import React from 'react';
import './Card.css'

function Card({data}) {
    return (
        <div className='weather-card'>
            Name: {data.name}, <br />
            Country: {data.sys.country}, <br />
            Temperature: {Math.round(((data.main.temp - 273.15) * 9/5 + 32))}°F <br />
            Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
        </div>
    )
}

export default Card;
