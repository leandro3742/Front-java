import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import '../styles/series.css';
import sr from "../images/seriestitulo.png";

const fetchCategories = async (url) => {
    const response = await fetch(url)
    if(response.status < 300)
        return await response.json();
    return "ERROR"
}
const fetchPelicula = async (url) => {
    const response = await fetch(url)
    if(response.status < 300)
        return await response.json();
    return "ERROR"
}


function Series() {
    const [peliculas, setPeliculas] = useState([]);
    const [categories, setCategories] = useState([])
    const [imageSize, setImageSize] = useState({});

    const buscar = (e) => {
        console.log(e.target.value)

        const url = "http://localhost:8080/contenidos/listarPorTipoCat/"+e.target.value+"/SERIE";
        fetchPelicula(url)
        .then(res => {
            if(res !== "ERROR")
                setPeliculas(res)
        });
    }
    useEffect(() => {
        fetchCategories('http://localhost:8080/categorias')
        .then(res => {
            if(res !== "ERROR") setCategories(res)
        })
        if (window.screen.width > 730) {
            setImageSize({ maxHeight: "175px", maxWidth: "300px" });
        } else {
            setImageSize({ maxHeight: "175px", maxWidth: "150px" });
        }
    }, [])

    return (
        <div className="mx-5 mt-3">
            <div className="d-flex align-items-center">
                <h3 className="texto"><img src={sr} style={{width: "200px"}}/></h3>
                <FormControl style={{ width: "300px", backgroundColor: "grey", color: "white", border: "white" }} className="mx-5 rounded">
                    <InputLabel className="texto">Categorías</InputLabel>
                    <Select style={{ color: "white" }} onChange={buscar}>
                    {categories.map((todo, index) => {
                        return <MenuItem key={index} className="texto" value={todo.id} >{todo.nombre}</MenuItem>
                    })}
                    </Select>
                </FormControl>
            </div>
            {peliculas.length > 0 
                ?
                <div className="d-flex flex-wrap justify-content-center mt-2 ">
                {peliculas.map((elem, index) => {
                    return (
                        <div style={imageSize} key={index} className="m-2">
                            <Link to={`/detail/${elem.id}`} ><img style={imageSize} className="frontPage rounded" src={elem.fotoPortada} key={index} /></Link>
                            <br></br>
                            <span>{elem.nombre}</span>
                            <br></br>
                        </div>
                    )
                })}
                </div>
                : <span>No se encontraron peliculas con esa categoria</span>
            }
        </div>
    );
}

export default Series;
