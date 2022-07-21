import React from "react";
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import "../styles/myList.css";

async function getFavs(url){
    const response = await fetch(url);
    if(await response.status < 300){
        return await response.json() 
    }
    return "ERROR"
}

async function deleteFav(url){
    const response = await fetch(url, {method: "DELETE"});
    if(await response.status < 300){
        return await response
    }
    return "ERROR"
}

async function valorarContenido(url){
    const response = await fetch(url, {method: "POST"});
    if(await response.status < 300){
        return await response
    }
    return "ERROR"
}

async function estaValorado(url){
    const response = await fetch(url);
    return await response
}

function MyList() {
    const [favs, setFavs] = useState([])
    
    useEffect(() => {
        if(sessionStorage.getItem('usuario')){   
            getFavs(`http://localhost:8080/usuarios/listarFavoritos/${JSON.parse(sessionStorage.getItem('usuario')).idUsuario}`)
            .then(res => {
                if(res != "ERROR"){
                    setFavs(res)
                }
            })
        }
    }, [])

    const eliminar = (contenido) => {
        console.log(contenido);
        if(sessionStorage.getItem('usuario')){   
            deleteFav(`http://localhost:8080/usuarios/eliminarContenidoDeFavoritos/${JSON.parse(sessionStorage.getItem('usuario')).idUsuario}/${contenido.id}`)
            .then(res => {
                if(res != "ERROR"){
                    getFavs(`http://localhost:8080/usuarios/listarFavoritos/${JSON.parse(sessionStorage.getItem('usuario')).idUsuario}`)
                    .then(res => {
                        if(res != "ERROR"){
                            setFavs(res)
                        }
                    })
                }
            })
        }
    }
    const valorar = (e, data) => {
        let value = e.target.value;
        valorarContenido(`http://localhost:8080/usuarios/valorarContenido/${data.id}/${JSON.parse(sessionStorage.getItem('usuario')).idUsuario}/${value}`)
            .then(res => {
                console.log(res)
            })
    }
    const mostrar = async(idContenido) => {
        return await estaValorado(`http://localhost:8080/contenidos/esFavorito/${idContenido}/${JSON.parse(sessionStorage.getItem('usuario')).idUsuario}`)
        .then(res => {
            console.log(res)
            if(res.status < 300)
            return true
            else return false
        })
    }
    return (
        <div className="row m-0">
            {favs.map(data => {
                mostrar(data.id)
                return(
                    <div key={data.id} className="col-4">
                        <img src={data.fotoPortada} style={{width: '90%'}} />
                        <div>
                        <span><b>Titulo</b> : {data.nombre}</span> <br />
                        <span><b>Descripcion</b> : {data.descripcion}</span> <br />                        
                        <span><b>Generador</b> : {data.generadorContenidoid.nombre}</span> <br />
                        <form className="d-flex" onChange={(e)=> valorar(e, data)}>
                            <span className="ml-3"><b>Valoracion</b> : </span>
                            <span className="clasificacion">
                                <input id="radio1" type="radio" name="estrellas" value="5" />
                                <label htmlFor="radio1">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" />
                                <label htmlFor="radio2">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" />
                                <label htmlFor="radio3">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" />
                                <label htmlFor="radio4">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" />
                                <label htmlFor="radio5">★</label>
                            </span>
                        </form>
                        <button className="my-3 btn btn-outline-danger" onClick={()=> eliminar(data)}>Eliminar</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default MyList;
