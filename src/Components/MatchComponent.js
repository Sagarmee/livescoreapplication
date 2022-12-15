import { Container, Grid } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../Fetch/axios";

export default function MatchComponent() {
  const params = useParams();
  const [matchInfo, setMetchInfo] = useState();
  async function matchInfoFunc(id) {
    // setIsLoading(true);
    const match = await axios.get(`/matches/get-info?matchId=${id}`);
    // setIsLoading(false);
    return match.data;
  }
  useEffect(() => {
    async function getResponse() {
      const matchInfoResponse = await matchInfoFunc(params.id);
      setMetchInfo(matchInfoResponse);
    }
    getResponse();
  }, []);
  return (
    <>
      <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
        <div className="card-body">
          <Container maxWidth="lg">
            <Grid container spacing={1}>
              <Grid item xs={12} lg={9}>
                <Grid
                  container
                  spacing={1}
                  py={3}
                  // sx={{ borderBottom: "1px solid #aaaaaa" }}
                  className="Schedule"
                >
                  <Grid item lg={3}>
                    <NavLink to="scorecard" className="schdule-top-link">
                      Scorecard
                    </NavLink>
                  </Grid>
                  <Grid item lg={3}>
                    <NavLink to="match-info" className="schdule-top-link">
                      Match Info
                    </NavLink>
                  </Grid>
                  <Grid item lg={3}>
                    <NavLink to="squad" className="schdule-top-link">
                      Squad
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <Outlet context={matchInfo} />
          </Container>
        </div>
      </div>
    </>
  );
}
