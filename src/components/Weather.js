import React, {useEffect, useState} from 'react';
import './Weather.css';

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
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
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
                    <input type='text' id='city' required />
                    <input type='submit' />
                </form>
                Name: {data.name}, <br />
                Timezone: {data.timezone}, <br />
                Country: {data.sys.country}, <br />
                Temperature = {Math.round(((data.main.temp - 273.15) * 9/5 + 32) * 100) / 100}°F
            </div>
        )
    }
}

export default Weather;
