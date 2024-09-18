import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import WeatherContextProvider from './context/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <WeatherContextProvider>
    <App />
    </WeatherContextProvider>
  </BrowserRouter>
  </StrictMode>,
)
