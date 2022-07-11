import React, { useState, useEffect } from "react";
import "../../styles/altaGenerador.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
function AltaGenerador() {
    //input
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //funcion
    //psot
  const saveElement = () => { 
    console.log(nombre)
    fetchFunction("http://localhost:8080/generadorcontenidos/agregarGeneradorContenido", buildHeader("POST",{"contrasenia":password,"email":email,"nombre":nombre}))
    .then(result => {
        if(result=="ERROR"){
        alert("Error en la creacion");
        } 
        else{
            console.log("Ok");
           
        }
    }).catch(err => console.log(err));
};
  return (
    <div class="centrar">
    <div class='divGlobal'>
        <div class='divTitle'>
            <h4 class='title'>Nuevo Generador de Contenido</h4>
        </div>
        
        <div class='div'>
        <label class='label'>
        Nombre: 
        </label>
        <input class="inputs" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <label class='label'>
        Email: 
        </label>
        <input class="inputs" onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
        <label class='label'>
        Contraseña: 
        </label>
        <input type="password" class="inputs" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
        </div>
        <div >
        <button onClick={saveElement}  class='btnConfirmar'>Confirmar</button>     
        </div>    
    </div>
    </div>
  )
}

export default AltaGenerador