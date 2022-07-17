import React, { useState, useEffect } from "react";
import "../../styles/altaGenerador.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import Swal from 'sweetalert2'
function AltaGenerador() {
  //para seguridad
  const [mostrar, setMostrar] = useState(false);
    //input
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //fet
    const fetchApi = async () => {
     
  }
    //funcion
    //psot
  const saveElement = () => { 
    console.log(nombre)
    fetchFunction("http://localhost:8080/generadorcontenidos/agregarGeneradorContenido", buildHeader("POST",{"contrasenia":password,"email":email,"nombre":nombre}))
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
            <h4 className='title'>Nuevo Generador de Contenido</h4>
        </div>
        <div >
        <div>
        
        <input className="inputs" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        </div>
        <div  >
      
        <input className="inputs" onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
        </div>
        <div >     
        <input type="password" className="inputs" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
        </div>
        </div>
        <div >
        <button className="con" onClick={saveElement}  >Confirmar</button>   
       
        </div>    
    </div>
  : <div><div className='centrar'><h4 className='title'>No tienes persmisos</h4></div></div>}
    </div>
    </body>
  )
}

export default AltaGenerador