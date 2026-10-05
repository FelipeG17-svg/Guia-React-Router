import { useNavigate, useParams } from 'react-router'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto({ onAgregar }) {
  const { id } = useParams() 
  const navegar = useNavigate()
  const producto = buscarProducto(id)

  if (!producto) {
    return (
      <>
        <Alert variant="danger">No existe el producto {id}.</Alert>
        <Button variant="outline-secondary" onClick={() => navegar('/catalogo')}>
          Ir al catálogo
        </Button>
      </>
    )
  }

  function agregar() {
    onAgregar(producto)
    navegar('/carrito') 
  }

  return (
    <>
      <Button variant="outline-secondary" className="mb-3" onClick={() => navegar(-1)}>
        Volver
      </Button>
      <div className="fs-1" aria-hidden="true">{producto.emoji}</div>
      <h1 className="h3">{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p className="fw-semibold">{formatearPrecio(producto.precio)}</p>
      <Button onClick={agregar} disabled={producto.stock === 0}>
        {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </Button>
    </>
  )
}
