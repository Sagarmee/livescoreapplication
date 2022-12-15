import { Grid, Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export default function AllUpcoming() {
  let schedule = useOutletContext();

  return (
    <>
     <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
        <div className="card-body">
          <Card>
            <CardContent>
              <Stack sx={{ backgroundColor: "#eef0f3", padding: "20px 0" }}>
                <Grid container spacing={2} px={3}>
                  <Grid item xs={2} lg={3}>
                    <Typography sx={{ color: "black" }}>Date</Typography>
                  </Grid>
                  <Grid item xs={2} lg={6}>
                    <Typography sx={{ color: "black" }}>
                      Match Detail
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
              <Box>
                <Stack sx={{ padding: "20px 0" }}>
                  {schedule?.map((element) => {
                    if (element?.matchScheduleMap !== undefined) {
                      return (
                        <>
                          <Grid container spacing={0} px={3}>
                            <Grid
                              item
                              xs={12}
                              lg={3}
                              sx={{ backgroundColor: "white" }}
                            >
                              <Typography
                                sx={{ paddingLeft: "10px", margin: "15px 0" }}
                              >
                                {element?.matchScheduleMap?.date}
                              </Typography>
                            </Grid>

                            {element?.matchScheduleMap?.matchScheduleList?.map(
                              (match, index) => {
                                return (
                                  <>
                                    {index !== 0 ? (
                                      <Grid
                                        item
                                        xs={12}
                                        lg={3}
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
                                    <Grid item xs={12} lg={8}>
                                      <Stack
                                        sx={{
                                          padding: "17px 0",
                                        }}
                                      >
                                        <p>{match?.seriesName}</p>
                                        {match?.matchInfo?.map((match) => {
                                          if (match?.matchFormat === "ODI") {
                                            return (
                                              <>
                                                {`${match?.team1?.teamName} vs ${match?.team2?.teamName}`}
                                                <small>{`${match?.venueInfo?.ground}, ${match?.venueInfo?.city}`}</small>
                                                <small>{`${match?.matchFormat}`}</small>
                                                <small>
                                                  {new Date(
                                                    Number(match?.startDate)
                                                  ).toLocaleTimeString()}
                                                </small>
                                              </>
                                            );
                                          }
                                        })}
                                      </Stack>
                                      <hr />
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
}
