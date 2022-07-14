import React, { useState } from 'react'
import "../../styles/contenidosDisponibles.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import "../../styles/login.css";
import { margin } from '@mui/system';


function altaContenido(props) {
    const [descripcion, setdescripcion] = useState("");
    const [portada, setportada] = useState("");
    const [precio, setprecio] = useState("");
    const [tipo, settipo] = useState("");
    const [duracion, setduracion] = useState("");
    const [video, setvideo] = useState("");
    const [nombre, setnombre] = useState("");
    const [comienzo, setComienzo] = useState(null);
    const [loading, setloading] = useState(false);
    const [showElement, setShowElement] = useState(false)

    const funciontipo = (e) => {
        settipo(e.target.value);
        if(e.target.value === "EVENTO"){
            setShowElement(true);
        }
        else{
            setShowElement(false);    
        }
    }

    const uploadportada = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "imagenes");
        setloading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/labjava/upload", {
            method: "POST",
            body: data,
        }
        )
        const file = await res.json();
        console.log(res);
        setportada(file.secure_url);
        setloading(false);
    }
    const uploadvideo = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "videos");
        setloading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/labjava/upload", {
            method: "POST",
            body: data,
        }
        )
        const file = await res.json();
        console.log(res);
        setvideo(file.secure_url);
        setloading(false);
    }

    function rf() {
        window.location.replace("/generador/");
    }

    const saveElement = () => {
        console.log();
        let url = "http://localhost:8080/contenidos/agregarContenido/" + JSON.parse(sessionStorage.getItem("usuario")).email;
        fetchFunction(url, buildHeader("POST", {
            "nombre": nombre,
            "tipoContenido": tipo,
            "descripcion": descripcion,
            "ranking": 0,
            "fotoPortada": portada,
            "video": video,
            "precio": precio,
            "duracion": duracion,
            "destacado": 0,
            "bloqueado": 0,
            "comienzo": comienzo,
        }))
            .then(result => {
                if (result == "ERROR") {
                    alert("Error");
                }
                else {
                    console.log("Ok", result);
                    window.location.replace("/generador/");
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
                    <input type="text" onChange={(e) => setnombre(e.target.value)} className='inputs' placeholder="Nombre"></input>
                    <input type="text" onChange={(e) => setdescripcion(e.target.value)} className='inputs' placeholder="Descripcion"></input>
                    <input type="file" onChange={uploadportada} className='inputs' placeholder="Foto de Portada"></input>
                    <input type="file" onChange={uploadvideo} className='inputs' placeholder="Video"></input>
                    <input type="text" onChange={(e) => setprecio(e.target.value)} className='inputs' placeholder="Precio"></input>
                    <select className="form-control" onChange={funciontipo}>
                        <option value="PELICULA" selected>Pelicula</option>
                        <option value="EVENTO" selected>Evento</option>
                        <option value="SERIES" selected>Serie</option>
                    </select>
                    {showElement ? <input sowelem type="time" step="1" onChange={(e) => setComienzo(e.target.value)} className='inputs' placeholder="Inicio"></input> : null} 
                    <input type="time" step="1" onChange={(e) => setduracion(e.target.value)} className='inputs' placeholder="Duracion"></input>
                </div>
                <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">
                    Agregar Contenido
                </button>
            </div>
        </div>
    )
}

export default altaContenido;