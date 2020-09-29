import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bienvenido to Gelato Heladeria!</h1>
    <p>Descubre todo un mundo de sabor sin ningun remordimiento!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">Sobre Nosotros</Link> <br />
    <Link to="/productos">Productos</Link> <br />
  </Layout>
)

export default IndexPage
