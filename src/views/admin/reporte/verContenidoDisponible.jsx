import React, { useState, useEffect } from "react";
import "../../../styles/verContenido.css";
import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Link, useParams } from "react-router-dom";


function VerContenidoDisponible() {
  const { id } = useParams();
   //Para get
   const url = 'http://localhost:8080/admin/reporte/contenido/disponible';
   const [todos, setTodos] = useState();
   //const [mostrar, setMostrar] = useState(false);
   const fetchApi = async () => {
       const response = await fetch(url);
       console.log(response.status)
       const responseJSON = await response.json()
       console.log(responseJSON)
       setTodos(responseJSON)
   }
   useEffect(() => {
       fetchApi()
     }, [])
   
   
     
  return (<body className="body">

{!todos ? 'cargando ...':
              todos.map((todo,index)=>{      
                if(todo.id==id){
                    return <div className="divGlo"><h1 className="titulo">{todo.nombre}</h1></div>
                }      
              })
}
    <div class="first">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <div><img className="img" src={todo.fotoPortada}></img></div>
                }  
              })
          }
    </div>
    <div class="second">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <div><h1 className="descripcion">Tipo: {todo.tipoContenido}</h1><h1 className="descripcion">Duración: {todo.duracion}</h1><h1 className="descripcion">Precio: {todo.precio}</h1></div>
                }  
              })
          }
    </div>
    <div class="third">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <div><h1 className="descripcion">Información generador contenido</h1>
                    <h1 className="descripcion">Nombre:{todo.generadorContenidoid.nombre}</h1>
                    <h1 className="descripcion">Precio:{todo.generadorContenidoid.precio}</h1>
                    </div>
                }  
              })
          }
    </div>
    <div class="divInfo">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <div><h1 className="descripcion">Informacíon:</h1><h1 className="descripcion">{todo.descripcion}</h1></div>
                }  
              })
          }
    </div>
    <div class="divVideo">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <iframe className="vid" src={todo.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                }  
              })
          }
    </div>
</body>
 
  );
  
}

export default VerContenidoDisponible;