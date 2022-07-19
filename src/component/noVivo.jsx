import React,  { useState, useEffect } from 'react'
import ReactPlayer from "react-player";

function NoVivo (props) {
  const { id } = props;
  const [progress, setProgress] = useState(0);
  const [contenido, setContenido] = useState({});
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState("")
  const usuario = JSON.parse(sessionStorage.getItem("usuario"))

  useEffect(() => {
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
    
  }, []);

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
        console.log(await response.json())
      }
      guardarTiempo(`http://localhost:8080/visualizacion/agregarTiempoVisualizacion/${id}/${usuario.idUsuario}`);
  };

  useEffect(() => {
    console.log("ENTRTA")
    console.log(time)
    if(time.time > 5){
        time.time -= 5 
    }
    setUrl(contenido.video+"?start="+time.time)
  }, [time, contenido]);

    // const {saveDuration,progress, id, setProgress, url} = props
  return (
    <div style={{ width: "100%", height: "90vh" }} className="row m-0">
        <div className="col-12 p-0">
                <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                onPause={(e) => saveDuration(progress, id)}
                onProgress={(e) => {
                    setProgress(e.playedSeconds);
                }}
                />
        </div>
    </div>
  )
}

export default NoVivo