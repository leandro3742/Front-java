import React from "react";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Pagos() {
    const [precio, setprecio] = useState("");
    const [pago, setpago] = useState("");
    const [gc, setgc] = useState(null);
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
            let aux = JSON.parse(sessionStorage.getItem("usuario"));
            console.log(aux)
            if (aux.tipoUsuario === "GENERADOR_CONTENIDO") {
                setMostrar(true)
            }
        }

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
                }).then(result => {
                    if (result == "ERROR") {
                        Swal.fire("Error");
                    }
                    else {
                        console.log("Ok", result);
                        Swal.fire('Precio editado con exito');
                    }
                }).catch(err => console.log(err));
        }
        fetchFunction('http://localhost:8080/generadorcontenidos/editar');
    };

    
    const savepago = () => {
        console.log(gc);
        gc.metodoPago = pago;
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
                }).then(result => {
                    if (result == "ERROR") {
                        Swal.fire("Error");
                    }
                    else {
                        console.log("Ok", result);
                        Swal.fire('Metodos de pago editads con exito');
                    }
                }).catch(err => console.log(err));
        
        }
        fetchFunction('http://localhost:8080/generadorcontenidos/editar');
    };

    return (
        <div className="container">
            {mostrar ?
            <div>
                <div className='d-flex align-items-center justify-content-center' >
                    <input type="number" style={{maxWidth: '20%'}} onChange={(e) => setprecio(e.target.value)} className='inputs' placeholder="Precio"></input>
                    <button onClick={saveElement} style={{maxWidth: '40%'}} className="btnConfirmar">Precio mensual</button>
                </div>
                <div className='d-flex align-items-center justify-content-center' >
                    <input type="text" style={{maxWidth: '40%',}}  contenteditable="true" onChange={(e) => setpago(e.target.value)} className='inputs' placeholder="Pagos"></input>
                    <button onClick={savepago} style={{maxWidth: '20%'}}className="btnConfirmar">Tipos pago</button>
                </div>
            </div>
            : <div><div className='centrar'><h4 className='title'>No tiene persmisos</h4></div></div>}
        </div>
    )

}

export default Pagos;
