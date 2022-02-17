import React, {useState, useEffect} from 'react';
import Card from './Card';
import './Weather.css';

function Weather({lat, lon}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const getDayName = (num) => {
        switch(num) {
            case 0: return 'Sunday';
            case 1: return 'Monday';
            case 2: return 'Tuesday';
            case 3: return 'Wednesday';
            case 4: return 'Thursday';
            case 5: return 'Friday';
            case 6: return 'Saturday';
            default: return 'Sunday';
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setData(json);
                        setIsLoaded(true);
                        }
            );
            await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setData2(json);
                        setIsLoaded2(true);
                        }
            );
        };
        fetchData();
    }, [lat, lon]);
   
    if (!isLoaded || !isLoaded2) {
        return (
            <div>
                <h1>Loading data...</h1>
            </div>
        )
    }
    else {
        return (
            <div className='weather'>
                <p>{data.name}</p>
                <div className="weather-section">
                    <div className="weather-section-left">
                        <div className="weather-section-temperature">
                            {Math.round(((data.main.temp - 273.15) * 9/5 + 32))}°F
                        </div>
                    </div>
                    <div className='weather-section-right'>
                        <div className="weather-section-bottom-center">
                            Clouds: {data.clouds.all}% <br />
                            Humidity: {data.main.humidity}% <br />
                            Wind: {data.wind.speed} m/s <br />
                        </div>
                    </div>
                    {/* <div className="weather-section-right">
                        <div className="city-name">
                            {data.name}
                        </div>
                        <div className="day-name">
                            {getDayName(new Date(data.dt * 1000).getDay())}
                        </div>
                    </div> */}
                </div>
                <Card data={data2} />
            </div>
        )
    }
}

export default Weather