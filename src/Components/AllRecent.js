import { Grid, Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";


export default function AllUpcoming() {
  let recent = useOutletContext();
  recent = recent?.filter((element) => element.matchType === "International")[0]
    .seriesAdWrapper;

  return (
    <>
      <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
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
                    {recent?.map((element) => {
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
                                        {seriesMatch?.matchInfo?.matchDesc}
                                      </small>
                                      <small>
                                        {new Date(
                                          Number(seriesMatch?.matchInfo?.startDate)
                                        ).toLocaleString()}{" "}
                                        
                                        
                                      </small>
                                      <small>
                                        {seriesMatch?.matchInfo?.matchFormat}
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
