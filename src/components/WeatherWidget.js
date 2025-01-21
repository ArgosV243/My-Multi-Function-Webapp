import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Seattle'); // Default city
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [useLocation, setUseLocation] = useState(false);

  const apiKey = 'API KEY';

  // Fetch weather data when city or coordinates change
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        let url;

        if (useLocation && latitude && longitude) {
          // Fetch by coordinates (latitude and longitude)
          url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        } else {
          // Fetch by city name
          url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        }

        const response = await axios.get(url);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Failed to fetch weather data.');
      }
    };

    fetchWeather();
  }, [city, latitude, longitude, useLocation]);

  // Handle city change
  const handleCityChange = (e) => {
    setCity(e.target.value);
    setUseLocation(false); // Disable location mode if manually entering city
  };

  // Handle geolocation
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          setUseLocation(true); // Enable location mode
        },
        (error) => {
          setError('Unable to retrieve location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather</h2>
      
      {/* Display weather data */}
      {weatherData && (
        <>
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} mph</p>
        </>
      )}

      {/* Input field to change city */}
      {!useLocation && (
        <>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city"
          />
          <button onClick={handleGetLocation}>Use My Current Location</button>
        </>
      )}
      
      {/* Show a message when location-based weather is being used */}
      {useLocation && <p>Weather based on your current location</p>}
    </div>
  );
};

export default WeatherWidget;