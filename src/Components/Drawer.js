import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, Stack } from "@mui/material"
import SportsCricketSharpIcon from '@mui/icons-material/SportsCricketSharp';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import MenuIcon from "@mui/icons-material/Menu";


const drawerWidth = 240;
const Drawercomp = () => {

    const [opendrawer, setOpendrawer] = useState(false)

    return (
        <>
            <Drawer sx={ {
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    backgroundColor: "#063970",
                    width: drawerWidth,
                },
                '& .MuiTypography-root': {
                    color: "#FDEEDC",
                },
            } } anchor="right" open={ opendrawer } onClose={ () => setOpendrawer(false) }>
                <List>
                    <Stack direction="row" alignItems="center" justifyContent="center" py={ 3 } >
                        <SportsCricketSharpIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                        <Typography className="brandName">Cricket Adda</Typography>
                    </Stack>
                    <Link to="/">
                        <ListItemButton onClick={ () => setOpendrawer(false) }>
                            <ListItemIcon>
                                <HomeRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/series">
                        <ListItemButton onClick={ () => setOpendrawer(false) }>
                            <ListItemIcon>
                                <SortRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                            </ListItemIcon>
                            <ListItemText>Series</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/fixtures">
                        <ListItemButton onClick={ () => setOpendrawer(false) }>
                            <ListItemIcon>
                                <SegmentRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                            </ListItemIcon>
                            <ListItemText>Fixtures</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/news">
                        <ListItemButton onClick={ () => setOpendrawer(false) }>
                            <ListItemIcon>
                                <NewspaperRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                            </ListItemIcon>
                            <ListItemText>news</ListItemText>
                        </ListItemButton>
                    </Link>
                    <Link to="/contact">
                        <ListItemButton onClick={ () => setOpendrawer(false) }>
                            <ListItemIcon>
                                <CallRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                            </ListItemIcon>
                            <ListItemText>Contact</ListItemText>
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
            <IconButton sx={ { color: "white", marginLeft: "auto" } }
                onClick={ () => setOpendrawer(!opendrawer) }>

                <MenuIcon color="white" />
            </IconButton>
        </>
    )
}

export default Drawercomp
