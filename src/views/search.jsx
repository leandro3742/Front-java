import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const fetchBuscar = async(url) => {
    const response = await fetch(url)
    if(response.status < 300)
        return await response.json();
    return "ERROR"
}
function Search() {
    const [buscar, setBuscar] = useState("");
    const [contenidos, setContenidos] = useState([])
    const [imageSize, setImageSize] = useState({});

    useEffect(() => {
        fetchBuscar(`http://localhost:8080/contenidos/buscarPorNombre/${buscar}`)
        .then(res => {
            if(res !== "ERROR")
                setContenidos(res)
        })
        if (window.screen.width > 730) {
            setImageSize({ maxHeight: "175px", maxWidth: "300px" });
        } else {
            setImageSize({ maxHeight: "175px", maxWidth: "150px" });
        }
    }, [buscar]);

    const styleDiv = {
        backgroundColor: "#505360",
        height: "50px",
        width: "90%",
        outline: "none",
        color: "white",
        fontSize: "23px",
    };
    return (
        <div className="d-flex flex-column justify-content-center mt-2 ">
            <input style={styleDiv} className="texto d-flex justify-content-center align-items-center rounded text-center" onChange={(e)=>setBuscar(e.target.value)} placeholder="Título o género" />
            {contenidos.length > 0 
                ?
                <div>
                {contenidos.map((elem, index) => {
                    return (
                        <div style={imageSize} key={index} className="m-2">
                            <Link to={`/detail/${elem.id}`} ><img style={imageSize} className="frontPage rounded" src={elem.fotoPortada} key={index} /></Link>
                            <span>{elem.descripcion}</span>
                        </div>
                    )
                })}
                </div>
                : <span>No se encontraron contenidos con ese nombre</span>
            }
        </div>
    );
}

export default Search;
