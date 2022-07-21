import React, { useEffect, useState } from "react";
import "../styles/home.css";
import PaypalCheckoutButton from "../component/paypalCheckoutButton";
import { getContents } from "../fakeApi";
import List from "../component/list";
function Home() {
    const [index, setIndex] = useState(0);

    return (
        <div className="m-0 row d-flex justify-content-center">
            <div>
                <h3>Destacado</h3>
                <List />
            </div>
            <div>
                <h3>Eventos en vivo</h3>
                <List />
            </div>
            <div>
                <h3>Lo mas visto</h3>
                <List />
            </div>
            <div>
                <h3>Favoritos en Mantel</h3>
                <List />
            </div>
            <div>
                <h3>Agregados recientemente</h3>
                <List />
            </div>
            
        </div>
    );
}

export default Home;
