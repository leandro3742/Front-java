import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EnVivo from "../component/enVivo";
import NoVivo from "../component/noVivo";

function Video() {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const [contenido, setContenido] = useState({});
  const usuario = JSON.parse(sessionStorage.getItem("usuario"))
  const currentDate = new Date();
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState("")

  useEffect(() => {
    async function estaPago(url) {
      const response = await fetch(url);
      console.log(response)
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

  useEffect(() => {
    if(time.time > 5){
        time.time -= 5 
    }
    setUrl(contenido.video+"?start="+time.time)
  }, [time, contenido]);
  
  const esHora = (data) => {
    let fecha = data.fecha_comienzo.split('/');
    let hora = data.comienzo.split(":");
    if(currentDate.getFullYear() == fecha[0] && currentDate.getMonth()+1 == fecha[1] && currentDate.getDate() == fecha[2]){
        if(currentDate.getHours() >= hora[0]){
            if(currentDate.getHours() == hora[0] && currentDate.getMinutes() >= hora[1] ){
                return true
            }
            else if(currentDate.getHours() > hora[0])
                return true
        }
    }
    return false;
  }

  return (
    <>
      {mostrar ? (
        Object.keys(contenido).length > 0 &&
          contenido.comienzo 
            ? 
              <>
              {esHora(contenido) ?
                <EnVivo id={id}/>
                :
                <div>Todavia no es hora</div>
              }
              </> 
          
            : <NoVivo id={id}/> 
      ) : (
        <div>No puede ver este contenido</div>
      )}
    </>
  );
  {/* contenido.tipoContenido === "EVENTO" ? <EnVivo setProgress={setProgress} progress={progress} saveDuration={saveDuration} url={url} id={contenido} idUsuario={usuario.idUsuario} /> : <NoVivo setProgress={setProgress} progress={progress} saveDuration={saveDuration} url={url} id={id} idUsuario={usuario.idUsuario}/> */}
}

export default Video;
