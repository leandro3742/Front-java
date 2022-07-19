import React, { useState, useEffect } from "react";
import "../../../styles/verContenido.css";
import { fetchFunction } from "../../../utils/fetch";
import { buildHeader } from "../../../utils/fetch";
import { Link, useParams } from "react-router-dom";


function VerContenido() {
  const { id } = useParams();
   //Para get
   const url = "http://localhost:8080/contenidos";
   const [todos, setTodos] = useState();
   //const [mostrar, setMostrar] = useState(false);
   const fetchApi = async () => {
       const response = await fetch(url)
       console.log(response.status)
       const responseJSON = await response.json()
       console.log(responseJSON)
       setTodos(responseJSON)
   }
   useEffect(() => {
       fetchApi()
     }, [])
   
   /*  function Details() {
      //const { id } = useParams();
      const [data, setData] = useState();
      useEffect(() => {
          async function fetchFunction(url){
              const response = await fetch(url);
              setData(await response.json());
          }
          fetchFunction('http://localhost:8080/contenidos/'+1);
      }, []);
    }
    useEffect(() => {
      Details();
    }, [])*/
     
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
                    return <div><h1 className="descripcion">Tipo: {todo.tipoContenido}</h1><h1 className="descripcion">Duración: {todo.duracion}</h1><h1 className="descripcion">Precio: {todo.precio}</h1><h1 className="descripcion">Categoria: {todo.categoria}</h1></div>
                }  
              })
          }
    </div>
    <div class="third">
    {!todos ? 'cargando ...':
              todos.map((todo,index)=>{              
                if(todo.id==id){
                    return <div><h1 className="descripcion">Información generador contenido</h1><h1 className="descripcion">{todo.generadorContenidoid.id}</h1></div>
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
                    return <iframe className="vid" src="https://www.youtube.com/embed/A_g3lMcWVy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                }  
              })
          }
    </div>
</body>
 
  );
  
}

export default VerContenido;