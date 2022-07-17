import React from "react";
import { useState, useEffect } from 'react';
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";

function Pagos() {
    const [precio, setprecio] = useState("");
    const [gc, setgc] = useState(null);

    useEffect(() => {
        async function fetchFunction(url) {
            const response = await fetch(url);
            setgc(await response.json())
        }
        fetchFunction('http://localhost:8080/generadorcontenidos/' + JSON.parse(sessionStorage.getItem("usuario")).idUsuario);
    }, [])

    const saveElement = () => {
        console.log(gc);
        gc.precio = precio;
        console.log(gc);
        //fetchFunction(url, buildHeader("PUT", {
        //  gc
        //}))
        async function fetchFunction(url) {
            const response = await fetch(url,{method: "PUT",headers: {"Content-Type": "application/json"},
                    body:JSON.stringify({
                        "id": gc.id,
                        "contrasenia": gc.contrasenia,
                        "email": gc.email,
                        "ganancia": gc.ganancia,
                        "metodoPago": gc.metodoPago,
                        "nombre": gc.nombre,
                        "precio": gc.precio
                    })
                });
        }
        fetchFunction('http://localhost:8080/generadorcontenidos/editar');
        window.location.replace("/generador/");
    };
    return (
        <div>
            <div>
                <input type="number" onChange={(e) => setprecio(e.target.value)} className='inputs' placeholder="Precio"></input>
            </div>
            <button onClick={saveElement} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">
                Precio subcripsion mensual
            </button>
        </div>
    )

}

export default Pagos;
