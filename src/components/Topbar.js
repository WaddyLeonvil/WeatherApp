import React from 'react';
import './Topbar.css';

function Topbar({handleChange}) {
    return (
        <div className='topbar'>
            <button onClick={() => {handleChange('5day')}}>5-Day Forecast</button>
            <button onClick={() => {handleChange('today')}}>Today's Weather</button>
            <button onClick={() => {handleChange('today')}}>Three</button>
        </div>
    )
}

export default Topbar