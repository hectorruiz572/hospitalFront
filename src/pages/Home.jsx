import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <h1>Bienvenido a la web del Hospital</h1>
    <div className="link-container">
      <Link to="/Consulta" className="link">
        Consulta
      </Link>
      <Link to="/Alta" className="link">
        Alta
      </Link>
      <Link to="/Actualizacion" className="link">
        Actualización
      </Link>
    </div>
  </div>
);

export default Home;
