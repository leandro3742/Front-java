import React from 'react';
import "../../styles/contenidosDisponibles.css";
import Swal from 'sweetalert2';
import Reporte from './reportes';
function HomeGenerador(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <h2 className='title'>|Mostrara las Ganancias|</h2>
                <Reporte/>
            </div>
        </div>
    )
}
export default HomeGenerador;