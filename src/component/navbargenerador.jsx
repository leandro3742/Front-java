import React from 'react';
import { Link } from "react-router-dom";
import search from "../images/load.png";
import series from "../images/serielogo.png";
import film from "../images/peliculalogo.png";
import add from "../images/milista.png";
import mantel from "../images/MANTEL.png";
import icon from "../images/logo menu.png"

function NavbarGenerador(props) {
    function cerrarSesion(){
        sessionStorage.removeItem("usuario");
        props.setIsLogged(false);
    }
  return (
    <div className="m-0 p-0 row bg-dark d-flex justify-content-between">
                <div className="col-9 row m-0">
                    <div className="col-10 d-flex align-items-center justify-content-around">
                        <Link className="link d-flex align-items-center" to="/generador/">
                            Home 
                        </Link>
                        <Link className="link d-flex align-items-center" to="/generador/destacar">
                            Destacar 
                        </Link>
                        <Link className="link d-flex align-items-center" to="/generador/agregarContenido">
                            Agregar Contenido 
                        </Link>
                        <Link className="link d-flex align-items-center" to="/generador/contenido">
                            Mi contenido 
                        </Link>
                    </div>
                    <div className="col-2 m-auto ">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <img style={{ width: "80px" }} className="rounded-circle" src={icon} alt="" />
                            </button>
                            <div className="dropdown-content prioridad">
                                <Link to="/" className="itemsdrop" onClick={cerrarSesion}>Cerrar sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default NavbarGenerador