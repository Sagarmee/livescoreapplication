import {
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AsideSocialMedia from "../Components/AsideSocialMedia";
import seriesadd from "../asset/Adversting-section/seriesadd.jpg";
import asideadd from "../asset/Adversting-section/rightsideadd.jpg";
import asideadd2 from "../asset/Adversting-section/sideadd.jpg";
import axios from "../Fetch/axios";
import { Outlet } from "react-router-dom";
import LinerSpinner from "../Components/LinerSpinner";


const Series = () => {
  async function fetchSeries() {
    setIsLoading(true);
    const series = await axios.get(`/series/list?matchType=international`);
    setIsLoading(false);
    return series;
  }
  const [series, setSeries] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getResponse() {
      const series = await fetchSeries();
      setSeries(series.data.seriesMap);
    }
    getResponse();
  }, []);
  return (
    <>
      <Container maxWidth="lg">
      {isLoading && <LinerSpinner />}

        <Grid container spacing={2} py={3}>
          <Grid item xs={12} lg={9} px={3}>
            <Typography
              variant="h6"
              color="initial"
              sx={{ textTransform: "capitalize" }}
            >
              season/series
            </Typography>
            <Stack my={2}>
              <img src={seriesadd} alt="adds" />
            </Stack>
            <Card>
              <CardContent>
                <Stack sx={{ backgroundColor: "#063970", padding: "20px 0" }}>
                  <Grid container spacing={2} px={2}>
                    <Grid item xs={2} lg={3}>
                      <Typography sx={{ color: "white" }}>Month</Typography>
                    </Grid>
                    <Grid item xs={2} lg={9}>
                      <Typography sx={{ color: "white" }}>
                        Series Name
                      </Typography>
                    </Grid>
                  </Grid>
                </Stack>
                <Box>
                  <Stack sx={{ padding: "20px 0" }}>
                    <Grid container spacing={2} px={2}>
                      {series?.map((element) => {
                        return (
                          <>
                            <Grid
                              item
                              xs={12}
                              lg={3}
                              sx={{ backgroundColor: "#e9f1f8" }}
                            >
                              <Typography
                                sx={{ paddingLeft: "10px", margin: "15px 0" }}
                              >
                                {element.date}
                              </Typography>
                            </Grid>
                            <Grid item xs={12} lg={9}>
                              {element?.series?.map((seriesElement) => {
                                return (
                                  <>
                                    <Stack
                                      sx={{
                                        borderBottom: "2px solid #aaaaaa",
                                        padding: "17px 0",
                                      }}
                                    >
                                      <Link to={`details/${seriesElement?.id}`}>
                                        {seriesElement?.name}
                                      </Link>
                                      <small>{new Date(
                                          Number(seriesElement?.startDt)
                                        ).toLocaleDateString()} - {new Date(
                                          Number(seriesElement?.endDt)
                                        ).toLocaleDateString()}</small>
                                    </Stack>
                                  </>
                                );
                              })}
                            </Grid>
                          </>
                        );
                      })}
                    </Grid>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <aside>
              <Stack>
                <img src={asideadd} alt="add" />
              </Stack>
              <Stack mt={2}>
                <img src={asideadd2} alt="add" />
              </Stack>
              <AsideSocialMedia />
              <Stack>
                <img src={asideadd} alt="add" />
              </Stack>
            </aside>
          </Grid>
        </Grid>
        <Outlet />
      </Container>
    </>
  );
};

export default Series;
