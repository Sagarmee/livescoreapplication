import React from 'react'
import { Container, Grid } from "@mui/material"
import pagenotfound from "../asset/Pagenotfound.jpg"

const Pagenotfound = () => {
    return (
        <Container maxWidth="lg">
            <Grid container py={ 2 }>
                <img src={ pagenotfound } alt="pagenotfound" />
            </Grid>
        </Container>
    )
}

export default Pagenotfound