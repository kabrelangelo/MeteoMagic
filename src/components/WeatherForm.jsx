import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const WeatherForm = () => {
  const { city, setCity, fetchWeather, loading } = useContext(WeatherContext);

  // Fonction pour mettre à jour la ville à chaque changement dans le champ de saisie
  const handleChange = (e) => {
    setCity(e.target.value); // Met à jour l'état `city` avec la valeur de l'input
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (city) { // Vérifie que le champ `city` n'est pas vide
      await fetchWeather(); // Appelle fetchWeather pour obtenir les données météo
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Prévisions Météo</h1>
        <input
          type="text"
          value={city} // Associe l'input avec l'état `city`
          placeholder="Entrez une ville"
          onChange={handleChange} // Met à jour `city` à chaque changement
          className="p-3 w-full text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
        />
        <button
          type="submit"
          disabled={loading} // Désactive le bouton si le chargement est en cours
          className={`w-full p-3 text-white font-semibold bg-indigo-500 rounded-lg shadow-md transition-all duration-300 ease-in-out ${loading ? 'cursor-not-allowed' : ''}`}
        >
          {loading ? 'Chargement...' : 'Obtenir la météo'}
        </button>
      </form>
    </div>
  );
};

export default WeatherForm;
