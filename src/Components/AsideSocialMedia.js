import React from 'react'
import { Card, CardContent, Typography } from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useStyles } from '../Styles'

const AsideSocialMedia = () => {

    const classes = useStyles()

    return (
        <>
            <Card className={ classes.smcard }>
                <CardContent className={ classes.smContent } >
                    <Typography className={ classes.socialtitle } variant="h6">follows us on</Typography>
                    <a href="#youtube" target="blank" style={ { textDecoration: "none", display: "flex", alignItems: "center", borderBottom: "1px solid #eeeeee", marginBottom: "10px", paddingBottom: "5px" } }>
                        <YouTubeIcon style={ { color: "red" } } className={ classes.socialicon } />
                        <span className={ classes.socialtext }>Youtube</span>

                    </a>
                    <a href="#instagram" target="blank" style={ { marginBottom: "10px", paddingBottom: "5px", textDecoration: "none", display: "flex", alignItems: "center", borderBottom: "1px solid #eeeeee" } }>
                        <InstagramIcon style={ { color: "rgb(255, 0, 191)" } } className={ classes.socialicon } />
                        <span className={ classes.socialtext }>Instagram</span>
                    </a>
                    <a href="#facebook" target="blank" style={ { marginBottom: "10px", paddingBottom: "5px", textDecoration: "none", display: "flex", alignItems: "center", borderBottom: "1px solid #eeeeee" } }>
                        <FacebookIcon color="primary" className={ classes.socialicon } />
                        <span className={ classes.socialtext }>Facebook</span>
                    </a>
                    <a href="#linkdin" target="blank" style={ { marginBottom: "10px", paddingBottom: "5px", textDecoration: "none", display: "flex", alignItems: "center", borderBottom: "1px solid #eeeeee" } }>
                        <LinkedInIcon className={ classes.socialicon } style={ { color: "#0E76A8" } } />
                        <span className={ classes.socialtext }>LinkedIn</span>
                    </a>
                </CardContent>
            </Card>
        </>
    )
}

export default AsideSocialMedia
