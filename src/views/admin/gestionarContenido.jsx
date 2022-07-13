import React, { useState, useEffect } from "react";
import "../../styles/gestionarContenido.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function GestionarContenido() {
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
    fetchFunction('http://localhost:8080/admin/contenido/desbloquear/'+x);
    Swal.fire('Contenido Desbloqueado');
}
  return (
    <div>
       {mostrar ?
    <div className="centrar">
        
    <div className='divGlobal'>
        <div className='divTitle'>
            <h4 className='title'>Contenidos Bloqueados</h4>
        </div>
    </div>
    
        <table>
<td>
    <th>ID</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
          
          if(todo.bloqueado==1){
              return <tr><td><a>{todo.id}</a></td></tr>
          }

        })
    }
 </td>
<td>
    <th>Nombre</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
            if(todo.bloqueado==1){
          return <tr><td><a>{todo.nombre}</a></td></tr>
            }
        })
    }

 </td>
 <td>
    <th>Desbloquear</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
            if(todo.bloqueado==1){
          return <tr><td><button  className="b" onClick={() => saveElement(todo.id)}>-</button></td></tr>
            }
        })
    }
 </td>

</table>

</div>
: <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
</div>   
  );
}
export default GestionarContenido;