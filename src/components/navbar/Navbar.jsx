import './navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/novedades">Novedades</Link>
        </li>
        <li>
          <Link to="/inventario">Inventario</Link>
        </li>
        <li>
          <Link to="/proyectos">Faturacion</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
