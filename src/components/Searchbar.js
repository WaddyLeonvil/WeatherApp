import React, {useState} from 'react';
import './Searchbar.css';

function Searchbar({data, setCity, setState}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    }

    const handleClick = (value) => {
        setCity(value.name);
        setState(value.state);
    }

    return (
        <div className='search'>
            <div className="search-inputs">
                <input type='text' placeholder='Enter City Here' onChange={handleChange}/>
                <div className="search-icon">

                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className="data-result">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        <div className='data-item' onClick={handleClick(value)}>
                            {/* <p>{value.name},{value.state ? " " + value.state + "," : ""} {value.country}</p> */}
                        </div>
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default Searchbar