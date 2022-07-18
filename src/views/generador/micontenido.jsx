import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';

function miContenido(){
    const url = 'http://localhost:8080/contenidos/listarContenidosGenerador/'+ JSON.parse(sessionStorage.getItem("usuario")).email;
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
            console.log(aux)
            if (aux.tipoUsuario === "GENERADOR_CONTENIDO") {
                setMostrar(true)
            }
        }
        fetchApi()
    }, [])
   
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
                            {console.log(todo)}
                            <img  className="img"src={todo.fotoPortada}></img>
                                <Accordion className="df" defaultActiveKey="0" flush>
                                    <Accordion.Item >
                                        <Accordion.Header ><h5 className="h5">Descripción</h5></Accordion.Header>
                                        <Accordion.Body>
                                        <ul className="ul">Descripción: {todo.descripcion}</ul>
                                        <ul className="ul">Duración: {todo.duracion}</ul>
                                        <ul className="ul">Tipo: {todo.tipoContenido}</ul>
                                        <ul className="ul">Destacado: {todo.destacado}</ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <button className="btnConfirmar"><Link to={`/generador/categorias/${todo.id}`} >Editar Categorias</Link></button>
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