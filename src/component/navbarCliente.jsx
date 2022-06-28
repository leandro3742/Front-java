import React from 'react';
import { Link } from "react-router-dom";
import search from "../images/load.png";
import series from "../images/serielogo.png";
import film from "../images/peliculalogo.png";
import add from "../images/milista.png";
import mantel from "../images/MANTEL.png";
import icon from "../images/logo menu.png"

function NavbarCliente(props) {
    function cerrarSesion(){
        sessionStorage.removeItem("usuario");
        props.setIsLogged(false);
    }
  return (
    <div className="m-0 p-0 row bg-dark d-flex justify-content-between">
            {window.screen.width > 730 && (
                <div className="col-9 row m-0">
                    <div className="col-10 d-flex align-items-center justify-content-around">
                        <Link className="link d-flex align-items-center" to="/series">
                            <img className="mx-1" style={{ width: "30px" }} src={series} alt="" />
                            Series
                        </Link>
                        <Link className="link d-flex align-items-center" to="/films">
                            <img className="mx-1" style={{ width: "40px" }} src={film} alt="" />
                            Peliculas
                        </Link>
                        <Link className="link d-flex align-items-center" to="/myList">
                            <img className="mx-1" style={{ width: "25px" }} src={add} alt="" />
                            Mi lista
                        </Link>
                        <Link className="link d-flex align-items-center" to="/search">
                            <img className="mx-1" style={{ width: "25px" }} src={search} alt="" />
                            Búsqueda
                        </Link>
                    </div>
                    <div className="col-2 m-auto ">
                        <div className="dropdown">
                            <button className="dropbtn">
                                <img style={{ width: "80px" }} className="rounded-circle" src={icon} alt="" />
                            </button>
                            <div className="dropdown-content prioridad">
                                <a className="itemsdrop">Ver perfil</a>
                                <a className="itemsdrop">Ver suscripciones</a>
                                <a className="itemsdrop">Rankear contenido</a> {/*Solamente hay que mostrarle los contenidos que tiene como favoritos*/}
                                <Link to="/" className="itemsdrop">Ver generadores</Link>
                                <Link to="/" className="itemsdrop" onClick={cerrarSesion}>Cerrar sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {window.screen.width <= 730 &&(
                <div className="col-10 d-flex align-items-center justify-content-end">
                    <Link className="mx-1 link d-flex align-items-center" to="/search">
                        <img className="mx-1" style={{ width: "25px" }} src={search} alt="" />
                        Búsqueda
                    </Link>
                    <Link className="link d-flex align-items-center" to="/profile">
                        <img style={{ width: "50px" }} className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjak94qQLO299Y_05mEHWIB_S2mm3JGrYQkQ&usqp=CAU" alt="" />
                    </Link>
                </div>
            )}
        </div>
  )
}

export default NavbarCliente