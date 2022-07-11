import React, { useState, useEffect } from "react";
import { getContents } from "../fakeApi";
import arrowright from "../images/arrowright.png";
import arrowleft from "../images/arrowleft.png";
import { Link } from "react-router-dom";
import { buildHeader } from "../utils/fetch";

function List () {
	const [index, setIndex] = useState(0);
    const [series, setSeries] = useState(getContents(index, 4));
    const [imageSize, setImageSize] = useState({});
    const [data, setData] = useState([])
	const next = () => {
        setIndex(index + 1)
    }
    const back = () => {
        if(index > 0) setIndex(index - 1);
    }

    useEffect(() => {
        setSeries(getContents(index, 4))
    }, [index]);
    
    useEffect(() => {
        async function fetchFunction(url){
            const response = await fetch(url);
            setData(await response.json())
        }
        fetchFunction('http://localhost:8080/contenidos');

        if (window.screen.width > 730) {
            setImageSize({ maxHeight: "175px", maxWidth: "300px" });
        } else {
            setImageSize({ maxHeight: "175px", maxWidth: "150px" });
        }
    }, []);
    useEffect(() => {
        console.log(data)
    }, [data]);
  return (
    <div className="m-0 row d-flex justify-content-center">
       <div onClick={back} className="back col-1 d-flex align-items-center" style={{ zIndex: "1", cursor: "pointer" }}>
                <img style={{ width: "50px"}} src={arrowleft} alt="" />
            </div>
            <div className="col-10 d-flex my-3 justify-content-center">
                {data.map((elem, index) => {
                    return (
                        <div style={imageSize} key={index} className="m-2">
                            <Link to={`/detail/${elem.id}`} ><img style={imageSize} className="frontPage rounded" src={elem.fotoPortada} key={index} /></Link>
                            <span>{elem.descripcion}</span>
                        </div>
                    );
                })}
            </div>
            <div onClick={next} className="next col-1 d-flex align-items-center" style={{ zIndex: "1", cursor: "pointer" }}>
                <img style={{ width: "50px" }} src={arrowright} alt="" />
            </div>
    </div>
  )
}

export default List