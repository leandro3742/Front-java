import React from "react";
import { useState, useEffect } from 'react';

function Pagos() {
    const [precio, setprecio] = useState("");
    const saveElement = () => {
        console.log();
        let url = "http://localhost:8080/" + JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
        fetchFunction(url, buildHeader("PUT", {
            "precio": precio,
        }))
            .then(result => {
                if (result == "ERROR") {
                    alert("Error");
                }
                else {
                    console.log("Ok", result);
                    Swal.fire('Contenido Agregado');
                    window.location.replace("/generador/");
                }
            }).catch(err => console.log(err));
    };
    return (
        <div>
            <div>
            <input type="text" onChange={(e) => setprecio(e.target.value)} className='inputs' placeholder="Precio"></input>
            </div>
            <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">
                    Precio subcripsion mensual
                </button>
        </div>
    )

}

export default Pagos;
