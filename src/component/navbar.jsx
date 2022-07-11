import { Link } from "react-router-dom";
import search from "../images/load.png";
import series from "../images/serielogo.png";
import film from "../images/peliculalogo.png";
import add from "../images/milista.png";
import mantel from "../images/MANTEL.png";
import icon from "../images/logo menu.png"
import "../styles/navbar.css";
import NavbarCliente from "./navbarCliente";

function NavbarComponent(props) {
    function cerrarSesion() {
        sessionStorage.removeItem("usuario");
        props.setIsLogged(false);
    }
    return (
        <div className="m-0 p-0 row bg-dark d-flex justify-content-between">
            <div className="col-lg-3 col-2">
                <Link className="link" to="/">
                    <img style={{ width: "180px", margin: "10px" }} className="rounded-pill" src={mantel} alt="" />
                </Link>
            </div>
            {!props.isLogged && (
                <div className="col-lg-4 col-9 d-flex align-items-center justify-content-end">
                    <Link className="mx-lg-5 mx-2 link" to="/register">
                        Register
                    </Link>
                    <Link className="mx-lg-5 mx-2 link" to="/login">
                        Log in
                    </Link>
                </div>
            )}
            {props.isLogged && props.tipoUsuario === "ADMIN" && (
                <div className="col-lg-9">
                    <NavbarCliente setIsLogged={props.setIsLogged} />
                </div>
            )}
            {props.isLogged && props.tipoUsuario === "CLIENTE" && (
                <div className="col-lg-9">
                    <NavbarCliente setIsLogged={props.setIsLogged} />
                </div>
            )}
        </div>
    );
}

export default NavbarComponent;
