import React, { useContext } from 'react';
import WeatherForm from './WeatherForm';
import WeatherCard from './WeatherCard';
import { WeatherContext } from '../context/WeatherContext';

const Weather = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="h-screen w-screen flex items-center justify-between px-8 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Section Formulaire à gauche */}
      <div className="w-1/2 flex justify-center">
        <WeatherForm />
      </div>

      {/* Section Météo à droite */}
      <div className="w-1/2 flex justify-center">
        {weatherData && (
          <WeatherCard />
        )}
      </div>
    </div>
  );
};

export default Weather;
