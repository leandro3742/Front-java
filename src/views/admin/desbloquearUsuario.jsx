import React, { useState, useEffect } from "react";
import "../../styles/gestionarUsuario.css";
import { fetchFunction } from "../../utils/fetch";
import { buildHeader } from "../../utils/fetch";
import { Button } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Swal from 'sweetalert2'

function DesbloquearUsuario() {
  const [nombre, setNombre] = useState("");
  const url = 'http://localhost:8080/categorias';
  const [todos, setTodos] = useState()
  const [mostrar, setMostrar] = useState(false)

  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    if (sessionStorage.getItem("usuario")) {
      let aux = JSON.parse(sessionStorage.getItem("usuario"));
      console.log(aux)
      if (aux.tipoUsuario === "ADMIN") {
        setMostrar(true)
      }
    }
    fetchApi()
  }, [])
  //psot
  const saveElement = () => {
    console.log(nombre)
    fetchFunction("http://localhost:8080/categorias/agregarCategoria", buildHeader("POST", { "nombre": nombre }))
      .then(result => {
        if (result == "ERROR") {
          Swal.fire('Error en la creacion');
        }
        else {
          console.log("Ok");
          Swal.fire('Creado Correcto');

        }
      }).catch(err => console.log(err));
  };
  return (

    <div><h1>Hola desbloquear</h1></div>
  );

}

export default DesbloquearUsuario;
