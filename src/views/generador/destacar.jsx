import React from 'react'
import "../../styles/contenidosDisponibles.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function destacar(){
    return (
        <div className='divGlobal'>
            <div className='contenidosDisponibles'>
                <u><h2>Destacar Contenido</h2></u>
            </div>

            <div>
                <Select style={{ color: "white" }} value={} onChange={}>
                    {/*{categories.map((elem) => {*/}
                    {/*    return (*/}
                    {/*        <MenuItem key={elem} value={elem} className="texto">*/}
                    {/*            {elem}*/}
                    {/*        </MenuItem>*/}
                    {/*    );*/}
                    {/*})}*/}
                </Select>
                {/*Select de contenidos*/}
            </div>

            <div className='divlabel'>
                <input type="checkbox" className='inputs'></input>
            </div>
        </div>
    )
}

export default destacar;