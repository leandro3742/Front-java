import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import "../styles/register.css"
function Register() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");


    const saveElement = () => {};
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <Paper elevation={5} className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0 paper">
                <h3 className="text-center fuenteT">Registro</h3>
                <form className="row d-flex justify-content-center">
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" label="Email" />
                    <TextField onChange={(e) => setName(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" label="Name" />
                    <TextField onChange={(e) => setLastName(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" label="Last name"/>
                    <TextField onChange={(e) => setPassword(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11 fuente" label="Contraseña" type='password'/>
                    <TextField className="m-2 col-lg-5 col-md-5 col-11 fuente" label="Repetir contraseña" type='password'/>
                </form>
                <button onClick={saveElement} className="m-auto my-2 w-25 btn btn-primary fuente" type="submit">
                    Registrarme
                </button>
            </Paper>
        </div>
    );
}

export default Register;
