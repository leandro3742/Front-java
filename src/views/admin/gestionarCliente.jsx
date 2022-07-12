import React, { useState, useEffect } from "react";
import "../../styles/gestionarCliente.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';


function GestionarCliente() {
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
    <div className="centrar">
    <div className='divGlobal'>
        <div className='divTitle'>
            <h4 className='title'>Usuarios Bloqueados</h4>
        </div>

      </div>
    </div>
 );
  
}

export default GestionarCliente;