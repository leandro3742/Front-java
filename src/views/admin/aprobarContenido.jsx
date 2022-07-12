import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Accordion } from 'react-bootstrap';
function AprobarContenido() {
    //Para get
    const url = 'http://localhost:8080/admin/contenidosParaAprobar';
    const [todos, setTodos] = useState()
    const [mostrar, setMostrar] = useState(false)
    const fetchApi = async () => {
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
          let aux = JSON.parse(sessionStorage.getItem("usuario"));
          console.log(aux)
          if (aux.tipoUsuario === "ADMIN") {
            setMostrar(true)
          }
        }
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
             {mostrar ?
            <div className='divGlobal'>
                <div className='divTitle'>
                    <h4 className='title'>Aprobar Contenidos</h4>
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
                                        <ul className="ul">Generador: {todo.gcId}</ul>
                                        <ul className="ul">Destacado: {todo.destacado}</ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                
                               
                                <button className="btnConfirmar" onClick={() => saveElement(todo.id)}>APROBAR</button>
                            </div>
                        </div>

                    })
                }
            </div>
            : <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
        </div>
    )
}

export default AprobarContenido