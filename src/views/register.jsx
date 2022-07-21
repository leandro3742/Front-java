import React, { useState } from "react";
import "../styles/register.css"
import add from "../images/addretro.png";
import { fetchFunction } from "../utils/fetch";
import { buildHeader } from "../utils/fetch";
import Swal from 'sweetalert2';
function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const saveElement = () => {
        let url = "http://localhost:8080/usuarios/agregarUsuario";
        fetchFunction(url, buildHeader("POST", {
            "nombre": name,
            "email":email,
            "contrasenia":password
        })).then(result => {
                if (result == "ERROR") {
                    Swal.fire("Error");
                }
                else {
                    console.log("Ok", result);
                    Swal.fire('Registro con exito');
                    window.location.replace("/login");
                }
            }).catch(err => console.log(err));
        };

    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-5 d-flex flex-column align-items-center0">
                <div className="d-flex">
                    <u className="u"><h3 className="text-center fuenteT">Registro de usuario</h3></u>
                    <img src={add} className="addimg"></img>
                </div>

                <form className="divGlobal margenb">                
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className='inputs fuenteL' placeholder="Email"></input>
                    <input type="text" onChange={(e) => setName(e.target.value)} className='inputs fuenteL' placeholder="Nombre"></input>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} className='inputs fuenteL' placeholder="Contraseña"></input>
                </form>
                <button onClick={saveElement} className="m-auto my-2 btn fuente btnConfirmar" type="submit">
                    Registrarme
                </button>
            </div>
        </div>
    );
}

export default Register;
