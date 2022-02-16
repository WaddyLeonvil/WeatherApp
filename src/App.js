import './App.css';
import { useEffect, useState } from "react";
import Weather from './components/Weather';
import Topbar from './components/Topbar';

function App() {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();

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
          <Topbar />
          <Weather lat={lat} lon={lon}/>
        </header>
      </div>
    );
  }
}

export default App;
