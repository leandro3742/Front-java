import React, { useState, useEffect } from "react";
import "../../../styles/contenidoVisto.css";
import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';



function ContenidosDisponibles() {
const url = 'http://localhost:8080/admin/reporte/contenido/disponible';
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
  return (
    <div className="centrar">
    <div className='divGlobal'>
<div className='divTitle'>
<h4 className='title'>Contenidos Disponibles</h4>
</div>
</div>

<table>
<td>
    <th>ID</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo.id}</a></td></tr>
        })
    }
 </td>
<td>
    <th>Nombre</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo.nombre}</a></td></tr>
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
</div>
  );
  
}

export default ContenidosDisponibles;