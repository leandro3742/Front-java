import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import '../styles/films.css';

function Films() {

    const url = "http://localhost:8080/categorias";
    const [todos, setTodos] = useState();
    const [peliculas, setPeliculas] = useState();
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
    //buscar
        const buscar = (x) => {
            const url = "http://localhost:8080/contenidos/listarPorTipoCat/"+x+"/PELICULA";
            const [peliculas, setPeliculas] = useState()
          
            const fetchp = async () => {
              const response = await fetch(url)
              const responseJSON = await response.json()
              setPeliculas(responseJSON)
        }
    }
    //onChange={() => buscar(todo.id)}
    useEffect(() => {
        fetchApi();
        //fetchp();
    }, [])
    return (
        <div className="mx-5 mt-3">
            <div className="d-flex align-items-center">
                <FormControl style={{ width: "300px", backgroundColor: "grey", color: "white", border: "white" }} className="mx-5 rounded">
                    <InputLabel className="texto">Categorías</InputLabel>
                    <Select   style={{ color: "white" }}>
                    {!todos ? 'cargando ...' :
                        todos.map((todo, index) => {
                            return <MenuItem className="texto" onChange={() => buscar(todo.id)}>{todo.nombre}</MenuItem>
                        })
                    }
                    </Select>
                </FormControl>
            </div>
            {!peliculas ? 'cargando ...' :
                    peliculas.map((pelicula, index) => {
                        return <a key={pelicula.id}>{pelicula.nombre}</a>
                    })
            }
        </div>
    );
}

export default Films;
