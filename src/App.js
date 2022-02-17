import './App.css';
import { useEffect, useState } from "react";
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Topbar from './components/Topbar';

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [option, setOption] = useState('today');

  

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
          {option === 'today' && <Weather lat={lat} lon={lon} />}
        </header>
      </div>
    );
  }
}

export default App;
