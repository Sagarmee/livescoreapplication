import React from 'react'
import { Container, Card, CardContent, Typography, Stack, Button, TextField, Grid, TextareaAutosize } from "@mui/material"
import { Link } from "react-router-dom"

const Grievance = () => {
    return (
        <div style={ { minHeight: "100vh", padding: "2rem 0" } }>
            <Container maxWidth="lg">
                <Card style={ { minHeight: "100vh" } }>
                    <Typography pt={ 2 } variant="h4" sx={ { textAlign: "center", fontWeight: "600", textTransform: "capitalize", letterSpacing: "1px" } }>grievance redressal procedure</Typography>
                    <CardContent sx={ { padding: "2rem" } }>
                        <Stack>
                            <Typography>This Privacy Policy is published in compliance of:</Typography>
                            <p >Parthtech has always focused on providing an enjoyable experience to all User(s) of our Website(s)/Mobile Application(s) of Cricket Exchange. We also believe that freedom of expression comes with the responsibility to adopt robust standards in the content we offer to our User(s).</p>
                            <p >In order to ensure it, we have proactively set up an internal monitoring body, the Content Regulation Department, which monitors all content prior to publishing to ensure that it complies with the applicable laws of the land and is also in keeping with globally accepted standards.</p>
                            <p >If the User(s) wish to register any complaint with respect to the content made available on our Website(s)/Mobile Application(s) of Cricket Exchange or with respect to any breach of the Privacy Policy / Terms of Use as published in our Website(s)/Mobile Application(s) of Cricket Exchange, it should clearly state the following so that it may enable us to take cognizance of your complaint/grievance and, further to take the necessary remedial measures, as may be necessary:</p>
                            <li style={ { listStyle: "none" } }>Full Name of the Complainant.</li>
                            <li style={ { listStyle: "none" } } >Postal Address, Email ID & Contact Number of the Complainant.</li>
                            <li style={ { listStyle: "none" } }>Necessary details regarding any content of the matches, tournaments, players etc. and/or any other relevant information as seen upon our Website(s)/Mobile Application(s) of Cricket Exchange or with respect to any breach of the Privacy Policy / Terms of Use as published in our Website(s)/Mobile Application(s) of Cricket Exchange.</li>
                            <li style={ { listStyle: "none" } }>(iv) Necessary & Concise details of the complaint/grievance</li>
                            <p >Any complaints, grievances or concerns with regard to the content breach and/or breach of the Privacy Policy / Terms of Use shall also be further immediately informed by the concerned User(s) to our designated Grievance Officer as mentioned below via in writing or through email signed with the electronic/physical signature, and to send the same to:</p>
                            <p style={ { fontWeight: "600" } }>Name of Grievance Officer : unknown</p>
                            <p style={ { fontWeight: "600" } }>Email id: <a href=""></a>xyz@gmail.com</p>
                        </Stack>
                        <Stack>
                            <Typography py={ 2 } sx={ { textTransform: "uppercase", fontWeight: "bolder" } }>Postal/Correspondence Address:</Typography>
                            <p >Parthtech Developers LLP, Vatika Business Centre, Fourth Floor, Vatika Atrium, Block - B, Sector - 53, Golf Course Road, Gurugram - 122002 (Haryana), Country – India</p>
                            <p style={ { fontWeight: "600" } }>Website Address: <a href="">www.cricketadda.in</a></p>
                            <p >PLEASE NOTE THAT IN CASE OF ANY COMPLAINT TO BE RAISED AGAINST US REGARDING INFRINGEMENT ETC. OF ANY INTELLECTUAL PROPERTY RIGHTS AS PER APPLICABLE LAWS,</p>
                            <p >PLEASE NOTE THAT IN CASE OF ANY COMPLAINT TO BE RAISED AGAINST US REGARDING INFRINGEMENT ETC. OF ANY INTELLECTUAL PROPERTY RIGHTS AS PER APPLICABLE LAWS,</p>
                            <li style={ { listStyle: "none" } }>(i) A physical or electronic signature of a person authorized to act on behalf of the alleged IPR owner for the purposes of the complaint.</li>
                            <li style={ { listStyle: "none" } }>(ii) Identification of the IPR work claimed to have been infringed.</li>
                            <li style={ { listStyle: "none" } }>(iii) Identification of the relevant material on our Website(s)/Mobile Application(s) of Cricket Exchange that is claimed to have been infringed or to be the subject of infringing activity.</li>
                            <li style={ { listStyle: "none" } }>(iv) An affidavit declaring that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the IPR owner, its agent or is not otherwise permissible in law.</li>
                            <li style={ { listStyle: "none" } }>(v) An affidavit, under penalty of perjury, declaring that the information in the notice of IPR infringement is accurate, and that the complaining party is authorized to act on behalf of the true owner of the IPR right that is allegedly infringed.</li>
                        </Stack>
                        <Grid container mt={ 3 }>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <TextField id="" label="Name" sx={ { width: "100%" } } />
                            </Grid>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <TextField id="" label="Address" sx={ { width: "100%" } } />
                            </Grid>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <TextField id="" label="Email Id" sx={ { width: "100%" } } />
                            </Grid>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <TextField id="" label="Contact" sx={ { width: "100%" } } />
                            </Grid>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={ 8 }
                                    placeholder="Description"
                                    style={ { width: "100%" } }
                                />
                            </Grid>
                            <Grid item lg={ 12 } pb={ 3 }>
                                <Button variant="contained">Submit</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div >
    )
}

export default Grievance
