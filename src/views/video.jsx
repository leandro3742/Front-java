import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function Video() {
  const { id } = useParams();
  const [progress, setProgress] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const [contenido, setContenido] = useState({});
  const [usuario, setUsuario] = useState(JSON.parse(sessionStorage.getItem("usuario")))
  const [time, setTime] = useState(0);
  const [url, setUrl] = useState("")
  useEffect(() => {
    let idUsuario = usuario.id
      ? usuario.id
      : 1;
    async function estaPago(url) {
      const response = await fetch(url);
      if ((await response.status) > 300) {
        setMostrar(false);
      } else setMostrar(true);
    }
    estaPago(`http://localhost:8080/contenidos/estaPago/${id}/${idUsuario}`);
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
        getTime(`http://localhost:8080/visualizacion/obtenerVisualizacion/${id}/1`)
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
  // setInterval(async ()=>{

  // },5000);
  useEffect(() => {
    if(time.time > 5){
        time.time -= 5 
    }
    setUrl(contenido.video+"?start="+time.time)
  }, [time, contenido]);
  return (
    <>
      {mostrar ? (
        <div style={{ width: "100%", height: "90vh" }} className="row m-0">
          <div className="col-9 p-0">
            {Object.keys(contenido).length > 0 &&
                <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                onPause={() => saveDuration(progress, id)}
                onProgress={(e) => {
                    setProgress(e.playedSeconds);
                }}
                />
            }
          </div>

          <div className="col-3 p-0">
            <div
              style={{ width: "100%", height: "100%", backgroundColor: "red" }}
              className="m-0"
            >
              <div style={{ overflowY: "scroll", height: "80vh" }}>
                <div className="d-flex">
                  adsdassssssss
                  <button className="btn btn-warning btn-sm"> Reportar </button>
                </div>
              </div>
              <div
                style={{ position: "absolute", bottom: "0" }}
                className="row m-0 d-flex justify-content-between align-items-center"
              >
                <div className="col-lg-9 col-12 p-0">
                  <input className="col-12" />
                </div>
                <div className="col-lg-3 col-12 p-0">
                  <button className="col-12 btn btn-primary">Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No puede ver este contenido</div>
      )}
    </>
  );
}

export default Video;
