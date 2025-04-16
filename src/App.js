import React, { useState } from 'react';
import './App.css';
import WeatherCard from './Components/Weathercard';


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "3411114fbda74ac18b2dcbc4ce290978";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

  const fetchWeather = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError("Invalid city name");
      setWeatherData(null);
    }
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>

      {error && <div className="error"><p>{error}</p></div>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
