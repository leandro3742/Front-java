import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { compose } from "@mui/system";
function CategoriasContenido() {

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
        fetchFunction('http://localhost:8080/categorias');
        console.log(cat);
    }
    function categoriasC() {
        async function fetchFunction(url) {
            const response = await fetch(url);
            const responseJSON = await response.json()
            setCatC(responseJSON)
        }
        fetchFunction('http://localhost:8080/contenidos/listarCategorias/1');
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
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: {}
                });
            await response.json()
            console.log(response.json());
            }
            fetchFunction('http://localhost:8080/contenidos/agregarCategoria/'+data.id+'/'+age);
            categoriasC();
            Swal.fire('Categoria Agregada');
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
                        Swal.fire('Categoria Eliminada');
                    }
                }).catch(err => console.log(err));
            await response.json()
            }
            fetchFunction('http://localhost:8080/contenidos/eliminarCategoria/'+data.id+'/'+age);
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
                    <img style={{ height: "300px" }} src={data.fotoPortada} alt="" />
                    <label>{data.nombre}</label>
                </div>
            )}
            <div>
                {!cat ? 'Cargando ...' :
                    <Select style={{ color: "white" }} value={age} onChange={(e) => setAge(e.target.value)}>
                        {cat.map((elem) => {
                            return (
                                <MenuItem key={elem.id} value={elem.id} className="texto">
                                    {elem.nombre}
                                </MenuItem>
                            );
                        })}
                    </Select>
                }
                <button onClick={agregarcat}>Agregar categoria</button>
                <button onClick={eliminarcat}>Eliminar categoria</button>
            </div>
            <div>
                <p>Categorias Agregadas</p>
                {!catC ? <p></p> :
                    <div>
                            {catC.map((elem) => {
                                return <h3>{elem.nombre}</h3>
                            })}
                    </div>
                }
            </div>
        </div>
    );
}

export default CategoriasContenido;
