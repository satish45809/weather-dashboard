import React from 'react';

const WeatherCard = ({ data }) => {
  const getWeatherIcon = (main) => {
    switch(main) {
      case "Rain": return "/images/rain.png";
      case "Humidity": return "/images/humidity.png";
      case "Wind": return "/images/wind.png";
      case "Mist": return "/images/mist.png";
      case "Drizzle": return "/images/drizzle.png";
      case "Snow": return "/images/snow.png";
      case "Clear": return "/images/clear.png";
      case "Clouds": return "/images/clouds.png";
      default: return "/images/clear.png";
    }
  };

  return (
    <div className="weather">
      <img src={getWeatherIcon(data.weather[0].main)} className="weather-icon" alt="weather" />
      <h1 className="temp">{Math.round(data.main.temp)}°c</h1>
      <h2 className="city">{data.name}</h2>
      <div className="details">
        <div className="col">
          <img src="/images/humidity.png" alt="humidity" />
          <div>
            <p className="humidity">{data.main.humidity}%</p>
          </div>
        </div>
        <div className="col">
          <img src="/images/wind.png" alt="wind" />
          <div>
            <p className="wind">{data.wind.speed} kmph</p>
            <p>Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
