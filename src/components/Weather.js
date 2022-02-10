import React, {useEffect, useState} from 'react';
import './Weather.css';
import Card from './Card';

function Weather({weatherData}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [city, setCity] = useState('Toronto');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(document.getElementById('city').value);
    }
    
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
                .then((res) => res.json())
                .then((json) => {
                    setData(json);
                    setIsLoaded(true);
                });
        }, [city]);

    if (!isLoaded) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit} autocomplete='off'>
                    <input type='text' id='city' placeholder='Enter City Name' required />
                    <input type='submit' />
                </form>
                <Card data={data} />
            </div>
        )
    }
}

export default Weather;
