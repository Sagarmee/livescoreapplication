import React from 'react'
import { Stack } from "@mui/material"
//import { Link } from "react-router-dom"
import HeaderAdd from "../asset/Adversting-section/HeaderAdd.jpg"

const Headeradd = () => {
    return (
        <Stack className='ad' direction="row" py={ 2 } alignItems="center" justifyContent="center" >
            <a href="#sagar">
                <img width="100%" src={ HeaderAdd } alt="header-add" />
            </a>
        </Stack >
    )
}

export default Headeradd
