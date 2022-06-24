import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import "../styles/register.css"
import add from "../images/addretro.png";
function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    const saveElement = () => { };
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-5 d-flex flex-column align-items-center0">
                <div className="d-flex">
                    <u className="u"><h3 className="text-center fuenteT">Registro de usuario</h3></u>
                    <img src={add} className="addimg"></img>
                </div>

                <form className="divGlobal margenb">
                    <div>
                        <input onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" placeholder="Email" />
                    </div>
                    <div>
                        <input onChange={(e) => setName(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" placeholder="Nombre" />
                    </div>
                    <div>
                        <input onChange={(e) => setLastName(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" placeholder="Apellido" />
                    </div>
                    <div>
                        <input onChange={(e) => setPassword(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" placeholder="Contraseña" type='password' />
                    </div>
                    <div>
                        <input className="m-2 col-lg-5 col-md-5 col-11 fuente" placeholder="Repetir contraseña" type='password' />
                    </div>
                </form>
                <button onClick={saveElement} className="m-auto my-2 btn fuente btnConfirmar" type="submit">
                    Registrarme
                </button>
            </div>
        </div>
    );
}

export default Register;
