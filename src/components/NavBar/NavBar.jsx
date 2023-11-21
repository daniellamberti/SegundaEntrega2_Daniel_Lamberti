
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
    <figure>
    <figcaption>
      <img className="img_nav" src="/Img/logo.jpg" alt="" style={{width: "50px"}}/>
      Music Store</figcaption>
      </figure>
      <div>
        <Link to="/">
          <button className="btn btn-info mx-2">Home</button>
        </Link>
        <Link to="/category/guitarras">
          <button className="btn btn-info mx-2">Guitarras</button>
        </Link>
        <Link to="/category/teclados">
          <button className="btn btn-info mx-2">Teclados</button>
        </Link>
        <Link to="/category/baterias">
          <button className="btn btn-info mx-2">Baterias</button>
        </Link>
        <Link to="/category/percusion">
          <button className="btn btn-info mx-2">Percusion</button>
        </Link>
      </div>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </nav>
  );
};
