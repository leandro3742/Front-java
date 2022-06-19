import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
function Register() {
    const [email, setEmail] = useState("");

    const saveElement = () => {};
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <Paper elevation={5} className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
                <h3 className="text-center">Registro</h3>
                <form className="row d-flex justify-content-center">
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Email" />
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Name" />
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Last name" />
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Name" />
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Name" />
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-lg-5 col-md-5 col-11" label="Name" />
                </form>
                <button onClick={saveElement} className="m-auto my-2 w-25 btn btn-primary" type="submit">
                    Registrarme
                </button>
            </Paper>
        </div>
    );
}

export default Register;
