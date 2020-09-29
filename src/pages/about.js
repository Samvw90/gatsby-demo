import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1>Sobre Nosotros</h1>
        <p>Esta es nuestra.....</p>
        <p>Todo empezo en marzo 15 del 2020... cuando en el mundo...</p>
        <Link to="/">Regreso al Inicio</Link>
      </div>
    </Layout>
  )
}

export default AboutPage
