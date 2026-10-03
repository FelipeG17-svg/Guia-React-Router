import { Navigate } from 'react-router'
import Button from 'react-bootstrap/Button'

// MÓDULO 3 · Paso 17: ruta protegida. Sin carrito, redirige (con replace).
export default function Checkout({ carrito, onVaciar }) {
  if (carrito.length === 0) {
    return <Navigate to="/carrito" replace />
  }
  return (
    <>
      <h1 className="h3">Checkout</h1>
      <p>Aquí iría el formulario de pago.</p>
      <Button variant="success" onClick={onVaciar}>Confirmar compra</Button>
    </>
  )
}
