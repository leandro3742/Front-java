import React, { useState, useEffect } from "react";
import "../../styles/gestionarUsuario.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2'

function BloquearUsuario() {
  const url = 'http://localhost:8080/usuarios';
  const [todos, setTodos] = useState()
  const [mostrar, setMostrar] = useState(false)
  const fetchApi = async() =>{
    const response = await fetch(url)
    console.log(response.status)
    
    const responseJSON = await response.json()
    console.log(responseJSON)
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
  //Para desbloquear
const saveElement = (x) => {

  fetchFunction("http://localhost:8080/usuarios/bloquear", buildHeader("POST", { "email": x }))
    .then(result => {
      if (result == "ERROR") {
        Swal.fire('Error al Bloquear');
      }
      else {
        console.log("Ok");
        fetchApi();
        Swal.fire('Usuario Bloqueado');

      }
    }).catch(err => console.log(err));
};
  return (
    <body className="body">
     {mostrar ?
      <div>  <table>
      <td>
          <th>ID</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                
                if(todo.activo==1){
                    return <tr><td><a>{todo.id}</a></td></tr>
                }
               
              })
          }
       </td>
       <td>
          <th>Nombre</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                  if(todo.activo==1){
                return <tr><td><a>{todo.nombre}</a></td></tr>
                  }
                  
              })
          }
      
       </td>
      <td>
          <th>Email</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                  if(todo.activo==1){
                return <tr><td><a>{todo.email}</a></td></tr>
                  }
                  
              })
          }
      
       </td>
       <td>
          <th>Bloquear</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                if(todo.activo==1){
                return <tr><td><button  className="b" onClick={() => saveElement(todo.email)}>-</button></td></tr>
                }
                 
              })
          }
       </td>
      
      </table>
      </div>
    : <div><div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}

    </body>

  );

}

export default BloquearUsuario;
