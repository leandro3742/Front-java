import { Link } from "react-router-dom";
import search from "../images/load.png";
import series from "../images/serielogo.png";
import film from "../images/peliculalogo.png";
import add from "../images/milista.png";
import mantel from "../images/MANTEL.png";
import icon from "../images/logo menu.png"
import "../styles/navbar.css";

function NavbarComponent(props) {
    function cerrarSesion(){
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
            {props.isLogged && window.screen.width > 730 && (
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
                                <Link to="/" className="itemsdrop" onClick={cerrarSesion}>Cerrar sesión</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {props.isLogged && window.screen.width <= 730 && (
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
    );
}

export default NavbarComponent;
