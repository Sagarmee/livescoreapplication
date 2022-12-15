import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
  // FiberManualRecordIcon
} from "@mui/material";
import { useStyles } from "../Styles";
import AsideSocialMedia from "../Components/AsideSocialMedia";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";
import NewsImage from "../Components/NewsImage";

const Home = () => {
  async function fetchNews() {
    setIsLoading(true);
    const news = await axios.get(`/news/list`);
    setIsLoading(false);
    return news;
  }
  const [newsList, setNewsList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getResponse() {
      const news = await fetchNews();
      setNewsList(news.data.newsList);
    }
    getResponse();
  }, []);
  const classes = useStyles();
  return (
    <main>
      <Container maxWidth="lg">
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <aside>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                      popular series
                    </Typography>
                    <Link to="#dynamic" className={classes.link} gutterBottom>
                      Aisa cup 2022
                    </Link>
                    <Link to="#dynamic" className={classes.link} gutterBottom>
                      The Hundred Mens Competition 2022
                    </Link>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Link to="/series">view more</Link>
                    </Button>
                  </CardActions>
                </Card>
              </aside>
            </Grid>

            {/* news showcase start */}

            <Grid item xs={12} lg={6}>
              <Card className={classes.showcase}>
                <Typography
                  variant="h6"
                  py={2}
                  px={3}
                  mb={2}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "600",
                    borderBottom: "1px solid #aaaaaa",
                  }}
                >
                  latest news
                </Typography>
                {isLoading && <LinerSpinner />}
                {newsList?.slice(0, 5)?.map((element) => {
                  if (element.story) {
                    return (
                      <div
                        style={{
                          borderBottom: "1px solid #aaaaaa",
                          marginBottom: "15px",
                        }}
                        key={element.story.id}
                      >
                        <Card style={{ padding: "1rem 1.5rem" }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} lg={3}>
                              <Link to={`/news/${element?.story?.id}`}>
                                {/* <CardMedia
                                component="img"
                                height="295"
                                image="https://images.pexels.com/photos/1928151/pexels-photo-1928151.jpeg?cs=srgb&dl=pexels-daria-shevtsova-1928151.jpg&fm=jpg"
                                alt="news-img"
                                sx={{ borderRadius: "5px" }}
                              ></CardMedia> */}
                                <NewsImage imageId={element?.story?.imageId} />
                              </Link>
                            </Grid>
                            <Grid item xs={12} lg={9}>
                              <CardContent>
                                <Link
                                  to={`/news/${element?.story?.id}`}
                                  className={classes.navlink}
                                  style={{
                                    fontSize: "16px",
                                    paddingBottom: "5px",
                                  }}
                                >
                                  {element.story.hline}
                                </Link>
                                <Stack direction="row" alignItems="center">
                                  <Typography
                                    sx={{
                                      fontSize: "14px",
                                      color: "#395B64",
                                    }}
                                  >
                                    {new Date(
                                      Number(element?.story.pubTime)
                                    ).toLocaleString()}
                                  </Typography>
                                </Stack>
                                <Typography
                                  mt={1}
                                  sx={{ fontSize: "14px", color: "#345B63" }}
                                >
                                  {element.story.intro}
                                </Typography>{" "}
                              </CardContent>
                            </Grid>
                          </Grid>
                        </Card>
                      </div>
                    );
                    // }
                  }
                })}
                <CardActions style={{ justifyContent: "center" }}>
                  <Button size="small">
                    <Link
                      to="/news"
                      className={classes.navlink}
                      style={{
                        fontWeight: "500",
                        fontSize: "16px",
                        color: "#063970",
                        textTransform: "capitalize",
                      }}
                    >
                      view more
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* news showcase end  */}

            <Grid item xs={12} lg={3}>
              <aside>
                <AsideSocialMedia />
              </aside>
            </Grid>
          </Grid>
        </div>
      </Container>
    </main>
  );
};

export default Home;
