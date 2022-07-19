import React, { useState, useEffect } from "react";
import "../../styles/altaGenerador.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import Swal from 'sweetalert2'

function AltaPersona() {
  //para seguridad
  const [mostrar, setMostrar] = useState(false);
    //input
    const [nombre, setNombre] = useState("");
  


    //tipo
    const funciontipo = (e) => {
        settipo(e.target.value);
       console.log(e.target.value);
    }
    //fet
    const fetchApi = async () => {
     
  }
    //funcion
    //psot
  const saveElement = () => { 
    console.log(nombre)
    fetchFunction("http://localhost:8080/personas/agregarPersona", buildHeader("POST",{"nombre":nombre,"tipo_elenco":tipo}))
    .then(result => {
        if(result=="ERROR"){
          Swal.fire('Error');
        } 
        else{
          Swal.fire('Creado Correcto');
            console.log("Ok");
           
        }
    }).catch(err => console.log(err));
};
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
      {mostrar ?
    <div className='divGlobal'>
        <div>
            <h4 className='title'>Nueva Persona</h4>
        </div>
        <div>
        <div>
        
        <input className="inputs" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        </div>
        <div>
        <select className="form-control title" onChange={funciontipo}>
                <option value="DIRECTOR" selected className='title'>DIRECTOR</option>
                <option value="ACTOR" selected className='title'>ACTOR</option>
                <option value="ACTRIZ" selected className='title'>ACTRIZ</option>
                <option value="PRODUCTOR" selected className='title'>PRODUCTOR</option>
        </select>
        </div>
       
        </div>
        <div>
        <button className="con" onClick={saveElement}>Confirmar</button>   
       
        </div>    
    </div>
  : <div><div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}
    </div>
    </body>
  )
}

export default AltaPersona