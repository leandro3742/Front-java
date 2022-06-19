import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveElement = () => {};
    return (
        <div style={{ height: "90vh" }} className="m-0 row ">
            <Paper elevation={5} className="m-auto col-10 col-lg-6 d-flex flex-column align-items-center0">
                <h3 className="text-center">Log in</h3>
                <div className="row d-flex justify-content-center">
                    <TextField onChange={(e) => setEmail(e.target.value)} className="m-2 col-10" label="Email" />
                    <TextField onChange={(e) => setPassword(e.target.value)} className="m-2 col-10" label="Password" />
                </div>
                <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btn-primary">
                    Log in
                </button>
            </Paper>
        </div>
    );
}

export default Login;
