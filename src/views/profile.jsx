import React from "react";

function Profile() {
    const [usu,setusu] = useState()
    const [nombre, setNombre] = useState()
    const [Pass, setPass] = useState()
    const [Edit, setedit] = useState(false)
    
    useEffect(() => {
        if (sessionStorage.getItem("usuario")) {
            setusu(JSON.parse(sessionStorage.getItem("usuario")));
            if (usu.tipoUsuario === "GENERADOR_CONTENIDO") {
                setMostrar(true)
            }
        }
    }, [])
    
    return( 
        <div>
            <div>
                <h1>{usu.email}</h1>
                <h1>{usu.contrasenia}</h1>
                <button onClick={setedit(true)} className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">Agregar Contenido</button>
            </div>
                <div>
                    <input type="text" placeholder="Nombre" onChange={(e)=> setNombre(e.target.value)}/>
                    <input type="text" placeholder="Nombre" onChange={(e)=> setPass(e.target.value)} />
                    <button className="m-auto col-lg-4 col-10 my-2 btn btnConfirmar">Editar</button>
                </div>
        </div>
    )
}

export default Profile;
