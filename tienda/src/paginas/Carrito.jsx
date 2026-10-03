import { Link } from 'react-router'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

import { formatearPrecio } from '../datos/productos.js'

export default function Carrito({ carrito, onQuitar }) {
  const total = carrito.reduce((suma, i) => suma + i.precio * i.cantidad, 0)

  if (carrito.length === 0) {
    return (
      <>
        <h1 className="h3">Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/catalogo">Ir al catálogo</Link>
      </>
    )
  }

  return (
    <>
      <h1 className="h3 mb-3">Carrito</h1>
      <ListGroup className="mb-3">
        {carrito.map((i) => (
          <ListGroup.Item key={i.id} className="d-flex justify-content-between align-items-center">
            <span>{i.nombre} × {i.cantidad}</span>
            <span>
              {formatearPrecio(i.precio * i.cantidad)}{' '}
              <Button size="sm" variant="outline-danger" onClick={() => onQuitar(i.id)}>Quitar</Button>
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p className="fw-bold">Total: {formatearPrecio(total)}</p>
      <Button as={Link} to="/checkout">Ir a pagar</Button>
    </>
  )
}
