import React from 'react'
import "../../styles/contenidosDisponibles.css";
import List from "./miLista";

function miContenido(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <u><h2>Mi Contenido</h2></u>
            </div>
            <div>
                <List /> 
            </div>
        </div>
    )
}

export default miContenido;