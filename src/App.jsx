import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/app.css";

import Home from "./views/home";
import Register from "./views/register";
import Login from "./views/login";
import NavbarComponent from "./component/navbar";
import Search from "./views/search";
import Series from "./views/series";
import Films from "./views/films";
import MyList from "./views/myList";
import Profile from "./views/profile";
import AltaGenerador from "./views/altaGenerador";
import ContenidosDisponibles from "./views/contenidosDisponibles";
import ContenidosVistos from "./views/contenidosVistos";
import Details from "./views/details";
import HomeGenerador from "./views/generador/homeGenetador";
import MiContenido from "./views/generador/micontenido";
import AltaContenido from "./views/generador/altaContenido";
import Destacar from "./views/generador/destacar";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Pricings from "./views/pricings";
import Video from "./views/video";
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState(false);
  useEffect(() => {
    if(sessionStorage.getItem("usuario")){
      setIsLogged(true);
      setTipoUsuario(JSON.parse(sessionStorage.getItem("usuario")).tipoUsuario);
    }
  },[])
  return (
    <>
      <PayPalScriptProvider
        options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
      >
        <BrowserRouter>
          <NavbarComponent isLogged={isLogged} setIsLogged={setIsLogged} tipoUsuario={tipoUsuario} style={{ height: "10vh" }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setIsLogged={setIsLogged} setTipoUsuario={setTipoUsuario}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
            <Route path="/films" element={<Films />} />
            <Route path="/myList" element={<MyList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/detail/:id" element={<Details />} />
            <Route path="/admin/nuevoGenerador" element={<AltaGenerador />} />
            <Route path="/admin/contenidosDisponibles" element={<ContenidosDisponibles />} />
            <Route path="/admin/contenidosVistos" element={<ContenidosVistos />}/>
            <Route path="/generador/" element={<HomeGenerador />} />
            <Route path="/generador/destacar" element={<Destacar />} />
            <Route path="/generador/agregarContenido" element={<AltaContenido />} />
            <Route path="/generador/contenido" element={<MiContenido />}/>
            <Route path="/pricings" element={<Pricings />}/>
            <Route path="/video/:id/:url" element={<Video />} />
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </>
  );
}

export default App;
