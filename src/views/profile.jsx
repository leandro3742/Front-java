import React , { useState, useEffect }from "react";

function Profile() {
    const [usu,setusu] = useState()
    const [nombre, setNombre] = useState("")
    const [Pass, setPass] = useState("")
    const [Edit, setedit] = useState(false)
    const url = 'http://localhost:8080/usuarios/' + JSON.parse(sessionStorage.getItem("usuario")).idUsuario;
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setusu(responseJSON)
    }

    useEffect(() => {
        console.log(sessionStorage.getItem("usuario"))
        if (sessionStorage.getItem("usuario")) {
            fetchApi();
        }
    }, [])

    function edit (){
        if(!Edit)
        setedit(true)
        else 
            setedit(false)
    }
    function recarga(){
        fetchApi();
    }
    
    function editar (){
        if(nombre!= ""){
            usu.nombre= nombre;
        }
        if(Pass!=""){
            usu.contrasenia=Pass;
        }
        async function fetchFunction(url) {
            const response = await fetch(url,{method: "PUT",headers: {"Content-Type": "application/json"},
                    body:JSON.stringify({
                        "id":usu.id,
                        "activo":usu.activo,
                        "bloqueado":usu.bloqueado,
                        "contrasenia":usu.contrasenia,
                        "email": usu.email,
                        "nombre": usu.nombre,
                        "pago": usu.pago,
                        "tipoUsuario": usu.tipoUsuario,
                    })
                }).then(result => {
                    if (result == "ERROR") {
                        Swal.fire("Error");
                    }
                    else {
                        console.log("Ok", result);
                        Swal.fire('Precio editado con exito');
                        setNombre("");
                        serPass("");
                    }
                }).catch(err => console.log(err));
        }
        fetchFunction('http://localhost:8080/usuarios/editarUsuario');
        recarga();
        fetchApi();
    }

    return( 
        <div>
            {!usu ? 'Cargando ...' :
            <div>
                <div className="divGlobal">
                    <h3 className="title">Nombre: {usu.nombre}</h3>
                    <h3 className="title">Contraseña:{usu.contrasenia}</h3>
                    <h3 className="title">Email: {usu.email}</h3>
                    <button onClick={edit} className="btnConfirmar"> Editar</button>
                </div>
                <div>
                    {!Edit?<div></div>: <div className="divGlobal">
                    <input type="text" onChange={(e) => setNombre(e.target.value)} className='inputs fuenteL' placeholder="Nombre"></input>
                    <input type="text" onChange={(e) => setPass(e.target.value)} className='inputs fuenteL' placeholder="Contraseña"></input>
                    <button onClick={editar} className="btnConfirmar">Editar</button>
                    </div> }
                </div>
            </div>
            }
        </div>
    )
}

export default Profile;
