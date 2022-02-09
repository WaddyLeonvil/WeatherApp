import './App.css';
import { useEffect, useState } from "react";
import Weather from './components/Weather';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${process.env.REACT_APP_API_KEY}`)
                  .then((res) => res.json())
                  .then((json) => {
                      setData(json);
                      setIsLoaded(true);
                  });
  }, []);



  if (!isLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            Name: {data.name}, <br />
            Timezone: {data.timezone}, <br />
        </div>
    );
  /* return (
    <div className="App">
      <header className="App-header">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      </header>
    </div>
  ); */
}

export default App;
