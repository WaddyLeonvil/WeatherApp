import React, {useEffect, useState} from 'react';
import './Searchbar.css';

function Searchbar({setLat, setLon, setName}) {
    const [data, setData] = useState();
    const [location, setLocation] = useState("");
    const [value, setValue] = useState("");

    const handleChange = ({target}) => {
        setValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocation(value);
        setValue("");
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch(
                `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_GEO_API_KEY}&q=${location}`)
                    .then((res) => res.json())
                    .then((json) => {
                        setData(json);
                        }
            );
        };
        if (location !== "") {
            fetchData();
        }
    }, [location]);

    useEffect(() => {
        const setCoords = () => {
            try {
                setLat(data.results[0].geometry.lat);
                setLon(data.results[0].geometry.lng);
                setName(data.results[0].formatted);
            }
            catch (e) {
                return;
            }
        };
        setCoords();
    }, [data]);

    return (
        <div className='search'>
            <div className="search-inputs">
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter Location Here' value={value} onChange={handleChange}/>
                    <input type='submit' />
                </form>
                <div className="search-icon">

                </div>
            </div>
        </div>
    )
}


export default Searchbar