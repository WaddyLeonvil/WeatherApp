import './App.css';
import { useEffect, useState } from "react";
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data, setData] = useState();
  const [option, setOption] = useState('today');

  
  

  /* useEffect(() => {
    fetch('/express_backend')
      .then((res) => res.json())
      .then((data) => setData(data.express))
      .catch((err) => console.log(err));
    console.log(data);
  }, [])  */


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, [lat, lon])

  if (!lat || !lon) {
    return (
      <div className="App">
        <div className="App-header">
          Loading data...
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          {option === '5day' && <Forecast lat={lat} lon={lon} />}
          {option === 'today' && <Weather lat={lat} lon={lon} setLat={setLat} setLon={setLon} />}
        </header>
      </div>
    );
  }
}

export default App;
