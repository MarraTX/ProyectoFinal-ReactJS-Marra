import { CartWidgets } from "../../common/cartWidget/CartWidgets";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      {/* nombre de la empresa */}
      <h1>Natural Chadi</h1>
      {/* listado de categorias clickeables */}
      <ul>
        <li>Productos</li>
        <li>Contacto</li>
        <li>Ubicacion</li>
      </ul>
      <CartWidgets />
    </div>
  );
};

export default Navbar;