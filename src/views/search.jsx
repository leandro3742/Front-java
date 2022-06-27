import React from "react";

function Search() {
    const styleDiv = {
        backgroundColor: "#505360",
        height: "50px",
        width: "90%",
        outline: "none",
        color: "white",
        fontSize: "23px",
    };
    return (
        <div className="d-flex justify-content-center mt-2 ">
            <input style={styleDiv} className="texto d-flex justify-content-center align-items-center rounded text-center" placeholder="Título o género" />
        </div>
    );
}

export default Search;
