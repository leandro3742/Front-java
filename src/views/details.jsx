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
    const [pago, setPago] = useState(false);
    const currentDate = new Date();

    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    useEffect(() => {
        async function fetchFunction(url){
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchFunction('http://localhost:8080/contenidos/'+id);
    }, []);

    const pagarPPV = (elem) => {
        alert("entra")
        console.log(elem)
        async function subscribirse(url){
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    monto: elem.precio,
                })
            });
            console.log(await response)
            if(response.status < 300)
                setPago(true)
           
        }
        subscribirse(`http://localhost:8080/suscripciones/agrearSuscripcionPPV/${elem.id}/${usuario.idUsuario}`)
    }

    const agregarFav = (contenido) => {
        if(sessionStorage.getItem("usuario")){
            let id = JSON.parse(sessionStorage.getItem("usuario")).idUsuario
            fetchAgregarFav(`http://localhost:8080/usuarios/agregarContenidoFavorito/${id}/${contenido.id}`)
        } 
    }

    useEffect(() => {
        if(data){
            if(data.precio > 0 && usuario){
                async function estaPago(url) {
                    const response = await fetch(url);
                    console.log(response)
                    if ((await response.status) > 300) {
                      setPago(false);
                    } else setPago(true);
                }
                estaPago(`http://localhost:8080/contenidos/estaPago/${data.id}/${usuario.idUsuario}`);
            }
        }
    }, [data]);

    const esHora = (data) => {
        let fecha = data.fecha_comienzo.split('/');
        let hora = data.comienzo.split(":");
        if(currentDate.getFullYear() == fecha[0] && currentDate.getMonth()+1 == fecha[1] && currentDate.getDate() == fecha[2]){
            console.log(currentDate.getMinutes())
            if(currentDate.getHours() >= hora[0]){
                console.log("entra")
                if(currentDate.getHours() == hora[0] && currentDate.getMinutes() >= hora[1] ){
                    return true
                }
                else if(currentDate.getHours() > hora[0])
                    return true
            }
        }
        return false;
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
                            <div>
                                {data.comienzo 
                                    ?
                                    // Si es en vivo
                                    <div>
                                        {esHora(data)
                                            ?
                                                <Link to={`/video/${data.id}`} className="btn btn-primary"> Ver ahora</Link>
                                            :
                                                <span>Todavia no es hora</span>
                                        }
                                     
                                    </div>
                                    :
                                    <Link to={`/video/${data.id}`} className="btn btn-primary"> Ver ahora</Link>
                                }
                            </div>
                        }
                        {data.precio > 0 &&
                            <div>
                                {pago 
                                    ? 
                                    <Link to={`/video/${data.id}`} className="btn btn-primary"> Ver ahora</Link>
                                    :
                                    <PaypalCheckoutButton product={data} isOk={pagarPPV} />
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
      )}
    </div>
  );
}

export default Details;
