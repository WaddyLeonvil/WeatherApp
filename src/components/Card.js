import React from 'react';
import './Card.css'

function Card({data}) {
    return (
        <div className="weather-card-wrapper">
            {data.list.map((array, index) => {
                if (index % 8 === 0) {
                    return(
                        <div key={index / 5} className='weather-card'>
                            {data.city.name},{data.city.state ? " " + data.city.state + "," : ""} {data.city.country} <br />
                            {new Date(data.list[index].dt * 1000).toLocaleDateString('en-US')} <br />
                            Min Temp: {Math.round(((data.list[index].main.temp_min - 273.15) * 9/5 + 32))}°F <br />
                            Max Temp: {Math.round(((data.list[index].main.temp_max - 273.15) * 9/5 + 32))}°F <br />
                        </div>
                    )
               }
            })}
        </div>
            
    )
}

export default Card;
