import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2'
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
   

    //funcion aprobar
    const saveElement = (x) => {
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
        Swal.fire('Contenido Aprobado');
    };
    return (
        <body className="body">
        <div className="centrar">
             {mostrar ?
            <div className='divGlobal'>
                <div>
                    <h4 className='tit'>Aprobar Contenidos</h4>
                </div>

                {!todos ? 'Cargando ...' :
                    todos.map((todo, index) => {
                        return <div className="card">
                            <div className="container">
                            <h4 className="h5">{todo.nombre}</h4>
                            {console.log(todo)}
                            <img  className="img"src={todo.fotoPortada}></img>
                                <Accordion className="df" defaultActiveKey="0" flush>
                                    <Accordion.Item >
                                        <Accordion.Header><h5 className="h5">Descripci??n</h5></Accordion.Header>
                                        <Accordion.Body>
                                        <ul className="ul">{todo.descripcion}</ul>
                                        <ul className="ul">Duraci??n: {todo.duracion}</ul>
                                        <ul className="ul">Tipo: {todo.tipoContenido}</ul>
                                        <ul className="ul">ID: {todo.id}</ul>
                
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                
                               
                                <button className="conf" onClick={() => saveElement(todo.id)}>APROBAR</button>
                            </div>
                        </div>

                    })
                }
            </div>
            : <div><div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}
        </div>
        </body>
    )
}

export default AprobarContenido