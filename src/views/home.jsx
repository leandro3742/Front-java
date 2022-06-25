import React, { useState, useEffect } from "react";
import "../styles/home.css";
import arrowright from "../images/arrowright.png";
import arrowleft from "../images/arrowleft.png";
import { Link } from "react-router-dom";
import PaypalCheckoutButton from "../component/paypalCheckoutButton";

function Home() {
    let url = "https://dam.smashmexico.com.mx/wp-content/uploads/2018/12/marvel-legacy-portadas-smash-.jpg";
    let url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEmQkz3jnGgfDAcdtEiycxdRnDybQp7RLxg&usqp=CAU";
    const [series, setSeries] = useState([{}, {}]);
    const [showSeries, setShowSeries] = useState(url);
    const [imageSize, setImageSize] = useState({});
    const product = {
        description: "Bka bla v;a",
        price: 15000
    }
    const getSeries = () => {
        if (showSeries === url) setShowSeries(url1);
        else setShowSeries(url);
    };

    useEffect(() => {
        if (window.screen.width > 730) {
            setImageSize({ maxHeight: "175px", maxWidth: "300px" });
        } else {
            setImageSize({ maxHeight: "175px", maxWidth: "150px" });
        }
        console.log("emtra")
    }, []);
    return (
        <div className="m-0 row d-flex justify-content-center">
            <div onClick={getSeries} className="back col-1 d-flex align-items-center" style={{ zIndex: "1", cursor: "pointer" }}>
                <img style={{ width: "50px"}} src={arrowleft} alt="" />
            </div>
            <div className="col-10 d-flex my-3 justify-content-center">
                {series.map((elem, index) => {
                    return (
                        <div style={imageSize} key={index} className="m-2">
                            <img style={imageSize} className="frontPage rounded" src={showSeries} key={index} />
                            <PaypalCheckoutButton product={product} />
                        </div>
                    );
                })}
            </div>
            <div onClick={getSeries} className="next col-1 d-flex align-items-center" style={{ zIndex: "1", cursor: "pointer" }}>
                <img style={{ width: "50px" }} src={arrowright} alt="" />
            </div>
        </div>
    );
}

export default Home;
