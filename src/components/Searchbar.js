import React, {useState} from 'react';
import './Searchbar.css';

function Searchbar({placeholder, data}) {
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

    return (
        <div className='search'>
            <div className="search-inputs">
                <input type='text' placeholder={placeholder} onChange={handleChange}/>
                <div className="search-icon">

                </div>
            </div>
            {filteredData.length !== 0 && (
            <div className="data-result">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        <div className='data-item'>
                            <p>{value.name},{value.state ? " " + value.state + "," : ""} {value.country}</p>
                        </div>
                    )
                })}
            </div>
            )}
        </div>
    )
}

export default Searchbar