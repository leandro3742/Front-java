import React, { useState } from "react";
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveElement = () => { };
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <div className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
                <div className="divtitulo">
                    <u className="u"><h3 className="text-center fuenteT">Inicio de sesión</h3></u>
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
