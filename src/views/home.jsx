import React, { useEffect, useState } from "react";
import "../styles/home.css";
import List from "../component/list";

async function getContenidos(url){
    const response = await fetch(url);
    if(await response.status < 300){
        return await response.json() 
    }
    return "ERROR"
}

async function getRecomendados(url){
    const response = await fetch(url);
    if(await response.status < 300){
        return await response.json() 
    }
    return "ERROR"
}

async function getEventos(url){
    const response = await fetch(url);
    if(await response.status < 300){
        return await response.json() 
    }
    return "ERROR"
}
function Home() {
    const [index, setIndex] = useState(0);
    const [destacados, setDestacados] = useState([])
    const [recomendados, setRecomendados] = useState([]);
    const [eventos, setEventos] = useState([])
    const usuario  = JSON.parse(sessionStorage.getItem("usuario"));
    useEffect(() => {
        if(usuario){
            getRecomendados(`http://localhost:8080/usuarios/listarRecomendados/${usuario.idUsuario}`)
            .then(res => {
                if(res !== "ERROR")
                setRecomendados(res)
            })
        }

        getEventos('http://localhost:8080/contenidos/listarEnVivo')
        .then(res => {
            console.log(res)
            if(res !== "ERROR"){
                setEventos(res.map(elem => {
                    return {
                        fotoPortada: elem[8],
                        nombre: elem[4],
                        id: elem[0]
                    }
                })
                )
            }
        })
        getContenidos('http://localhost:8080/contenidos/listarDestacados')
        .then(res => {
            console.log(res)
            if(res !== "ERROR")
                setDestacados(res)
        })
    }, []);
    return (
        <div className="m-0 row d-flex justify-content-center">
            <div>
                <h3>Destacado</h3>
                <List data={destacados}/>
            </div>
            <div>
                <h3>Eventos en vivo</h3>
                <List data={eventos} />
            </div>
            <div>
                <h3>Recomendados para ti</h3>
                <List data={recomendados}/>
            </div>
            
        </div>
    );
}

export default Home;
