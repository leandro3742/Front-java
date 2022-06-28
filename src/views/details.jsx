import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContent } from "../fakeApi";
import { buildHeader, fetchFunction } from "../utils/fetch";
import PaypalCheckoutButton from "../component/paypalCheckoutButton";
// fetchFunction("http://localhost:8080/categoria/agregarCategoria", buildHeader("POST", {nombre: "Entra bien2"})).then(result => setData(result)).catch(err => console.log(err))

function Details() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        setData(getSingleContent(id));
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
                    { sessionStorage.getItem("user") && data.precio == 0 &&
                        <button className="btn btn-primary"> Ver ahora</button>
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
