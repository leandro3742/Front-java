import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EnVivo from "../component/enVivo";
import NoVivo from "../component/noVivo";

function Video() {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const [contenido, setContenido] = useState({});
  const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario")))
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState("")

  useEffect(() => {
    async function estaPago(url) {
      const response = await fetch(url);
      if ((await response.status) > 300) {
        setMostrar(false);
      } else setMostrar(true);
    }
    estaPago(`http://localhost:8080/contenidos/estaPago/${id}/${usuario.idUsuario}`);
  }, []);

  useEffect(() => {
    if(mostrar){
        async function getContenido(url) {
            const response = await fetch(url);
            if ((await response.status) > 300) {
              setContenido({});
            } else setContenido(await response.json());
          }

        async function getTime(url) {
            const response = await fetch(url);
            if ((await response.status) > 300) {
              setTime(0);
            } else setTime(await response.json());
        }
        getTime(`http://localhost:8080/visualizacion/obtenerVisualizacion/${id}/${usuario.idUsuario}`)
        getContenido(`http://localhost:8080/contenidos/${id}`);
    }
  }, [mostrar]);

  const saveDuration = (time, id) => {
    async function guardarTiempo(url) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                time: time.toString()
            })
        });
        await response
      }
      guardarTiempo(`http://localhost:8080/visualizacion/agregarTiempoVisualizacion/1/${id}`);
  };

  useEffect(() => {
    if(time.time > 5){
        time.time -= 5 
    }
    setUrl(contenido.video+"?start="+time.time)
  }, [time, contenido]);
  return (
    <>
      {mostrar ? (
        Object.keys(contenido).length > 0 &&
          contenido.tipoContenido === "EVENTO" ? <EnVivo setProgress={setProgress} saveDuration={saveDuration} url={url} id={contenido}/> : <EnVivo setProgress={setProgress} saveDuration={saveDuration} url={url} id={id} idUsuario={usuario.idUsuario}/>
      ) : (
        <div>No puede ver este contenido</div>
      )}
    </>
  );
}

export default Video;
