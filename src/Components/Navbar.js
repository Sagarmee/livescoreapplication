import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { Box, AppBar, Stack, Container, Toolbar, Tabs, Tab, useTheme, useMediaQuery, Typography } from "@mui/material"
import Brand from "../asset/Brand/cricket-logo.png"
import Drawercomp from './Drawer'

const Navbar = () => {

    const [value, setValue] = useState(0)
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <>
            <Box>
                <AppBar position='static'>
                    <Toolbar sx={ { backgroundColor: "#063970", padding: "10px" } }>
                        <Container maxWidth="lg">
                            <Stack direction="row" alignItems="center" style={ { maxWidth: "1300px", width: "95%" } }>
                                <Link to="/" style={ { display: "flex", alignItems: "center", textDecoration: "none" } }>
                                    <img src={ Brand } alt="brand-logo" style={ { width: "70px" } } />
                                    <Typography className="brandName">Cricket Adda</Typography>
                                </Link>
                                { isMatch ? (
                                    <>
                                        <Drawercomp />
                                    </>
                                ) : (
                                    <>

                                        <Tabs sx={ { marginLeft: "auto" } } textColor="inherit" value={ value } indicatorColor="none" onChange={ (e, value) => setValue(value) } >
                                            <NavLink className="nav-link" to="/"><Tab label="Home" /></NavLink>
                                            <NavLink className="nav-link" to="/cricket-schedule/recent"><Tab label="Schedule" /></NavLink>
                                            <NavLink className="nav-link" to="/series"><Tab label="Series" /></NavLink>
                                            <NavLink className="nav-link" to="/fixtures"><Tab label="Ranking" /></NavLink>
                                            <NavLink className="nav-link" to="/news"><Tab label="News" /></NavLink>
                                            <NavLink className="nav-link" to="/contact"><Tab label="Contact" /></NavLink>
                                        </Tabs>
                                    </>
                                ) }
                            </Stack>
                        </Container>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar