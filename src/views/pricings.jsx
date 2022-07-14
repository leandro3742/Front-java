import React, { useState, useEffect } from 'react'
import PaypalCheckoutButton from '../component/paypalCheckoutButton'

function Pricings(){
    const [generators, setGenerators] = useState([])
    const [mostrar, setMostrar] = useState(false);
    const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario")))

    useEffect(() => {
        sessionStorage.getItem("usuario") ? setMostrar(true) : false;
        async function getGC(url){
            const response = await fetch(url);
            setGenerators(await response.json())
        }
        getGC('http://localhost:8080/generadorcontenidos/listar')
    }, []);

    const styles = {
        border: '1px solid black',
        backgroundColor: 'white',
        borderRadius: '10px',
        color: 'black'
    }

    const isOk = (elem) => {
        let day = new Date().getDate()
        let month = new Date().getMonth()+1
        let year = new Date().getFullYear();

        if(elem.tipoSub === "SEMANAL"){
            day = day + 7;
            if(day >= 31){
                day = day - 31
                month += 1;
            }
        }
        else if(elem.tipoSub === "MENSUAL"){
            month += 1;
            if(month > 12){
                month = 1;
                year += 1
            }
        }
        else{
            year += 1
        }

        async function subscribirse(url){
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    fechaVencimiento: `${day}-${month}-${year}`,
                    monto: elem.precio,
                    tipoSuscripcion: elem.tipoSub
                })
            });
            console.log(await response)
            alert("Subscripcion creada con exito")
        }
        subscribirse(`http://localhost:8080/suscripciones/agregarSuscripcion/${elem.id}/${usuario.id}`)
    }
    return (
    <div className='m-0 row p-3 d-flex flex-column flex-lg-row flex-md-row justify-content-around align-items-center'>
        {mostrar && generators.map((elem, index) => {
            return(
                <div key={index} style={styles} className='col-lg-2 col-md-3 col-10 shadow p-1 text-center'>
                    <h3 style={{color: 'black'}}>{elem.nombre}</h3>
                    <div style={{backgroundColor: '#d1d7db'}} className='rounded-3 px-1 shadow-lg col-10 m-auto'>
                        <h5 className='text-primary'><b>Elegir suscripcion</b></h5>
                        <div className=''>
                            <div>
                                <h5><b>Semanal</b></h5>
                                <h5>Precio: ${elem.precio / 4} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={{id: elem.id, tipoSub: "SEMANAL", nombre: elem.nombre, precio: elem.precio / 4}}/>
                            </div>
                            <div>
                                <h5><b>Mensual</b></h5>
                                <h5>Precio: ${elem.precio} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={{id: elem.id, tipoSub: "MENSUAL", nombre: elem.nombre, precio: elem.precio}}/>
                            </div>
                            <div>
                                <h5><b>Anual</b></h5>
                                <h5>Precio: ${elem.precio * 12} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={{id: elem.id, tipoSub: "ANUAL", nombre: elem.nombre, precio: elem.precio * 12}}/>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Pricings