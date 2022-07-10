import React,{useState} from 'react'
import "../../styles/contenidosDisponibles.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import "../../styles/login.css";


function altaContenido(){
    const [descripcion, setdescripcion] = useState("");
    const [portada, setportada] = useState("");
    const [precio, setprecio] = useState("");
    const [tipo, settipo] = useState("");
    const [duracion, setduracion] = useState("");
    const [video,setvideo] = useState("");

    function rf() {
        window.location.replace("/generador/");
    }

    const saveElement = () => {
        let email = sessionStorage.getItem("usuario").email;
        fetchFunction("http://localhost:8080/contenidos/agregarContenido/cintia@fgg", buildHeader("POST", {
            "tipoContenido": tipo,
            "descripcion": descripcion,
            "ranking": 0,
            "fotoPortada": portada,
            "video": video,
            "precio": precio,
            "duracion": duracion,
            "destacado": 0,
	        "bloqueado": 0	}))
        .then(result => {
                if (result == "ERROR") {
                    alert("Usuario incorrecto");
                }
                else {
                    console.log("Ok", result);
                    sessionStorage.setItem("usuario", JSON.stringify(result));
                    props.setTipoUsuario(result.tipoUsuario);
                    props.setIsLogged(true);
                    rf();
                }
            }).catch(err => console.log(err));
    };

    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
            <div className='contenidosDisponibles'>
                <u><h2>Alta Contenido</h2></u>
            </div>
            <div className="row d-flex justify-content-center divtitulo">
                    <input type="text" onChange={(e) => setdescripcion(e.target.value)} className='inputs' placeholder="Descripcion"></input>
                    <input type="file" onChange={(e) => setportada(e.target.value)} className='inputs' placeholder="Portada"></input>
                    <input type="file" onChange={(e) => setvideo(e.target.value)} className='inputs' placeholder="Video"></input>
                    <input type="text" onChange={(e) => setprecio(e.target.value)} className='inputs' placeholder="Precio"></input>
                    <input type="text" onChange={(e) => settipo(e.target.value)} className='inputs' placeholder="Tipo"></input>
                    <input type="text" onChange={(e) => setduracion(e.target.value)} className='inputs' placeholder="Duracion"></input>
                </div>
                <button  onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">
                    Agregar Contenido
                </button>
        </div>
        </div>
    )
}

export default altaContenido;