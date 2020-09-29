import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <div
      style={{
        background: "#f4f4f4",
        paddingTop: "10px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
