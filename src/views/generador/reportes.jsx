import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2';

function reportes() {
    const url ='http://localhost:8080/generadorcontenidos/obtenerReportes/'+JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
    const [todos, setTodos] = useState()
    const [mostrar, setMostrar] = useState(false)
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(responseJSON)
        setTodos(responseJSON)
    }
    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
            let aux = JSON.parse(sessionStorage.getItem("usuario"));
            if (aux.tipoUsuario === "GENERADOR_CONTENIDO") {
                setMostrar(true)
            }
        }
        fetchApi();
    }, [])

    return (
        <div className="">
            {mostrar ?
                <div className='divGlobal'>
                    <div className='divTitle'>
                        <h4 className='title'>Reportes </h4>
                    </div>
                    {!todos ? 'Cargando ...' :
                        todos.map((todo, index) => {
                            return <div className="card">
                                <div className="container">
                                    <h4 className="h4">{todo.contenido.nombre}</h4>
                                    <img className="img" src={todo.contenido.fotoPortada}></img>
                                    <Accordion className="df" defaultActiveKey="0" flush>
                                        <Accordion.Item >
                                            <Accordion.Header ><h5 className="h5">Reporte</h5></Accordion.Header>
                                            <Accordion.Body>
                                                <ul className="ul texto">Puntaje: {todo.puntaje}</ul>
                                                <ul className="ul texto">Visualizaciones: {todo.visualizaciones}</ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>

                        })
                    }
                </div>
                : <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
        </div>
    )
}
export default reportes;