import React, {useEffect, useState} from 'react';
import './Weather.css';
import Card from './Card';

function Weather({weatherData}) {
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            });

            await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=26.5&lon=-80.1&appid=${process.env.REACT_APP_API_KEY}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setData(json);
                        setIsLoaded(true);
                    });
        };
        fetchData();
    }, [lat, lon]);

    

    if (!isLoaded) {
        return (
            <div>
                <h1>Loading data...</h1>
            </div>
        )
    }
    else {
        return (
            <div className='weather'>
                <div className="location-name">
                    {data.city.name},{data.city.state ? " " + data.city.state + "," : ""} {data.city.country}
                </div>
                <Card data={data} />
            </div>
        )
    }
}

export default Weather;
