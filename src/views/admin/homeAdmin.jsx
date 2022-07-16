import React, { useState, useEffect } from "react";
import "../../styles/homeAdmin.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
function HomeAdmin() {

  return ( 
    <body className="body">
    <div className="centrar">
    <div>
      <h4 className='h4'>Administrador</h4>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/nuevoGenerador">Nuevo Generador Contenido</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/aprobarContenido">Aprobar Contenido</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/gestionarContenido">Desbloquear Contenido</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/todoContenido">Bloquear Contenido</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/bloquearUsuario">Bloquear Usuario</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/desbloquearUsuario">Desbloquear Usuario</Link></button>
    </div>
    <div>
    <button  className="btnConfirmar"><Link className="link" to="/admin/categoria">Nueva Categoría</Link></button>
    </div>
    </div>
    </body>
 );
  

}
export default HomeAdmin;