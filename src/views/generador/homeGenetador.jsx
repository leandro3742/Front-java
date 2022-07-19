import React from 'react';
import "../../styles/contenidosDisponibles.css";
import Swal from 'sweetalert2';
import Reporte from './reportes';
function HomeGenerador(){
    return (
        <div className='centrar'>
                <h2 className='title'>|Mostrara las Ganancias|</h2>
                <Reporte/>
        </div>
    )
}
export default HomeGenerador;