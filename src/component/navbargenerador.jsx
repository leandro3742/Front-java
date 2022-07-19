import React from 'react';
import { Link } from "react-router-dom";
import icon from "../images/logo menu.png"

function NavbarGenerador(props) {
    function cerrarSesion() {
        sessionStorage.removeItem("usuario");
        props.setIsLogged(false);
    }
    return (
        <div className="m-0 p-0 row bg-dark d-flex justify-content-between">
            <div className="col-9 row m-0">
                <div className="col-10 d-flex align-items-center justify-content-around">
                    <Link className="link d-flex align-items" style={{ margin: 20 }} to="/generador/">
                        Home
                    </Link>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <img style={{ width: "80px" }} className="rounded-circle" src={icon} alt="" />
                        </button>
                        <div className="dropdown-content prioridad">
                            <Link className="itemsdrop" to="/generador/destacar">
                                Destacar
                            </Link>
                            <Link className="itemsdrop" to="/generador/undestacar">
                                Quitar destacados
                            </Link>
                            <Link className="itemsdrop" to="/generador/agregarContenido">
                                Agregar Contenido
                            </Link>
                            <Link className="itemsdrop" to="/generador/contenido">
                                Mi contenido
                            </Link>
                            <Link className="itemsdrop" to="/generador/reportes">
                                reportes
                            </Link>
                            <Link className="itemsdrop" to="/generador/pagos">
                                Editar
                            </Link>
                            <Link to="/" className="itemsdrop" onClick={cerrarSesion}>Cerrar sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarGenerador