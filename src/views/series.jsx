import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from 'react';

function Series() {
    var categories = [];
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // useEffect(() => {
    //     fetch('http://localhost:8080/categoria/', {
    //         method: "GET",
    //         mode: 'no-cors',
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // })

    return (
        <div className="mx-5 mt-3">
            <div className="d-flex align-items-center">
                <h1>Series</h1>
                <FormControl style={{ width: "300px", backgroundColor: "grey", color: "white", border: "white" }} className="mx-5 rounded">
                    <InputLabel>Categorías</InputLabel>
                    <Select style={{ color: "white" }} value={age} onChange={handleChange}>
                        {categories.map((elem) => {
                            return (
                                <MenuItem key={elem} value={elem}>
                                    {elem}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default Series;
