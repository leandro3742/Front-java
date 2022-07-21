import React, { useState, useEffect } from "react";
import "../styles/generador.css";
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2';
function subscriptions() {
    const url = 'http://localhost:8080/usuarios/listarSuscripciones/' + JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
    const [subs, setSubs] = useState();
    const [mensuales, setMensuales] = useState();
    const [PPV, setPPV] = useState();
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setSubs(responseJSON);
    }
    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
            fetchApi();
        }
    }, [])

    return (
        <div className="m-0 row d-flex justify-content-center">
            <div>
                {!subs ? <span>Aun no tiene subscripsiones</span> :
                    <div>
                        {subs.suscripciones.length > 0 ?
                            <div className="divGlobal">
                                <h3 className="title">Subcripsiones Mensuales</h3>
                                {subs.suscripciones.map((todo, index) => {
                                    return <div className="card">
                                        <div className="container">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item >
                                                    <Accordion.Header ><h5 className="h5">{todo.generadorContenidoid.nombre}</h5></Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className="ul texto">Vencimiento: {todo.fechaVencimiento}</ul>
                                                        <ul className="ul texto">Monto: {todo.monto }</ul>
                                                        <ul className="ul texto">Tipo: {todo.tipoSuscripcion}</ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                })}
                            </div>
                            : <span>Aun no tiene subscripsiones mensuales</span>}
                        {subs.payperview.length > 0 ?
                            <div className="divGlobal">
                                <h3 className="title">Subcripsiones payperview</h3>
                                {subs.payperview.map((todo, index) => {
                                    return <div className="card">
                                        <div className="container">
                                            <Accordion defaultActiveKey="0" flush>
                                                <Accordion.Item >
                                                    <Accordion.Header ><h5 className="h5">{todo.contenidoId.nombre}</h5></Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul className="ul texto">Fecha subcripsion: {todo.fechaSuscripcion}</ul>
                                                        <ul className="ul texto">Monto: {todo.monto }</ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                })}
                            </div>
                            : <span>Aun no tiene subscripsiones payperview</span>}
                    </div>
                }
            </div>
        </div>
    );
}

export default subscriptions;
