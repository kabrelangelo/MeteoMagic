import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherForm = () => {
  const { city, setCity, fetchWeather, loading } = useContext(WeatherContext);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city) {
      try {
        await fetchWeather();
      } catch (error) {
        console.error("Erreur lors de la récupération des données météorologiques", error);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Prévisions Météo</h1>
      <input
        type="text"
        placeholder="Entrez une ville"
        onChange={handleChange}
        className="p-3 w-full text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full p-3 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Chargement...' : 'Obtenir la météo'}
      </button>
    </div>
  );
};

export default WeatherForm;
