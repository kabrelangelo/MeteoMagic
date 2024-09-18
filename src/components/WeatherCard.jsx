import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { Sun, Cloud, Droplets, Wind } from 'lucide-react';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg text-gray-800">
      <h2 className="text-4xl font-bold mb-2">{weatherData.name}</h2>
      <p className="text-xl mb-4">{weatherData.weather[0].description}</p>
      <p className="text-6xl font-bold mb-2">{(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
      <p className="text-xl mb-4">Ressenti: {(weatherData.main.feels_like - 273.15).toFixed(1)}°C</p>
      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <Droplets className="w-8 h-8 mr-2" />
          <div>
            <p className="text-sm">Humidité</p>
            <p className="text-2xl font-semibold">{weatherData.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="w-8 h-8 mr-2" />
          <div>
            <p className="text-sm">Vent</p>
            <p className="text-2xl font-semibold">{weatherData.wind.speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
