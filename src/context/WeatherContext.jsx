import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const WeatherContext = createContext();

export default function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cc87af13dcdb13e0798c27c2c0cf4944`);
      setWeatherData(response.data);
    } catch (error) {
      console.log("Problème de connexion au serveur", error);
      setError("Erreur lors de la récupération des données");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <WeatherContext.Provider value={{ city, loading, fetchWeather, setCity, weatherData, error }}>
      {children}
    </WeatherContext.Provider>
  );
}
