import React from 'react'
import "../../styles/contenidosDisponibles.css";

function altaContenido(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <u><h2>Alta Contenido</h2></u>
            </div>
            <div className='divlabel'>
                <label>
                    Nombre:
                </label>
                <input type="text" className='inputs'></input>
            </div>
            <div className='divlabel'>
                <label>
                    Foto de portada:
                </label>
                <input type="image" className='inputs'></input>
            </div>
            <div className='divlabel'>
                <label>
                    Descripsión:
                </label>
                <input type="text" className='inputs'></input>
            </div>

        </div>
    )
}

export default altaContenido;