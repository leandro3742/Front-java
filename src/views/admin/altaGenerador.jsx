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
    <div className='divGlobal'>
        <div className='divTitle'>
            <b><u><h4 className='title'>Nuevo Generador de Contenido</h4></u></b>
        </div>
        <div className='divInputs'>
            <div className='divlabel'>
                <label>
                    Nombre: 
                </label>
                <input class="inputs" onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
             
            </div>
            <div className='divlabel'>
                <label>
                    Correo electrónico: 
                </label>
                <input class="inputs" onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
            </div>
            <div className='divlabel'>
                <label>
                    Contraseña: 
                </label>
                <input class="inputs" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
            </div>
            <div className='divBotones'>
                <button onClick={saveElement}  className='btnConfirmar'>Confirmar</button>
                
            </div>
        </div>
    </div>
  )
}

export default AltaGenerador