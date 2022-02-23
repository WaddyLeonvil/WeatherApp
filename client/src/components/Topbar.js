import React from 'react';
import './Topbar.css';

function Topbar({option, handleChange}) {
    return (
        <div className='topbar'>
            <button className={option === 'today' ? 'active' : 'non-active'} onClick={() => {handleChange('today')}}>Today's Weather</button>
            <button className={option === '5day' ? 'active' : 'non-active'} onClick={() => {handleChange('5day')}}>5-Day Forecast</button>
            <button className={option === 'three' ? 'active' : 'non-active'} onClick={() => {handleChange('three')}}>Three</button>
        </div>
    )
}

export default Topbar