import React, { useState, useEffect } from "react";
import "../../styles/gestionarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';


function TodoContenido() {
  const url = 'http://localhost:8080/contenidos/';
  const [todos, setTodos] = useState()
  const fetchApi = async() =>{
    const response = await fetch(url)
    console.log(response.status)
    
    const responseJSON = await response.json()
    console.log(responseJSON)
    setTodos(responseJSON)
  }

  useEffect(() =>{
    fetchApi()
  },[])
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
}
  return (
    <div className="centrar">
    <div className='divGlobal'>
        <div className='divTitle'>
            <h4 className='title'>Todos los Contenidos</h4>
        </div>
    </div>
    
        <table>
<td>
    <th>ID</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
          
          if(todo.bloqueado==0){
              return <tr><td><a>{todo.id}</a></td></tr>
          }

        })
    }
 </td>
<td>
    <th>Nombre</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
            if(todo.bloqueado==0){
          return <tr><td><a>{todo.nombre}</a></td></tr>
            }
        })
    }
 </td>
 <td>
    <th>Bloquear</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
            if(todo.bloqueado==0){
          return <tr><td><button  className="btnCancelar" onClick={() => saveElement(todo.id)}>-</button></td></tr>
            }
        })
    }
 </td>

</table>


</div> 
 );
  

}
export default TodoContenido;