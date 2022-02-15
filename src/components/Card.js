import React from 'react';
import './Card.css';

function Card({data}) {

    const getDayName = (num) => {
        switch(num) {
            case 0: return 'Sun';
            case 1: return 'Mon';
            case 2: return 'Tue';
            case 3: return 'Wed';
            case 4: return 'Thu';
            case 5: return 'Fri';
            case 6: return 'Sat';
            default: return 'Sun';
        }
    }

    return (
        <div className="weather-card-wrapper">
            {data.list.map((array, index) => {
                if (index % 8 === 0) {
                    return(
                        <div key={index / 5} className={index === 0 ? 'weather-card today' : 'weather-card'}>
                            <div className="day">
                                {getDayName(new Date(array.dt * 1000).getDay())}
                            </div>
                            <div className="date">
                                {new Date(data.list[index].dt * 1000).toLocaleDateString('en-US')}
                            </div>
                            <img src={`http://openweathermap.org/img/wn/${array.weather[0].icon}@2x.png`} alt="" />
                            <div className="temperature">
                                {Math.round(((data.list[index].main.temp_min - 273.15) * 9/5 + 32))}°F
                            </div>
                        </div>
                    )
               }
               return '';
            })}
        </div>
            
    )
}

export default Card;
