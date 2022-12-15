import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import AsideSocialMedia from "../Components/AsideSocialMedia";
import NewsImage from "../Components/NewsImage";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useStyles } from "../Styles";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";

const Blog = () => {
  async function fetchNews() {
    setIsLoading(true);
    const news = await axios.get(`/news/list`);
    setIsLoading(false);
    return news;
  }
  const [newsList, setNewsList] = useState();
  // const [down, setDown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [up, setUp] = useState(5);
  useEffect(() => {
    async function getResponse() {
      const news = await fetchNews();
      setNewsList(news.data.newsList);
    }
    getResponse();
  }, []);
  const onLoad = () => {
    setUp(up + 5)
  }
  const classes = useStyles();

  return (
    <main>
      <Container maxWidth="lg">
      {isLoading && <LinerSpinner />}
        <Grid container spacing={2}>
          <Grid item xs={12} lg={9}>
            <Card sx={{ margin: "2rem 0" }}>
              {newsList?.slice(0, up).map((element) => {
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
                              <NewsImage imageId={element?.story?.imageId} />
                            </Link>
                          </Grid>
                          <Grid item xs={12} lg={9}>
                            <CardContent>
                              <Link
                                to={`/news/${element?.story?.id}`}
                                className={classes.navlink}
                                style={{
                                  fontSize: "20px",
                                  paddingBottom: "5px",
                                }}
                              >
                                {element.story.hline}
                              </Link>
                              <Stack direction="row" alignItems="center">
                                <Typography
                                  sx={{ fontSize: "14px", color: "#395B64" }}
                                >
                                  {new Date(
                                    Number(element?.story.pubTime)
                                  ).toLocaleString()}
                                </Typography>
                                <FiberManualRecordIcon
                                  sx={{
                                    fontSize: "10px",
                                    margin: "0 1rem",
                                    color: "#395B64",
                                  }}
                                />
                              </Stack>
                              <Typography
                                mt={1}
                                sx={{ fontSize: "15px", color: "#345B63" }}
                              >
                                {element.story.intro}
                              </Typography>{" "}
                            </CardContent>
                          </Grid>
                        </Grid>
                      </Card>
                    </div>
                  );
                }
              })}
              <button className='my-3 mx-3' style={{float: 'right'}} onClick={onLoad}>Load More</button>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3}>
            <aside>
              <AsideSocialMedia />
            </aside>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Blog;
