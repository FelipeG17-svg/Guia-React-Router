import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import 'bootstrap/dist/css/bootstrap.min.css'
import './estilos.css'
import App from './App.jsx'

// MÓDULO 1 · Paso 4: BrowserRouter va UNA vez, aquí, envolviendo toda la app.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
