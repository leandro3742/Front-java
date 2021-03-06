import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Swal from 'sweetalert2'

function PersonasContenido() {

    const { id } = useParams();
    const [data, setData] = useState();
    const [cat, setCat] = useState();
    const [catC, setCatC] = useState();
    function contenido() {
        async function fetchFunction(url) {
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchFunction('http://localhost:8080/contenidos/' + id);
        console.log(data);
    }
    function categorias() {
        async function fetchFunction(url) {
            const response = await fetch(url);
            const responseJSON = await response.json()
            setCat(responseJSON)
        }
        fetchFunction('http://localhost:8080/personas');
        console.log(cat);
    }
    function categoriasC() {
        async function fetchFunction(url) {
            const response = await fetch(url);
            const responseJSON = await response.json()
            setCatC(responseJSON)
        }
        fetchFunction('http://localhost:8080/contenidos/listarPersonas/'+id);
        console.log(catC);
    }
    useEffect(() => {
        categorias();
        contenido();
        categoriasC();
    }, []);

    const [age, setAge] = React.useState("");
    function agregar() {
        let bool = true;

        for (let i=0; i < catC.length; i++) {
            const e = catC[i];
            if(e.id == age){
                bool=false;
            }
        }
        if(bool){
            async function fetchFunction(url) {
                const response = await fetch(url,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {}
                });
            await response.json()
            console.log(response.json());
            }
            fetchFunction('http://localhost:8080/contenidos/agregarPersona/'+data.id+'/'+age);
            categoriasC();
            Swal.fire('Elenco Actualizado');
        }
    }
    
    function agregarcat(){
        agregar();
        categoriasC();
    }
    function eliminar() {
            async function fetchFunction(url) {
                const response = await fetch(url,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {}
                }).then(result => {
                    if (result == "ERROR") {
                        Swal.fire("Error");
                    }
                    else {
                        console.log("Ok", result);
                        Swal.fire('Elenco Actualizado');
                    }
                }).catch(err => console.log(err));
            await response.json()
            }
            fetchFunction('http://localhost:8080/contenidos/eliminarPersona/'+data.id+'/'+age);
            categoriasC();
    }
    function eliminarcat(){
        eliminar();
        categoriasC();
    }
    return (
        <div className="d-flex flex-column align-items-center">
            {data && (
                <div className="d-flex flex-column align-items-center">
                    <h4 className='title'>{data.nombre}</h4>
                    <img style={{ height: "300px" }} src={data.fotoPortada} alt="" />
                </div>
            )}
            <div>
                {!cat ? 'Cargando ...' :
                <FormControl style={{ width: "300px", backgroundColor: "grey", color: "white", border: "white" }} className="mx-5 rounded">
                <InputLabel className="fuenteL">Elencos</InputLabel>
                    <Select style={{ color: "white" }} value={age} onChange={(e) => setAge(e.target.value)}>
                        {cat.map((elem) => {
                            return (
                                <MenuItem key={elem.id} value={elem.id} className="fuenteL">
                                    <h1 className="fuenteL">{elem.nombre} {elem.tipoElenco}</h1>
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                }
                <div clasasName="d-flex flex-column align-items-center">
                    <button onClick={agregarcat} className="btnConfirmar">Agregar</button>
                    <button onClick={eliminarcat} className="btnConfirmar">Eliminar</button>
                </div>
            </div>
            <div>
                <h4 className='title'>Elenco</h4>
                {!catC ? <p></p> :
                    <div>
                            {catC.map((elem) => {
                                return <h3>{elem.nombre} {elem.tipoElenco}</h3>
                            })}
                    </div>
                }
            </div>
        </div>
    );
}

export default PersonasContenido;
