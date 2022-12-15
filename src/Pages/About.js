import React from 'react'
import { Container, Card, CardContent, Typography } from "@mui/material"


import { useStyles } from '../Styles'

const About = () => {

    const classes = useStyles();

    return (
        <div style={ { minHeight: "80vh", padding: "2rem 0" } }>
            <Container maxWidth="lg">
                <Card style={ { minHeight: "80vh", boxShadow: "rgba(0, 0, 0, 0.1) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" } } >
                    <Typography pt={ 2 } variant="h4" sx={ { textAlign: "center", fontWeight: "600", textTransform: "capitalize", letterSpacing: "1px" } }>About Us</Typography>
                    <CardContent sx={ { padding: "2rem" } }>
                        <p className={ classes.about_text }>One of the 10 most popular single-sport platforms in the world, Cricket Adda is a leader in the research of cricket.</p>
                        <p className={ classes.about_text }>Cricket has always been a game of numbers, and Cricket Add has always maintained the ability to dive into those figures in order to enhance performance, examine entire company, and help to cricket's economy via robust analytics.</p>
                        <p className={ classes.about_text }>Cricket Add, which was founded in 2022, provides live ball-by-ball statistics for all Test, ODI, T20I, and club matches. The app offers various live commentary options, scorecards, fixtures, player and team rankings, news, and more for cricket matches. It also has able to provide high quality for each cricket match and cricketer who has ever participated in the sport.</p>
                        <p className={ classes.about_text }>The long-term goal of Cricket Add is to top all other digital sports platforms in popularity. We will continue to push for a more competitive, enjoyable, and productive exploitation of cricket for players, fans, and stakeholders.</p>
                    </CardContent>
                </Card>
            </Container>
        </div >
    )
}

export default About
