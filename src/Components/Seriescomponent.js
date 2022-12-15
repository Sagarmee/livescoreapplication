import React, { useState, useEffect } from "react";
import { Grid, Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";


const Seriescomponent = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchSeries(id) {
    setIsLoading(true);
    const series = await axios.get(`/series/get-matches?seriesId=${id}`);
    setIsLoading(false);
    return series.data;
  }
  const [series, setSeries] = useState();
  
  useEffect(() => {
    async function getResponse() {
      const series = await fetchSeries(params.id);
      setSeries(series.adWrapper);
    }
    getResponse();
  }, []);
  return (
    <>
      <div className="card my-4" style={{ width: "70%", margin: "auto" }}>
      {isLoading && <LinerSpinner />}
        <div className="card-body">
          <Card>
            <CardContent>
              <Stack sx={{ backgroundColor: "#eef0f3", padding: "20px 0" }}>
                <Grid container spacing={2} px={3}>
                  <Grid item xs={2} lg={2}>
                    <Typography sx={{ color: "black" }}>Date</Typography>
                  </Grid>
                  <Grid item xs={2} lg={6}>
                    <Typography sx={{ color: "black" }}>
                      Match Detail
                    </Typography>
                  </Grid>
                  <Grid item xs={2} lg={3}>
                    <Typography sx={{ color: "black" }}>Time</Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Box>
                <Stack sx={{ padding: "20px 0" }}>
                  {series?.map((element) => {
                    if (element?.matchDetails !== undefined) {
                      return (
                        <>
                          <Grid container spacing={0} px={2}>
                            <Grid
                              item
                              xs={12}
                              lg={2}
                              sx={{ backgroundColor: "white" }}
                            >
                              <Typography
                                sx={{ paddingLeft: "10px", margin: "15px 0" }}
                              >
                                {element?.matchDetails?.key}
                              </Typography>
                            </Grid>

                            {element?.matchDetails?.matches.map(
                              (match, index) => {
                                return (
                                  <>
                                    {index !== 0 ? (
                                      <Grid
                                        item
                                        xs={12}
                                        lg={2}
                                        sx={{ backgroundColor: "white" }}
                                      >
                                        <Typography
                                          sx={{
                                            paddingLeft: "10px",
                                            margin: "15px 0",
                                          }}
                                        ></Typography>
                                      </Grid>
                                    ) : (
                                      ""
                                    )}
                                    <Grid item xs={12} lg={6}>
                                      <Stack
                                        sx={{
                                          padding: "17px 0",
                                        }}
                                      >
                                        <Link
                                          to={`/match/${match?.matchInfo?.matchId}`}
                                          underline="hover"
                                          style={{ textDecoration: "none" }}
                                        >
                                          {`${match?.matchInfo?.team1?.teamName} vs ${match?.matchInfo?.team2?.teamName}`}
                                        </Link>
                                        <small>{`${match?.matchInfo?.venueInfo?.ground}, ${match?.matchInfo?.venueInfo?.city}`}</small>
                                        <small>
                                          {match?.matchInfo?.status}
                                        </small>
                                      </Stack>
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                      <Stack
                                        sx={{
                                          padding: "17px 0",
                                        }}
                                      >
                                        {new Date(
                                          Number(match?.matchInfo?.startDate)
                                        ).toLocaleTimeString()}
                                      </Stack>
                                    </Grid>
                                  </>
                                );
                              }
                            )}
                          </Grid>
                          <hr />
                        </>
                      );
                    }
                  })}
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Seriescomponent;
