import React, { useState } from 'react'
import "../../styles/generador.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import Swal from 'sweetalert2';


function altaContenido(props) {
    const [descripcion, setdescripcion] = useState("");
    const [portada, setportada] = useState("");
    const [precio, setprecio] = useState("");
    const [tipo, settipo] = useState("SERIES");
    const [duracion, setduracion] = useState("");
    const [video, setvideo] = useState("");
    const [nombre, setnombre] = useState("");
    const [comienzo, setComienzo] = useState(null);
    const [fecha_comienzo, setfecha_comienzo] = useState(null);
    const [loading, setloading] = useState(false);
    const [showElement, setShowElement] = useState(false)

    const funciontipo = (e) => {
        settipo(e.target.value);
        if (e.target.value === "EVENTO") {
            settipo("EVENTO_DEPORTIVOS");
            setShowElement(true);
        }
        else {
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
        let url = "http://localhost:8080/contenidos/agregarContenido/" + JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
        fetchFunction(url, buildHeader("POST", {
            "nombre": nombre,
            "tipoContenido": tipo,
            "descripcion": descripcion,
            "fotoPortada": portada,
            "video": video,
            "precio": precio,
            "duracion": duracion,
            "comienzo": comienzo,
            "fecha_comienzo": fecha_comienzo
        })).then(result => {
                if (result == "ERROR") {
                    Swal.fire("Error");
                }
                else {
                    console.log("Ok", result);
                    Swal.fire('Contenido Agregado con exito');
                    window.location.replace("/generador/");
                }
            }).catch(err => console.log(err));
    };

    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
                <div className='divTitle'>
                    <h4 className='title'>Alta Contenido</h4>
                </div>
                <div className="row d-flex justify-content-center">
                    <input type="text" onChange={(e) => setnombre(e.target.value)} className='inputs fuenteL' placeholder="Nombre"></input>
                    <input type="text" onChange={(e) => setdescripcion(e.target.value)} className='inputs fuenteL' placeholder="Descripci??n"></input>
                    <input type="file" onChange={uploadportada} className='inputs fuenteL' placeholder="Foto de Portada"></input>
                    <input type="text" onChange={(e)=> setvideo(e.target.value)} className='inputs fuenteL' placeholder="Video"></input>
                    <input type="number " onChange={(e) => setprecio(e.target.value)} className='inputs fuenteL' placeholder="Precio"></input>   
                    <div className='divGlobal'>
                        <select className="form-control fuenteL" onChange={funciontipo}>
                            	<option value="PELICULA" selected className='fuenteL'>Pelicula</option>
                            	<option value="EVENTO" selected className='fuenteL'>Evento</option>
                            	<option value="SERIES" selected className='fuenteL'>Serie</option>
                        </select>
                    </div>
                    {showElement ?
                        <div className='divGlobal'>
                            <select className="form-control fuenteL" onChange={(e) => settipo(e.target.value)}>
                                <option value="EVENTO_ESPECTACULO" selected className='fuenteL'>Espect??culos</option>
                                <option value="EVENTO_DEPORTIVOS" selected className='fuenteL'>Deportivo</option>
                            </select>
                            <input sowelem type="time" step="1" onChange={(e) => setComienzo(e.target.value)} className='inputs' placeholder="Inicio"></input>
                            <input sowelem type="Date" step="1" onChange={(e) => setfecha_comienzo(e.target.value)} className='inputs' placeholder="Inicio"></input>
                        </div> : null}
                        <input type="time" step="1" onChange={(e) => setduracion(e.target.value)} className='inputs fuenteL' placeholder="Duracion"></input>
                </div>
                <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">Agregar Contenido</button>
            </div>
        </div>
    )
}
export default altaContenido;