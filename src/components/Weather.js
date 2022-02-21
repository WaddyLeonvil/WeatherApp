import React, {useState, useEffect} from 'react';
import Card from './Card';
import './Weather.css';
import Arrow from '../images/down-arrow.png';
import Searchbar from './Searchbar';

function Weather({lat, lon, setLat, setLon}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [name, setName] = useState("");
    const [expanded, setExpanded] = useState(false);
    const [fahrenheit, setFahrenheit] = useState(true);

    const toFahrenheit = (num) => {
        return Math.round((num - 273.15) * 9/5 + 32);
    }

    const toCelcius = (num) => {
        return Math.round(num - 273.15);
    }

    const handleToggle = () => {
        setExpanded(!expanded);
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
                <div className="searchbar-wrapper">
                <Searchbar setLat={setLat} setLon={setLon} />
                </div>
                <h1>Loading data...</h1>
            </div>
        )
    }
    else {
        return (
            <div className='weather'>
                <div className={expanded ? "searchbar-wrapper expanded": "searchbar-wrapper"}>
                    <Searchbar setLat={setLat} setLon={setLon} setName={setName} />
                </div>
                <p className={expanded ? "city-name expanded" : "city-name"}>{name}</p>
                <div className={expanded ? "weather-section expanded" : "weather-section"}>
                    <div className="weather-section-left">
                        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                        <div className={expanded ? "weather-section-temperature expanded" : "weather-section-temperature"}>
                            {fahrenheit ? toFahrenheit(data.main.temp) + "°F" : toCelcius(data.main.temp) + "°C"}
                        </div>
                    </div>
                    <div className={expanded ? 'weather-section-right expanded' : 'weather-section-right'}>
                        <div className="weather-section-bottom-center">
                            Clouds: {data.clouds.all}% <br />
                            Humidity: {data.main.humidity}% <br />
                            Wind: {data.wind.speed} m/s <br />
                            <div className={expanded ? 'extra-right expanded' : 'extra-right'}>
                                Max Temp: {fahrenheit ? toFahrenheit(data.main.temp_max) + "°F" : toCelcius(data.main.temp_max) + "°C"} <br />
                                Min Temp: {fahrenheit ? toFahrenheit(data.main.temp_min) + "°F" : toCelcius(data.main.temp_min) + "°C"} <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img src={Arrow} alt="" className={expanded ? 'arrow expanded' : 'arrow'} onClick={handleToggle} />
                </div>
                <div className="forecast-section">
                    <Card data={data2} fahrenheit={fahrenheit} toFahrenheit={toFahrenheit} toCelcius={toCelcius} />
                </div>
            
            </div>
        )
    }
}

export default Weather