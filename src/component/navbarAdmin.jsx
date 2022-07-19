import React from 'react';
import { Link } from "react-router-dom";
import search from "../images/load.png";
import series from "../images/serielogo.png";
import film from "../images/peliculalogo.png";
import add from "../images/milista.png";
import mantel from "../images/MANTEL.png";
import icon from "../images/logo menu.png"

function NavbarAdmin(props) {
    function cerrarSesion(){
        sessionStorage.removeItem("usuario");
        props.setIsLogged(false);
    }
  return (
   
<div className="m-0 p-0 row bg-dark d-flex justify-content-between">
                <div>
                    <div className="col-lg-8 col-12 d-flex flex-row-reverse">
                        <Link className="link" to="/admin/homeAdmin">
                            Home
                        </Link>
                       
                    
                    <div>
                        <div className="dropdown">
                            <button className="dropbtn">
                                <img style={{ width: "80px" }} className="rounded-circle" src={icon} alt="" />
                            </button>
                            <div className="dropdown-content prioridad">
                                <Link to="/admin/contenidoDisponible" className="itemsdrop">Contenidos Disponible</Link>
                                <Link to="/admin/contenidoVisto" className="itemsdrop">Contenidos Vistos</Link>
                                <Link to="/admin/contenidoActivo" className="itemsdrop">Contenidos Activo</Link>
                                <Link to="/" className="itemsdrop" onClick={cerrarSesion}>Cerrar sesión</Link>
                            </div>
                          
                        </div>
                    </div>
                </div>
                </div>
        </div>
  )
}

export default NavbarAdmin