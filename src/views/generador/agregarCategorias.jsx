import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoriasContenido() {
    const { id } = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchFunction(url){
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchFunction('http://localhost:8080/contenidos/'+id);
    }, []);

    return (
    <div>
        {data && (
            <div className="d-flex flex-column align-items-center">
                <img style={{height: "300px"}} src={data.fotoPortada} alt="" />
            </div>
      )}
    </div>
  );
}

export default CategoriasContenido;
