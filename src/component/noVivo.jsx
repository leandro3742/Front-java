import React,  { useState, useEffect } from 'react'
import ReactPlayer from "react-player";

async function agregarVisualizacion(url) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            time: 0
        })
    });
    await response
}

function NoVivo (props) {
    const {id } = props
    const usuario = JSON.parse(sessionStorage.getItem("usuario"))

    const [progress, setProgress] = useState(0);
    const [mostrar, setMostrar] = useState(false);
    const [contenido, setContenido] = useState({});
    const [time, setTime] = useState(0);
    const [url, setUrl] = useState("")
    const [hacerPeticion, setHacerPeticion] = useState(true);

    useEffect(() => {
      async function estaPago(url) {
        const response = await fetch(url);
        if ((await response.status) > 300) {
          setMostrar(false);
        } else setMostrar(true);
      }
      agregarVisualizacion(`http://localhost:8080/visualizacion/agregarVisualizacion/${id}/${usuario.idUsuario}`)
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
          getTime(`http://localhost:8080/visualizacion/obtenerVisualizacion/${usuario.idUsuario}/${id}`)
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
        guardarTiempo(`http://localhost:8080/visualizacion/agregarTiempoVisualizacion/${usuario.idUsuario}/${id}`);
    };
  
    useEffect(() => {
      if(time.time > 5){
          time.time -= 5 
      }
      setUrl(contenido.video+"?start="+time.time)
    }, [time, contenido]);
    
    const [title, setTitle] = useState("Comentarios");
    const [type, setType] = useState("Chats");
    const [comentarios, setComentarios] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        setTitle(type === "Comentarios" ? "Chats" : "Comentarios");
    }, [type]);

    useEffect(() => {
        const timerComentarios = setInterval(()=>{
            if(hacerPeticion) getComentarios(`http://localhost:8080/comentarios/listarComentariosContenido/${id}`)
            .then(res => setComentarios(res))
            .catch(err => {
                console.log("Error", err)
                setHacerPeticion(false);
            });
        },5000);

        return () => {
            clearInterval(timerComentarios)
        }
    }, []);
 

    return (
        <div style={{ width: "100%", height: "90vh" }} className="row d-flex m-0">
            <div className="col-lg-9 col-md-9 col-12 m-0 p-0">
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
            </div>

            <div className="col-lg-3 col-md-3 col-12 p-3 m-auto m-0">
                <div style={{height: "10vh", backgroundColor: "white"}} className="rounded-3 px-3 m-auto text-danger col-12 d-flex justify-content-between align-items-center">
                  <h3>{title}</h3>
                </div>             
                <div style={{height: "70vh", overflowY: "scroll"}}>
                    {comentarios.map((elem, index) => {
                        let color;
                        index % 2 === 0 ? color = "#212529" : color = "black"
                        return (
                            <div style={{backgroundColor: color}} key={elem.id} className="px-4 py-1 d-flex flex-column">
                                <span>{elem.texto}</span>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-sm btn-danger'>Reportar</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div style={{height: "10vh", backgroundColor: "white"}} className="rounded-3 row m-0">
                  <div className='col-12 m-auto d-flex justify-content-around'>
                    <input className='w-75 rounded-1 shadow' onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <button className='btn btn-primary btn-sm' onClick={()=> title === "Comentarios" ? saveComentario() : nuevoMensaje()}>Enviar</button>
                  </div>

                </div>
            </div>
        </div>
  )
}

export default NoVivo