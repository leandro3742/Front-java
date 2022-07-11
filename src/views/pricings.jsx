import React, { useState } from 'react'
import PaypalCheckoutButton from '../component/paypalCheckoutButton'

function Pricings(){
    
    const generators = [{nombre: 'Test', precio: 300}, {nombre: 'Test', precio: 300}, {nombre: 'Test', precio: 300}]
    const styles = {
        border: '1px solid black',
        backgroundColor: 'white',
        borderRadius: '10px',
        color: 'black'
    }
    const isOk = () => {
        alert("Se completo la compra de forma correcta")
    }
    return (
    <div className='m-0 row p-3 d-flex flex-column flex-lg-row flex-md-row justify-content-around align-items-center'>
        {generators.map((elem, index) => {
            return(
                <div key={index} style={styles} className='col-lg-2 col-md-3 col-10 shadow p-1 text-center'>
                    <h3 style={{color: 'black'}}>{elem.nombre}</h3>
                    <div style={{backgroundColor: '#d1d7db'}} className='rounded-3 px-1 shadow-lg col-10 m-auto'>
                        <h5 className='text-primary'><b>Elegir suscripcion</b></h5>
                        <div className=''>
                            <div>
                                <h5><b>Semanal</b></h5>
                                <h5>Precio: ${elem.precio / 4} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={{nombre: elem.nombre, precio: elem.precio / 4}} />
                            </div>
                            <div>
                                <h5><b>Mensual</b></h5>
                                <h5>Precio: ${elem.precio} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={elem} />
                            </div>
                            <div>
                                <h5><b>Anual</b></h5>
                                <h5>Precio: ${elem.precio * 12} </h5>
                                <PaypalCheckoutButton isOk={isOk} product={{nombre: elem.nombre, precio: elem.precio * 12}} />
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