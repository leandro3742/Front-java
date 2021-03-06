import React, { useState, useEffect } from "react";
import "../../../styles/reporte.css";

import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";


function ContenidosDisponibles() {
const url = 'http://localhost:8080/admin/reporte/contenido/disponible';
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
  return (
 <body className="body">
  <div className="centrar">
<h4 className="h4">Disponibles</h4>
</div>
         {mostrar ?
  
<table>
<td>
    <th>ID</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><Link  to={`/admin/verContenidoDisponible/${todo.id}`}>
          {todo.id}
       </Link></td></tr>
        })
    }
 </td>
<td  >
    <th>Nombre</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td c><a>{todo.nombre}</a></td></tr>
        })
    }
 </td>
 <td>
 <th>Tipo Contenido</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo.tipoContenido}</a></td></tr>
        })
    }
  </td>

</table>

: <div> <div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}


</body>
  );
  
}

export default ContenidosDisponibles;