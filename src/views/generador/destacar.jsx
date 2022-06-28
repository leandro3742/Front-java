import React from 'react'
import "../../styles/contenidosDisponibles.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function destacar(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <u><h2>Destacar Contenido</h2></u>
            </div>

            <div>
            </div>

            <div className='divlabel'>
                <input type="checkbox" className='inputs'></input>
            </div>
        </div>
    )
}

export default destacar;