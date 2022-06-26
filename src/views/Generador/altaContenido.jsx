import React from 'react'
import "../styles/altaGenerador.css";
function AltaContenido() {
    return (
        <div className='divGlobal'>
            <div className='divTitle'>
                <b><u><h4 className='title'>Nuevo Generador de Contenido</h4></u></b>
            </div>
            <div className='divInputs'>
                <div className='divlabel'>
                    <label>
                        Nombre:
                    </label>
                    <input type="text" className='inputs'></input>
                </div>
                <div className='divlabel'>
                    <label>
                        Correo electrónico:
                    </label>
                    <input type="text" placeholder='ejemplo@gmail.com' className='inputs'></input>
                </div>
                <div className='divlabel'>
                    <label>
                        Contraseña:
                    </label>
                    <input type='password' className='inputs'></input>
                </div>
                <div className='divlabel'>
                    <label>
                        Repetir contraseña:
                    </label>
                    <input type='password' className='inputs'></input>
                </div>
                <div className='divBotones'>
                    <button className='btnConfirmar'>Confirmar</button>
                    <button className='btnCancelar'>Cancelar</button>
                </div>
            </div>
        </div>
    )
}

export default AltaContenido