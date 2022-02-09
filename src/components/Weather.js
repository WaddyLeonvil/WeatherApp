import React from 'react';
import './Weather.css';

function Weather({weatherData}) {
    return (
        <main>
            {weatherData.name}
        </main>
    )
}

export default Weather;
