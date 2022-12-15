import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../Fetch/axios";
import {
  Container,
  Grid,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import AsideSocialMedia from "../Components/AsideSocialMedia";
import asideadd from "../asset/Adversting-section/rightsideadd.jpg";
import asideadd2 from "../asset/Adversting-section/sideadd.jpg";
import NewsImage from "../Components/NewsImage";

async function fetchNewsDetails(id) {
  const newsDetails = await axios.get(`/news/detail?storyId=${id}`);
  return newsDetails;
}

export default function NewsDetails() {
  const params = useParams();
  const [newsDetails, setNewsDetails] = useState();
  useEffect(() => {
    async function getResponse() {
      const newsDetails = await fetchNewsDetails(params.id);
      setNewsDetails(newsDetails.data);
    }
    getResponse();
  }, [params.id]);

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} py={3}>
          <Grid item xs={12} lg={9} px={3}>
            <Typography
              variant="h6"
              color="initial"
              sx={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Top Stories
            </Typography>
            <Card sx={{ marginTop: "1rem" }}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "23px",
                    marginBottom: "1.1rem",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                  }}
                >
                  {newsDetails?.headline}
                </Typography>
                <NewsImage imageId={newsDetails?.coverImage?.id} />
                <div>
                  <p style={{ textAlign: "right" }}>
                    {new Date(
                      Number(newsDetails?.publishTime)
                    ).toLocaleString()}
                  </p>
                </div>
                {newsDetails?.content?.map((element) => {
                  if (element.content) {
                    return (
                      <Typography
                        variant="h6"
                        color="initial"
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "16px",
                          marginTop: "1rem",
                          textAlign: "justify",
                        }}
                      >
                        {element?.content?.contentValue}
                      </Typography>
                    );
                  }
                })}
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    marginTop: "1rem",
                    textAlign: "justify",
                    fontWeight: "bolder",
                  }}
                >
                  {newsDetails?.context}
                </Typography>
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
      </Container>
    </>
  );
}
