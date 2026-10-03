import { Link } from 'react-router'
import Button from 'react-bootstrap/Button'

export default function Inicio() {
  return (
    <div className="text-center py-5">
      <h1 className="display-5">Lo quieres, te lo vendo</h1>
      <p className="lead">Tecnología y hogar al mejor precio.</p>
      <Button as={Link} to="/catalogo" size="lg">Ver catálogo</Button>
    </div>
  )
}
