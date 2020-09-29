import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Productos = () => {
  return (
    <Layout>
      <SEO title="Products" />
      <div>
        <h1>Productos</h1>
        <p>Estos son nuestros Productos</p>
        <h3>Gelatos Artesanales</h3>
        <ul>
          <li>Vainilla Clasico</li>
          <li>Doble Chocolate</li>
          <li>Limoncelo</li>
        </ul>
        <h3>Gelatos Veganos</h3>
        <ul>
          <li>Remolacha Clasico</li>
          <li>Doble Chocolate con Pepino</li>
          <li>Limoncelo con Limon</li>
        </ul>
        <Link to="/">Regreso al Inicio</Link>
      </div>
    </Layout>
  )
}

export default Productos
