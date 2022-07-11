import React, { useState, useEffect } from "react";
import "../../styles/contenidoVisto.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';


function ContenidosVistos() {
const url = 'http://localhost:8080/admin/reporte/contenido/visto';
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
   

<table>
<td>
    <th>ID</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[0]}</a></td></tr>
        })
    }
 </td>
<td>
    <th>Nombre</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[7]}</a></td></tr>
        })
    }
 </td>
 <td>
 <th>Tipo Contenido</th>
      {!todos ? 'cargando ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[10]}</a></td></tr>
        })
    }
  </td>

</table>
  );
  
}

export default ContenidosVistos;