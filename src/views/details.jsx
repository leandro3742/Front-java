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

    const pagarPPV = (elem) => {
        async function subscribirse(url){
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    fechaVencimiento: `${day}-${month}-${year}`,
                    monto: elem.precio,
                    tipoSuscripcion: elem.tipoSub
                })
            });
            console.log(await response)
            alert("Teermino")
        }
        subscribirse(`http://localhost:8080/suscripciones/agrearSuscripcionPP/${elem.id}/1`)
    }

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
                        <Link to={`/video/${data.id}`} className="btn btn-primary"> Ver ahora</Link>
                    }
                    {data.precio > 0 &&
                        <PaypalCheckoutButton product={data} isOk={pagarPPV} />
                    }
                </div>
            </div>
      )}
    </div>
  );
}

export default Details;
