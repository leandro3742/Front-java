import React, { useState, useEffect } from "react";
import "../../styles/categoria.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

function Categoria() {
  const [nombre, setNombre] = useState("");
  const url = 'http://localhost:8080/categorias';
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
  //psot
  const saveElement = () => {
    console.log(nombre)
    fetchFunction("http://localhost:8080/categorias/agregarCategoria", buildHeader("POST", { "nombre": nombre }))
      .then(result => {
        if (result == "ERROR") {
          alert("Error en la creacion");
        }
        else {
          console.log("Ok");

        }
      }).catch(err => console.log(err));
  };
  return (

    <div className="centrar">
      {mostrar ?
        <div className="divGlobal">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h1 className="titles">Nueva</h1></Accordion.Header>
              <Accordion.Body>
                <div className="row d-flex justify-content-center divtitulo">
                  <input className="inputs" onChange={(e) => setNombre(e.target.value)} class="m-2 col-10 fuenteL" placeholder="Nombre" />
                </div>
                <button onClick={saveElement} className="btnConfir">
                  Confirmar
                </button>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item >
              <Accordion.Header ><h1 className="titles">Todas las Categorías</h1></Accordion.Header>
              <Accordion.Body>
                {!todos ? 'cargando ...' :
                  todos.map((todo, index) => {
                    return <div className="eldiv"><p>{todo.nombre}</p></div>
                  })
                }
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        : <div><h1>No tienes permisos</h1></div>}
    </div>

  );

}

export default Categoria;
