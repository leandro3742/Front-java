import React, { useState } from "react";
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

function App() {
    const [isLogged, setIsLogged] = useState(true);

    return (
        <>
            <BrowserRouter>
                <NavbarComponent isLogged={isLogged} style={{ height: "10vh" }} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/myList" element={<MyList />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
