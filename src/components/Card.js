import React from 'react';
import './Card.css'

function Card({data}) {
    return (
        <div className='weather-card'>
            Name: {data.city.name}, {data.city.country} <br />
            Today: {new Date(data.list[0].dt * 1000).toLocaleString('en-US')}, <br />
            Tomorrow: {new Date(data.list[8].dt * 1000).toLocaleString('en-US')}, <br />
            {/* Country: {data.sys.country}, <br />
            Temperature: {Math.round(((data.main.temp - 273.15) * 9/5 + 32))}°F <br />
            Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US')} */}
        </div>
    )
}

export default Card;
