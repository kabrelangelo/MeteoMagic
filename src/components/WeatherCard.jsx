import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { Sun, Cloud, CloudRain, Droplets, Wind, Thermometer } from 'lucide-react';

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  const getWeatherIcon = (weatherCode) => {
    if (weatherCode < 300) return <CloudRain className="w-24 h-24 text-blue-400" />;
    if (weatherCode < 600) return <Cloud className="w-24 h-24 text-gray-400" />;
    if (weatherCode < 700) return <CloudRain className="w-24 h-24 text-blue-300" />;
    if (weatherCode === 800) return <Sun className="w-24 h-24 text-yellow-400" />;
    return <Cloud className="w-24 h-24 text-gray-400" />;
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-3xl shadow-2xl max-w-xl text-white">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">{weatherData.name}</h2>
          <p className="text-xl capitalize">{weatherData.weather[0].description}</p>
        </div>
        <div className="text-right">
          <p className="text-6xl font-bold">{(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p className="text-xl">Ressenti: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C</p>
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        {getWeatherIcon(weatherData.weather[0].id)}
      </div>
      
      <div className="grid grid-cols-2 gap-6 text-center">
        <div className="bg-white bg-opacity-20 p-4 rounded-xl">
          <Droplets className="w-8 h-8 mx-auto mb-2 text-blue-200" />
          <p className="text-sm mb-1">Humidité</p>
          <p className="text-2xl font-semibold">{weatherData.main.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-xl">
          <Wind className="w-8 h-8 mx-auto mb-2 text-blue-200" />
          <p className="text-sm mb-1">Vent</p>
          <p className="text-2xl font-semibold">{weatherData.wind.speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;