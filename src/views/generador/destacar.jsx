import React from 'react'
import "../../styles/contenidosDisponibles.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import List from "./miLista";

function destacar(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <u><h2>Destacar Contenido</h2></u>
            </div>
            <div>
                <h3>Mi cintenido</h3>
                <List /> 
            </div>

        </div>
    )
}

export default destacar;