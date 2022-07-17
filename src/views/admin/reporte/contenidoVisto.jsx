import React, { useState, useEffect } from "react";
import "../../../styles/contenidoVisto.css";
import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';


function ContenidosVistos() {
const url = 'http://localhost:8080/admin/reporte/contenido/visto';
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
    <div className="centrar">
         {mostrar ?
    <div className='divGlobal'>
<div className='divTitle'>
<h4 className='title'>Contenidos Visto</h4>
</div>

    
<table>
<td>
    <th>ID</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[0]}</a></td></tr>
        })
    }
 </td>
<td>
    <th>Nombre</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[7]}</a></td></tr>
        })
    }
 </td>
 <td>
 <th>Tipo Contenido</th>
      {!todos ? 'No encontrado ...':
        todos.map((todo,index)=>{
          return <tr><td><a>{todo[10]}</a></td></tr>
        })
    }
  </td>

</table>
</div>
: <div> <div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}
</div>
  );
  
}

export default ContenidosVistos;