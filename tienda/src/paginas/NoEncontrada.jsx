import { Link, useLocation } from 'react-router'

// MÓDULO 1 · Paso 8: ruta comodín (404) que muestra qué dirección falló.
export default function NoEncontrada() {
  const ubicacion = useLocation()
  return (
    <div className="text-center py-5">
      <h1 className="h3">Página no encontrada</h1>
      <p>No encontramos nada en <code>{ubicacion.pathname}</code></p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}
