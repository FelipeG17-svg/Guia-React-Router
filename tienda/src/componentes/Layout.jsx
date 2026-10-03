import { Outlet } from 'react-router'
import Container from 'react-bootstrap/Container'
import BarraNavegacion from './BarraNavegacion.jsx'
import PiePagina from './PiePagina.jsx'

// MÓDULO 1 · Paso 7: el marco del sitio se escribe una sola vez.
export default function Layout({ totalItems }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BarraNavegacion totalItems={totalItems} />
      <main className="flex-grow-1 py-4">
        <Container>
          <Outlet /> {/* aquí entra la página que corresponda a la URL */}
        </Container>
      </main>
      <PiePagina />
    </div>
  )
}
