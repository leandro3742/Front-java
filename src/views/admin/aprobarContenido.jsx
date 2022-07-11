import React, { useState, useEffect } from "react";
import "../../styles/aprobarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";

function AprobarContenido() {
    //Para get
    const url = 'http://localhost:8080/admin/contenidosParaAprobar';
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
    /*/input
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");*/

    //funcion
  /*
  const saveElement = () => { 
    console.log(nombre)
    fetchFunction("http://localhost:8080/generadorcontenidos/agregarGeneradorContenido", buildHeader("POST",{"contrasenia":password,"email":email,"nombre":nombre}))
    .then(result => {
        if(result=="ERROR"){
        alert("Error en la creacion");
        } 
        else{
            console.log("Ok");
           
        }
    }).catch(err => console.log(err));
};*/
  return (
    <div class="centrar">
    <div class='divGlobal'>
        <div className='divTitle'>
            <h4 className='title'>Aprobar Contenidos</h4>
        </div>
 
        {!todos ? 'cargando ...':
      todos.map((todo,index)=>{
        return <div class="card">
                <div class="container">
                <h4>{todo.nombre}</h4> 
                <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-arte-conceptual-avatar-2-muestra-nuevos-rincones-pandora-2020623395.jpg?fit=2048%2C1295&ssl=1" style={{width: "300px"}}></img>
                <img src={todo.foto_portada} style={{width: "300px"}}></img>
                <ul><a>Descripción: {todo.descripcion}</a></ul>
                <ul><a>Duración: {todo.duracion}</a></ul>
                <ul><a>Tipo: {todo.tipo_contenido}</a></ul>
                <button>APROBAR</button>
            </div>
            </div>
          
      })
  }
    </div>
    </div>
  )
}

export default AprobarContenido