import React, { useState, useEffect } from "react";
import axios from "../Fetch/axios";
import { NavLink, Outlet } from "react-router-dom";
import LinerSpinner from "../Components/LinerSpinner";
import { Grid, Container } from "@mui/material";

const Upcoming = () => {
  const [schedule, setSchedule] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function fetchTeamRanks() {
    try {
      setIsLoading(true);
      const schedule = await axios.get(
        `matches/get-schedules?matchType=international`
      );
      setIsLoading(false);
      return schedule?.data?.scheduleAdWrapper;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    async function getResponse() {
      const response = await fetchTeamRanks();
      setSchedule(response);
    }
    getResponse();
  }, []);
  return (
    <>
      <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
        {isLoading && <LinerSpinner />}
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
                    <NavLink to="all" className="schdule-top-link">
                      All
                    </NavLink>
                  </Grid>
                  <Grid item lg={3}>
                    <NavLink to="T20" className="schdule-top-link">
                      T20
                    </NavLink>
                  </Grid>
                  <Grid item lg={3}>
                    <NavLink to="odi" className="schdule-top-link">
                      ODI
                    </NavLink>
                  </Grid>
                  <Grid item lg={3}>
                    <NavLink to="test" className="schdule-top-link">
                      TEST
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr />
            <Outlet context={schedule} />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Upcoming;
