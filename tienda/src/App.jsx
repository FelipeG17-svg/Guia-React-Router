import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

import Layout from './componentes/Layout.jsx'
import Inicio from './paginas/Inicio.jsx'
import Catalogo from './paginas/Catalogo.jsx'
import DetalleProducto from './paginas/DetalleProducto.jsx'
import Nosotros from './paginas/Nosotros.jsx'
import Carrito from './paginas/Carrito.jsx'
import Checkout from './paginas/Checkout.jsx'
import NoEncontrada from './paginas/NoEncontrada.jsx'

function leerCarritoGuardado() {
  try {
    const guardado = localStorage.getItem('lqtlv-carrito')
    return guardado ? JSON.parse(guardado) : []
  } catch {
    return []
  }
}

export default function App() {
 
  const [carrito, setCarrito] = useState(leerCarritoGuardado)

  useEffect(() => {
    localStorage.setItem('lqtlv-carrito', JSON.stringify(carrito))
  }, [carrito])

  function agregar(producto) {
    setCarrito((actual) => {
      const existe = actual.find((i) => i.id === producto.id)
      if (existe) {
        return actual.map((i) => (i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i))
      }
      return [...actual, { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 }]
    })
  }
  const quitar = (id) => setCarrito((actual) => actual.filter((i) => i.id !== id))
  const vaciar = () => setCarrito([])
  const totalItems = carrito.reduce((suma, i) => suma + i.cantidad, 0)

  return (
    <Routes>
      <Route path="/" element={<Layout totalItems={totalItems} />}>
        <Route index element={<Inicio />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="producto/:id" element={<DetalleProducto onAgregar={agregar} />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="carrito" element={<Carrito carrito={carrito} onQuitar={quitar} />} />
        <Route path="checkout" element={<Checkout carrito={carrito} onVaciar={vaciar} />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}
