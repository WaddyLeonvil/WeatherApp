import React, {useEffect, useState} from 'react';
import './Weather.css';
import Card from './Card';

function Weather({lat, lon}) {    
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setData(json);
                        setIsLoaded(true);
                        }
            );
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
                <div className="trapezoid">
                    <div className="location-name">
                        {data.city.name},{data.city.state ? " " + data.city.state + "," : ""} {data.city.country}
                    </div>
                </div>
                
                
                <Card data={data} />
            </div>
        )
    }
}

export default Weather;
