import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2';

function miContenido() {
    const url = 'http://localhost:8080/contenidos/listarContenidosGenerador/' + JSON.parse(sessionStorage.getItem("usuario")).email;
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

    function recargar(){
        fetchApi();
    }
    function eliminar(x) {
        async function fetchFunction(url) {
            const response = await fetch(url,
                {
                    method: "DELETE",
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
                        Swal.fire('Contenido Elimindao');
                    }
                }).catch(err => console.log(err));
        }
        fetchFunction('http://localhost:8080/contenidos/eliminarContenido/' + x);
        recargar();
        fetchApi();
    }

    return (
        <div className="centrar">
            {mostrar ?
                <div className='divGlobal'>
                    <div className='divTitle'>
                        <h4 className='title'>Mi Contenidos</h4>
                    </div>
                    {!todos ? 'Cargando ...' :
                        todos.map((todo, index) => {
                            return <div className="card">
                                <div className="container">
                                    <h4 className="h4">{todo.nombre}</h4>
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
                                    <div>
                                        <button key={todo.index} onClick={() => eliminar(todo.id)} className="btnConfirmar"> Eliminar </button>
                                        <Link to={`/generador/categorias/${todo.id}`}><button className="btnConfirmar">Editar Categorias</button></Link>
                                    </div>
                                </div>
                            </div>

                        })
                    }
                </div>
                : <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
        </div>
    )
}
export default miContenido;