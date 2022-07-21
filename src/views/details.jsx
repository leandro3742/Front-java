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
    await response
    alert("Se agrego a la lista de contenidos")
}

async function fetchValoracion(url){
    const response = await fetch(url);
    if(response.status < 300)
        return await response.json()
    return "ERROR"
}

async function getRelacionados(url){
    const response = await fetch(url);
    if(response.status < 300)
        return await response.json()
    return "ERROR"
}


function Details() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [pago, setPago] = useState(false);
    const [directores, setDirectores] = useState([]);
    const [elenco, setElenco] = useState([]);
    const [valoracion, setValoracion] = useState("SV");
    const [relacionados, setRelacionados] = useState([]);

    const currentDate = new Date();

    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    useEffect(() => {
        async function fetchFunction(url){
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchValoracion(`http://localhost:8080/contenidos/obtenerPuntaje/${id}`)
        .then(res => {
            if(res !== "ERROR")
                setValoracion(res.puntaje)
        })
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
            getRelacionados(`http://localhost:8080/contenidos/listarRelacionados/${id}`)
            .then(res => {
                console.log(res)
                if(res !== "ERROR"){
                    setRelacionados(res)
                }
            })
            let auxDirector = []
            let auxElenco = []

            data.persona.map(elem => {
                if(elem.tipoElenco === "PRODUCTOR"){
                    auxDirector.push(elem.nombre)
                }
                else
                    auxElenco.push(elem.nombre)
            })
            setElenco(auxElenco);
            setDirectores(auxDirector);
            if(data.precio > 0 && usuario){

                async function estaPago(url) {
                    const response = await fetch(url);
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
            if(currentDate.getHours() >= hora[0]){
                if(currentDate.getHours() == hora[0] && currentDate.getMinutes() >= hora[1] ){
                    return true
                }
                else if(currentDate.getHours() > hora[0])
                    return true
            }
        }
        return false;
    }

    const Twiter= "https://twitter.com/intent/tweet?text= http://localhost:3000/detail/"+id;

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
                        <span><b>Directores</b>: {directores.map(elem => {return <span key={elem}>{elem} , </span>})}</span><br />                    
                        <span><b>Elenco</b>: {elenco.map(elem => {return <span key={elem}>{elem},</span>})}</span><br />      
                        <span><b>Valoracion</b>: {valoracion}/5</span><br />
                        <span><b>Relacionados</b>: {relacionados.map(elem => {return <a href={`/detail/${elem.id}`}><img src={elem.fotoPortada} style={{width: '50px'}} /></a>})}</span><br />
                        
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
                        <a class="btn btn-primary"href={Twiter}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
      )}
    </div>
  );
}

export default Details;
