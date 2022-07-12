import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Accordion } from 'react-bootstrap';
function AprobarContenido() {
    //Para get
    const url = 'http://localhost:8080/admin/contenidosParaAprobar';
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        fetchApi()
    }, [])
    /*/input
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");*/

    //funcion

    const saveElement = (x) => {
        console.log(x);
        console.log("hola");
        //fetchFunction("http://localhost:8080/admin/contenidos/contenido/aprobar/")
        async function fetchFunction(url){
            const response = await fetch(url, 
                {method:"PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body:{}
                });
            await response.json()
        }
        fetchFunction('http://localhost:8080/admin/contenido/aprobar/'+x);
       
    };
    return (
        <div className="centrar">
            <div className='divGlobal'>
                <div className='divTitle'>
                    <h4 className='title'>Aprobar Contenidos</h4>
                </div>

                {!todos ? 'Cargando ...' :
                    todos.map((todo, index) => {
                        return <div className="card">
                            <div className="container">
                            <h4>{todo.nombre}</h4>
                            {console.log(todo)}
                            <img src={todo.fotoPortada} style={{width: "200px"}}></img>
                                <Accordion className="df" defaultActiveKey="0" flush>
                                    <Accordion.Item >
                                        <Accordion.Header ><h5>Descripción</h5></Accordion.Header>
                                        <Accordion.Body>
                                        <ul><a>Descripción: {todo.descripcion}</a></ul>
                                        <ul><a>Duración: {todo.duracion}</a></ul>
                                        <ul><a>Tipo: {todo.tipoContenido}</a></ul>
                                        <ul><a>Generador: {todo.gcId}</a></ul>
                                        <ul><a>Destacado: {todo.destacado}</a></ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                
                               
                                <button className="btnConfirmar" onClick={() => saveElement(todo.id)}>APROBAR</button>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default AprobarContenido