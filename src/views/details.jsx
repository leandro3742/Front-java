import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buildHeader, fetchFunction } from "../utils/fetch";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("sss");

  useEffect(() => {
    //Hacer Query
    fetchFunction("http://localhost:8080/categoria/agregarCategoria", buildHeader("POST", {nombre: "Entra bien2"})).then(result => setData(result)).catch(err => console.log(err))
  }, []);
  useEffect(() => {
    console.log("DATA", data)
  }, [data]);
  return <div>details</div>;
}

export default Details;
