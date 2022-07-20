import React, { useState, useEffect } from "react";
import "../../styles/altaPersona.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import Swal from 'sweetalert2'
import { Link, useParams } from "react-router-dom";
import TodoContenido from "./todoContenido";
function EditarPersona() {
  //para seguridad
  const [mostrar, setMostrar] = useState(false);
    //input
    const [nombre, setNombre] = useState("");
    const [tipo, settipo] = useState("");
    const { id } = useParams();
    


    //tipo
    const funciontipo = (e) => {
        settipo(e.target.value);
       console.log(e.target.value);
    }
    //fet
    const fetchApi = async () => {
     
  }
   //Para editar
  const saveElement = () => {

    async function fetchFunction(url) {
        const response = await fetch(url,{method: "PUT",headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    "id": id,
                    "nombre": nombre,
                    "tipoElenco": tipo
                })
            }).then(result => {
                if (result == "ERROR") {
                    Swal.fire("Error");
                }
                else {
                    console.log("Ok", result);
                    Swal.fire('Persona editado con exito');
                }
            }).catch(err => console.log(err));
    }
    fetchFunction('http://localhost:8080/personas/editarPersona');
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
            <h4 className='title'>Editar Persona ID: {id}</h4>
        </div>
        <div>
        <div>
        
        <input className="inputs" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        </div>
        <div>
        <select className="inputsdes"  onChange={funciontipo}>
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

export default EditarPersona