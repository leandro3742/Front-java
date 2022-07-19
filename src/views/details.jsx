import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleContent } from "../fakeApi";
import { buildHeader, fetchFunction } from "../utils/fetch";
import PaypalCheckoutButton from "../component/paypalCheckoutButton";
// fetchFunction("http://localhost:8080/categoria/agregarCategoria", buildHeader("POST", {nombre: "Entra bien2"})).then(result => setData(result)).catch(err => console.log(err))
import "../styles/detail.css";

async function fetchAgregarFav(url){
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        }
    });
    console.log(await response)
    alert("Se agrego a la lista de contenidos")
}


function Details() {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchFunction(url){
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchFunction('http://localhost:8080/contenidos/'+id);
    }, []);

    const pagarPPV = (elem) => {
        async function subscribirse(url){
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    fechaVencimiento: `${day}-${month}-${year}`,
                    monto: elem.precio,
                    tipoSuscripcion: elem.tipoSub
                })
            });
            console.log(await response)
            alert("Teermino")
        }
        subscribirse(`http://localhost:8080/suscripciones/agrearSuscripcionPP/${elem.id}/1`)
    }

    const agregarFav = (contenido) => {
        if(sessionStorage.getItem("usuario")){
            let id = JSON.parse(sessionStorage.getItem("usuario")).idUsuario
            fetchAgregarFav(`http://localhost:8080/usuarios/agregarContenidoFavorito/${id}/${contenido.id}`)
        } 
    }
    return (
    <div>
        {data && (
            <div className="d-flex flex-column align-items-center">
                <div>
                    <img src={data.fotoPortada} alt="" className="imgPortada"/>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div>
                        <span><b>Titulo</b> : {data.nombre}</span> <br />
                        <span><b>Descripcion</b> : {data.descripcion}</span> <br />                        
                        <span><b>Generador</b> : {data.generadorContenidoid.nombre}</span> <br />                        
                        {data.precio > 0 && <span><b>Precio</b> : {data.precio}</span>}
                        {sessionStorage.getItem("usuario") &&
                            <div className="d-flex justify-content-center">
                                <button className="my-3 btn btn-outline-success" onClick={()=>agregarFav(data)}>Agregar a favoritos</button>
                            </div>
                        }
                    </div>
                    <div className="d-flex justify-content-center">
                        { sessionStorage.getItem("usuario") && data.precio == 0 &&
                            <Link to={`/video/${data.id}`} className="btn btn-primary"> Ver ahora</Link>
                        }
                        {data.precio > 0 &&
                            <PaypalCheckoutButton product={data} isOk={pagarPPV} />
                        }
                    </div>
                </div>
            </div>
      )}
    </div>
  );
}

export default Details;
