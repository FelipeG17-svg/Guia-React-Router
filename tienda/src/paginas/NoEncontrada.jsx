import { Link, useLocation } from 'react-router'

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
