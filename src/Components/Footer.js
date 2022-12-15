import React from 'react'
import { Link } from "react-router-dom"
import { Stack, Typography, Box, Container } from "@mui/material";
//import { makeStyles } from "@mui/styles"
import SportsCricketSharpIcon from '@mui/icons-material/SportsCricketSharp';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import brand from "../asset/Brand/cricket-logo.png"



/*
const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "40vh"
    }
})) */


const Footer = () => {


    return (
        <footer className='footer' style={ { backgroundColor: "#063970" } }>
            <Container maxWidth="lg">
                <Stack sx={ { maxWidth: "1300px", width: "90%" } }>
                    <Stack className='footer-upper-stack' style={ { borderBottom: "1px solid #eeee" } }>
                        <Box className="box-1">
                            <Stack direction="column" className="stack-1">
                                <Stack direction="row" alignItems="center" justifyContent="center" py={ 3 } >
                                    <SportsCricketSharpIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "2rem" } } />
                                    <Typography className="brandName" sx={ { color: "white" } }>Cricket Adda</Typography>
                                </Stack>
                                <Typography sx={ { textAlign: "center" } }>
                                    <Link to="/">
                                        <img src={ brand } alt="brand-logo" style={ { width: "100px" } } />
                                    </Link>
                                </Typography>
                            </Stack>
                        </Box>
                        <Stack className="footer-bottom-stack">
                            <Box className="box-2">
                                <Stack className="stack-2">
                                    <Typography sx={ {
                                        textTransform: "uppercase", fontWeight: "700", fontSize: "16px",
                                        fontFamily: "pepsi", letterSpacing: "0.6px", paddingBottom: "1rem"
                                    } } variant="h6" color="white">follows us on</Typography>
                                    <a href="#youtube" target="blank" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <YouTubeIcon style={ { color: "red", marginRight: "1rem" } } />
                                        <span style={ { color: "white", fontSize: "16px" } }>Youtube</span>
                                    </a>
                                    <a href="#instagram" target="blank" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <InstagramIcon style={ { color: "rgb(255, 0, 191)", marginRight: "1rem" } } /><span style={ { color: "white" } }>Instagram</span>
                                    </a>
                                    <a href="#facebook" target="blank" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <FacebookIcon color="primary" style={ { marginRight: "1rem" } } /><span style={ { color: "white" } }>Facebook</span>
                                    </a>
                                    <a href="#linkdin" target="blank" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <LinkedInIcon style={ { color: "#0E76A8", marginRight: "1rem" } } /><span style={ { color: "white" } }>LinkedIn</span>
                                    </a>
                                </Stack>
                            </Box>
                            <Box className="box-3">
                                <Stack className="stack-3">
                                    <Typography sx={ {
                                        textTransform: "uppercase", fontWeight: "700", fontSize: "16px",
                                        fontFamily: "pepsi", letterSpacing: "0.6px", padding: "0 0 1rem 0"
                                    } } variant="h6" color="white">quick links</Typography>
                                    <Link to="/" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <HomeRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "1.5rem" } } />
                                        <span style={ { color: "white" } }>Home</span>
                                    </Link>
                                    <Link to="/series" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <SortRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "1.5rem" } } />
                                        <span style={ { color: "white" } }>series</span>
                                    </Link>
                                    <Link to="/fixtures" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <SegmentRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "1.5rem" } } />
                                        <span style={ { color: "white" } }>Fixtures</span>
                                    </Link>
                                    <Link to="/news" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <NewspaperRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "1.5rem" } } />
                                        <span style={ { color: "white" } }>news</span>
                                    </Link>
                                    <Link to="/contact" style={ { paddingBottom: "10px", textDecoration: "none", display: "flex", alignItems: "center" } }>
                                        <CallRoundedIcon sx={ { color: "#ffff", paddingRight: "5px", fontSize: "1.5rem" } } />
                                        <span style={ { color: "white" } }>Contact</span>
                                    </Link>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                    <Stack className="copyright-stack" justifyContent="center" alignItems="center" py={ 3 }>
                        <Typography sx={ { color: "white", fontSize: "15px" } }>copyright &copy; 2022 <span style={ { paddingLeft: "15px" } }>|</span>
                            <Link to="/about-us" style={ { color: "white", padding: "0 15px 0 20px", textTransform: "capitalize", fontSize: "15px" } }>About Us</Link><span>|</span>
                            <Link to="/privacy-policy" style={ { color: "white", padding: "0 20px", textTransform: "capitalize", fontSize: "15px" } }>Privacy Policy</Link><span>|</span>
                            <Link to="/terms-condtion" style={ { color: "white", padding: "0 10px", textTransform: "capitalize", fontSize: "15px" } }>terms & condition</Link><span>|</span>
                            <Link to="/grievance" style={ { color: "white", padding: "0 10px", textTransform: "capitalize", fontSize: "15px" } }>Grievance</Link>
                        </Typography>
                    </Stack>
                </Stack>
            </Container>
        </footer >
    )
}

export default Footer
