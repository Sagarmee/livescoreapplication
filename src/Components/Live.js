import { Grid, Typography, Stack, Card, CardContent, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";
import { Link } from "react-router-dom";


export default function AllUpcoming() {
  //   let schedule = useOutletContext();
  const [live, setSchedule] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function fetchTeamRanks() {
    try {
      setIsLoading(true);
      const schedule = await axios.get(`matches/list?matchState=live`);
      setIsLoading(false);
      return schedule?.data?.typeMatches;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    async function getResponse() {
      let response = await fetchTeamRanks();
      response = response?.filter(
        (element) => element.matchType === "International"
      )[0].seriesAdWrapper;
      setSchedule(response);
    }
    getResponse();
  }, []);

  return (
    <>
      <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
      {isLoading && <LinerSpinner />}
        <div className="card-body">
          <Card>
            <CardContent>
              <Stack sx={{ backgroundColor: "#063970", padding: "20px 0" }}>
                <Grid container spacing={2} px={2}>
                  <Grid item xs={2} lg={5}>
                    <Typography sx={{ color: "white" }}>Series Name</Typography>
                  </Grid>
                  <Grid item xs={2} lg={7}>
                    <Typography sx={{ color: "white" }}>Matches</Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Box>
                <Stack sx={{ padding: "20px 0" }}>
                  <Grid container spacing={2} px={2}>
                    {live?.map((element) => {
                      if (element.seriesMatches !== undefined) {
                        return (
                          <>
                            <Grid
                              item
                              xs={12}
                              lg={5}
                              sx={{ backgroundColor: "#e9f1f8" }}
                            >
                              <Typography
                                sx={{ paddingLeft: "10px", margin: "15px 0" }}
                              >
                                {element.seriesMatches.seriesName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} lg={7}>
                              {element?.seriesMatches?.matches?.map((seriesMatch) => {
                                
                                return (
                                  <>
                                    <Stack
                                      sx={{
                                        borderBottom: "2px solid #aaaaaa",
                                        padding: "17px 0",
                                      }}
                                    >
                                      <Link to={`/match/${seriesMatch?.matchInfo?.matchId}`}>
                                        {`${seriesMatch?.matchInfo?.team1.teamName} VS ${seriesMatch?.matchInfo?.team2.teamName}`}
                                      </Link>
                                      <small>
                                        {new Date(
                                          Number(seriesMatch?.matchInfo?.startDate)
                                        ).toLocaleString()}{" "}
                                        
                                        
                                      </small>
                                      <small>
                                        {seriesMatch?.matchInfo?.status}
                                      </small>
                                    </Stack>
                                  </>
                                );
                              })}
                            </Grid>
                          </>
                        );
                      }
                    })}
                  </Grid>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
