import React , { useState, useEffect }from "react";

function Profile() {
    const [usu,setusu] = useState()
    const [nombre, setNombre] = useState()
    const [Pass, setPass] = useState()
    const [Edit, setedit] = useState(false)
    
    useEffect(() => {
        console.log(sessionStorage.getItem("usuario"))
        if (sessionStorage.getItem("usuario")) {
            setusu(JSON.parse(sessionStorage.getItem("usuario")));
        }
    }, [])
    
    return( 
        <div>
            {!usu ? 'Cargando ...' :
                <div className="divGlobal">
                    {/* Falta el Nombre del usuario jeje*/ }
                    <h3 className="title">{usu.email}</h3>
                    <h3 className="title">{usu.contrasenia}</h3>
                    <button onClick={setedit(true)}> Editar</button>
                </div>
            }
        </div>
    )
}

export default Profile;
