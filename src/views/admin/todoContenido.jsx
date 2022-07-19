import React, { useState, useEffect } from "react";
import "../../styles/gestionarUsuario.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2'

function TodoContenido() {
  const url = 'http://localhost:8080/contenidos/';
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
    fetchFunction('http://localhost:8080/admin/contenido/bloquear/'+x);
    Swal.fire('Contenido Bloqueado');
}
  return (
<body className="body">
     {mostrar ?
      <div>  <table>
      <td>
          <th>ID</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{        
                
                    return <tr><td><a>{todo.id}</a></td></tr>
                             
              })
          }
       </td>
    
      <td>
          <th>Nombre</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                  
                return <tr><td><a>{todo.nombre}</a></td></tr>
                  
                  
              })
          }
      
       </td>
       <td>
          <th>Tipo</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                  
                return <tr><td><a>{todo.tipoContenido}</a></td></tr>
                  
                  
              })
          }
      
       </td>
       <td>
          <th>Bloquear</th>
            {!todos ? 'cargando ...':
              todos.map((todo,index)=>{
                
                return <tr><td><button  className="b" onClick={() => saveElement(todo.id)}>-</button></td></tr>
                
                 
              })
          }
       </td>
      
      
      </table>
      </div>
    : <div><div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}

    </body>

 );
  

}
export default TodoContenido;