import React from 'react'
import { Container, Grid } from "@mui/material"
import { NavLink, Outlet } from "react-router-dom"

const Schedule = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={ 3 }  >
                <Grid item xs={ 12 } lg={ 9 }>
                    <Grid container spacing={ 3 } py={ 3 } sx={ { borderBottom: "1px solid #aaaaaa" } } className="Schedule">
                        <Grid item lg={ 2 }>
                            <NavLink to="recent" className="schdule-top-link">Recent</NavLink>
                        </Grid>
                        <Grid item lg={ 2 }>
                            <NavLink to="upcoming" className="schdule-top-link">Upcoming</NavLink>
                        </Grid>
                        <Grid item lg={ 2 }>
                            <NavLink to="live" className="schdule-top-link">Live</NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Outlet />
        </Container >
    )
}

export default Schedule