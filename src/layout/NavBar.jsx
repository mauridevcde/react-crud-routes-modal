import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/clientes'>
            Clientes
          </Link>
        </li>
      </ul>
    </div>
  );
};
