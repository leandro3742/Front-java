import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2';

function undestacar() {
    const url = 'http://localhost:8080/contenidos/listarmarcados/' + JSON.parse(sessionStorage.getItem("usuario")).email;
    const [todos, setTodos] = useState()
    const [mostrar, setMostrar] = useState(false)
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
            let aux = JSON.parse(sessionStorage.getItem("usuario"));
            if (aux.tipoUsuario === "GENERADOR_CONTENIDO") {
                setMostrar(true)
            }
        }
        fetchApi()
    }, [])

    const saveElement = (x) => {
        async function fetchFunction(url) {
            const response = await fetch(url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {}
                }).then(result => {
                    if (result == "ERROR") {
                        Swal.fire("Error");
                    }
                    else {
                        console.log("Ok", result);
                        Swal.fire('Contenido eliminado de destacados');
                    }
                }).catch(err => console.log(err));
            await response.json()
        }
        fetchFunction('http://localhost:8080/contenidos/desmarcarContenidoDestacado/' + x);
        fetchApi();
        Swal.fire('Contenido eliminado de destacados');
    };
    return (
        <div className="centrar">
            {mostrar ?
                <div className='divGlobal'>
                    <div className='divTitle'>
                        <h4 className='title'>Contenidos Destacados</h4>
                    </div>
                    {!todos ? 'Cargando ...' :
                        todos.map((todo, index) => {
                            return <div className="card">
                                <div className="container">
                                    <h4 className="h4">{todo.nombre}</h4>
                                    {console.log(todo)}
                                    <img className="img" src={todo.fotoPortada}></img>
                                    <Accordion className="df" defaultActiveKey="0" flush>
                                        <Accordion.Item >
                                            <Accordion.Header ><h5 className="h5">Descripción</h5></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="ul">Descripción: {todo.descripcion}</ul>
                                                <ul className="ul">Duración: {todo.duracion}</ul>
                                                <ul className="ul">Tipo: {todo.tipoContenido}</ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <button className="btnConfirmar" onClick={() => saveElement(todo.id)}> Qutar de destacados </button>
                                </div>
                            </div>

                        })
                    }
                </div>
                : <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
        </div>
    )
}

export default undestacar;