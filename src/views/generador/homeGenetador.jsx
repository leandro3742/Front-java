import React, { useEffect, useState } from 'react';
import "../../styles/contenidosDisponibles.css";
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Reporte from './reportes';
function HomeGenerador() {

    const url = 'http://localhost:8080/generadorcontenidos/obtenerGanancias/' + JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
    const [todos, setTodos] = useState()
    const [mostrar, setMostrar] = useState(false)
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON);
        console.log(todos);
    }
    useEffect(() => {
        fetchApi()
    }, [])
    function mes(x){
        if (x==1) return "Enero";
        if (x==2) return "Febrero";
        if (x==3) return "Marzo";
        if (x==4) return "Abril";
        if (x==5) return "Mayo";
        if (x==6) return "Junio";
        if (x==7) return "Julio";
        if (x==8) return "Agosto";
        if (x==9) return "Septiembre";
        if (x==10) return "Octubre";
        if (x==11) return "Noviembre";
        if (x==12) return "Diciembre";
    }

    return (
        <div className='d-flex flex-column align-items-center '>
            {!todos ? <div className='container'></div> : <div className='container'>
                {todos.map((elem) => {
                    return <div className="card">
                    <div >
                        <Accordion className="df" defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header ><h1 className="title">Mes: {mes(elem.mes)}</h1></Accordion.Header>
                                <Accordion.Body>
                                        <ul className="ul texto">Ganancias de Suscripciones mensuales:$ {elem.gananciaMensual}</ul>
                                        <ul className="ul texto">Ganancias PPV:$ {elem.gananciaMensualPPV} </ul>
                                </Accordion.Body>
                            </Accordion.Item >
                        </Accordion>
                        </div>
            </div>}
            )}
            </div>}
        </div>
        )
}
export default HomeGenerador;