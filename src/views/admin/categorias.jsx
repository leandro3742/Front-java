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
  const fetchApi = async() =>{
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() =>{
    fetchApi()
  },[])
  //psot
  const saveElement = () => { 
    console.log(nombre)
    fetchFunction("http://localhost:8080/categorias/agregarCategoria", buildHeader("POST",{"nombre": nombre}))
    .then(result => {
        if(result=="ERROR"){
        alert("Error en la creacion");
        } 
        else{
            console.log("Ok");
           
        }
    }).catch(err => console.log(err));
};
  return (

<div class="centrar">

<div class="divGlobal">
<Accordion  defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h1 class="titles">Nueva</h1></Accordion.Header>
    <Accordion.Body>
    <div className="row d-flex justify-content-center divtitulo">
        <input class="inputs" onChange={(e) => setNombre(e.target.value)} className="m-2 col-10 fuenteL" placeholder="Nombre" />
    </div>
    <button onClick={saveElement} class="btnConfir">
         Confirmar
    </button> 
    </Accordion.Body>
  </Accordion.Item>
     <Accordion.Item >
     <Accordion.Header ><h1 class="titles">Todas las Categorías</h1></Accordion.Header>
     <Accordion.Body>
     {!todos ? 'cargando ...':
      todos.map((todo,index)=>{
        return <div class="eldiv"><p>{todo.nombre}</p></div>
      })
  }
  </Accordion.Body>
</Accordion.Item>
</Accordion>
</div>
</div>
  );
  
}

export default Categoria;