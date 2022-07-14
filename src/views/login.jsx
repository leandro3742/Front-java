import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { fetchFunction, fetchLogin } from "../utils/fetch";
import { buildHeader } from "../utils/fetch";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function rf(x){
        if(x === "GENERADOR_CONTENIDO"){
            window.location.replace("/generador/");
        } else{ 
            window.location.replace("/");
        }
    }
    const saveElement = () => { 
        fetchLogin("http://localhost:8080/sistema/login", buildHeader("POST",{"email": email, "contrasenia": password}))
        .then(result => {
            if(result=="ERROR"){
            alert("Usuario incorrecto");
            } 
            else{
                console.log("Ok",result);
                sessionStorage.setItem("usuario",JSON.stringify(result));
                props.setTipoUsuario(result.tipoUsuario);
                props.setIsLogged(true);
                rf(result.tipoUsuario);
            }
        }).catch(err => console.log(err));
    };
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
                <div className="divtitulo">
                    <u className="u"><h2 className="text-center fuenteT">Inicio de sesión</h2></u>
                </div>
                <div className="row d-flex justify-content-center divtitulo">
                    <input onChange={(e) => setEmail(e.target.value)} className="m-2 col-10 fuenteL" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="m-2 col-10 fuenteL" placeholder="Password" type="password"/>
                </div>
                <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">
                    Iniciar sesión
                </button>
            </div>
        </div>
    );
}

export default Login;
