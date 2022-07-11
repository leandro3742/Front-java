import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleContent } from "../fakeApi";
import { buildHeader, fetchFunction } from "../utils/fetch";
import PaypalCheckoutButton from "../component/paypalCheckoutButton";
// fetchFunction("http://localhost:8080/categoria/agregarCategoria", buildHeader("POST", {nombre: "Entra bien2"})).then(result => setData(result)).catch(err => console.log(err))

function Details() {
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
                <div>
                    {data.descripcion}
                    {data.precio}
                </div>
                <div>
                    { sessionStorage.getItem("usuario") && data.precio == 0 &&
                        <Link to={`/video/${data.id}/${data.url}`} className="btn btn-primary"> Ver ahora</Link>
                    }
                    {data.precio > 0 &&
                        <PaypalCheckoutButton product={data} />
                    }
                </div>
            </div>
      )}
    </div>
  );
}

export default Details;
