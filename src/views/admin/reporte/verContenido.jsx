import React, { useState, useEffect } from "react";
import "../../../styles/verContenido.css";
import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Link, useParams } from "react-router-dom";

function VerContenido() {
   //Para get
   const url = 'http://localhost:8080/contenidos/1';
   const [todos, setTodos] = useState()
   const [mostrar, setMostrar] = useState(false)
   const fetchApi = async () => {
       const response = await fetch(url)
       console.log(response.status)
       const responseJSON = await response.json()
       setTodos(responseJSON)
   }
   useEffect(() => {
      
       fetchApi()
     }, [])
  return (
<body className="body">
<div>

<div>
<h4 className="titu">Contenidos Visto</h4>
<a>{data.descripcion}</a>
                </div>

</div>
</body>
 
  );
  
}

export default VerContenido;