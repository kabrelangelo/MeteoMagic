import { createContext, useState, useEffect } from "react";
import axios from 'axios'


export const WeatherContext=createContext();

export default function WeatherContextProvider({children}){
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Douala');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchWeather=async()=>{
        try{
        const response= await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cc87af13dcdb13e0798c27c2c0cf4944`)
            setWeatherData(response.data)
            setLoading(false)
        }
    catch(error) {
        console.log("Problème de connexion au serveur", error);
        setLoading(false)
    }
    }
    useEffect(()=>{
        fetchWeather() 
    }, [city])

    return <WeatherContext.Provider value={ {city, loading, weatherData}}>
        {children}
    </WeatherContext.Provider>
}