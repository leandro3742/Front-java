import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player";

async function getComentarios(url) {
    const response = await fetch(url);
    if(await response.status < 300)
        return await response.json()
    return []
}
async function postComentario(url, message) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            texto: message
        })
    });
    return await response
  }

async function postComentarioIndividual(url) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            texto: ""
        })
    });
    return await response
  }
function EnVivo(props){
    const {saveDuration, setProgress, url, id, idUsuario} = props

    const [title, setTitle] = useState("Comentarios");
    const [type, setType] = useState("Chats");
    const [comentarios, setComentarios] = useState([]);
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);

    useEffect(() => {
        setTitle(type === "Comentarios" ? "Chats" : "Comentarios");
    }, [type]);

    setInterval(async ()=>{
        if(title === "Comentarios") getComentarios(`http://localhost:8080/comentarios/listarComentariosContenido/${id}`).then(res => setComentarios(res));
    },5000);

    const saveComentario = () => {
        postComentario(`http://localhost:8080/contenidos/comentarContenido/${id}/${idUsuario}`, message)
            .then(res => {
                if(res.status === 201) 
                    setMessage("")
                else{
                    alert("Hubo un error en enviar el comentario")
                }
            });
    }

    const crearChat = (idUser) => {
        postComentarioIndividual(`http://localhost:8080/comentarios/agregarComentarioIndividual/${idUsuario}/${idUser}`)
            .then(res => {
                console.log(res)
                if(res.status === 200){
                    setType("Comentarios");
                }
            })
    }

    return (
        <div style={{ width: "100%", height: "90vh" }} className="row m-0">
            <div className="col-lg-9 col-md-9 col-12 p-0">
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

            <div className="col-lg-3 col-md-3 col-12 p-0">
                <div style={{height: "10vh", backgroundColor: "white"}} className="rounded-3 px-3 m-auto text-danger col-12 d-flex justify-content-between align-items-center">
                  <h3>{title}</h3>
                  <button className='btn btn-sm btn-primary' onClick={()=> setType(type === "Chats" ? "Comentarios" : "Chats" )}>{type}</button>
                </div>
                
                {title === "Comentarios" 
                ?
                    <div style={{height: "70vh", overflowY: "scroll"}}>
                        {comentarios.map((elem, index) => {
                            let color;
                            index % 2 === 0 ? color = "#212529" : color = "black"
                            return (
                                <div style={{backgroundColor: color}} key={elem.id} className="px-4 py-1 d-flex flex-column">
                                    <span>{elem.texto}</span>
                                    <div className='d-flex justify-content-end'>
                                        <button className=' mx-3 btn btn-sm btn-success' onClick={()=> crearChat(elem.usuario.id)}>Responder</button>
                                        <button className='btn btn-sm btn-danger'>Reportar</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                :
                    <div style={{height: "70vh", overflowY: "scroll"}}>
                        <select>
                            <option>A</option>
                            <option>A</option>
                            <option>A</option>
                            <option>A</option>
                        </select>
                        {chats.map((elem, index) => {
                            let color;
                            index % 2 === 0 ? color = "#212529" : color = "black"
                            return (
                                <div style={{backgroundColor: color}} key={elem.id} className="px-4 py-1 d-flex flex-column">
                                    <span>{elem.texto}</span>
                                    <div className='d-flex justify-content-end'>
                                        <button className=' mx-3 btn btn-sm btn-success' onClick={()=> crearChat(elem.usuario.id)}>Responder</button>
                                        <button className='btn btn-sm btn-danger'>Reportar</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                }
                <div style={{height: "10vh", backgroundColor: "white"}} className="rounded-3 row m-0">
                  <div className='col-12 m-auto d-flex justify-content-around'>
                    <input className='w-75 rounded-1 shadow' onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <button className='btn btn-primary btn-sm' onClick={saveComentario}>Enviar</button>
                  </div>

                </div>
            </div>
        </div>
  )
}

export default EnVivo