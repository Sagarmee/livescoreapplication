import React, { useEffect, useState } from "react";
import RankTable from "../Components/RankTableTeam";
import RankTablePlayer from "../Components/RankTablePlayer";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";

const Fixtures = () => {
  const [loadMore, setLoad] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const setLoadPage = (bool) => {
    setIsLoading(bool);
  };
  const onLoadMore = (e) => {
    const loadButton = document.getElementById("load-button");
    if (loadMore === 0) {
      setLoad(1);
    } else if (loadMore === 1) {
      setLoad(2);
      loadButton.style.display = "none";
    }
  };
  const [teamRanks, setTeamRanks] = useState();
  useEffect(() => {
    async function fetchTeamRanks() {
      try {
        let teamRanks = {};
        setLoadPage(true);
        const odiTeam = await axios.get(
          `/stats/get-icc-rankings?category=teams&isWomen=0&formatType=odi`
        );
        const testTeam = await axios.get(
          `/stats/get-icc-rankings?category=teams&isWomen=0&formatType=test`
        );
        const t20Team = await axios.get(
          `/stats/get-icc-rankings?category=teams&isWomen=0&formatType=t20`
        );
        teamRanks.odiTeam = odiTeam?.data?.rank;
        teamRanks.testTeam = testTeam?.data?.rank;
        teamRanks.t20Team = t20Team?.data?.rank;
        return teamRanks;
      } catch (error) {
        console.log(error);
      }
    }
    async function getResponse() {
      const team = await fetchTeamRanks();
      setTeamRanks(team);
    }
    getResponse();
  }, []);
  return (
    <div>
      {isLoading && <LinerSpinner />}

      <br />
      <div className="card" style={{ width: "95%", margin: "auto" }}>
        <div className="card-body">
          <h4>Men's Teams Rankings</h4>
          <hr></hr>

          <div
            style={{
              maxWidth: "3000px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div className="card" style={{ margin: "auto", minWidth: '32%'}}>
              <div className="card-body">
                <RankTable teamRanks={teamRanks} format="test" />
              </div>
            </div>

            <div className="card" style={{ margin: "auto", minWidth: '32%' }}>
              <div className="card-body">
                <RankTable teamRanks={teamRanks} format="odi" />
              </div>
            </div>

            <div className="card" style={{ margin: "auto", minWidth: '32%' }}>
              <div className="card-body">
                <RankTable teamRanks={teamRanks} format="t20" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <h4>Men's Batting Rankings</h4>
          <hr></hr>
          <div
            style={{
              maxWidth: "3000px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
              <div className="card-body">
                <RankTablePlayer
                  format="test"
                  category="batsmen"
                  setLoadPage={setLoadPage}
                />
              </div>
            </div>

            <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
              <div className="card-body">
                <RankTablePlayer
                  format="odi"
                  category="batsmen"
                  setLoadPage={setLoadPage}
                />
              </div>
            </div>

            <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
              <div className="card-body">
                <RankTablePlayer
                  format="t20"
                  category="batsmen"
                  setLoadPage={setLoadPage}
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          {loadMore === 1 || loadMore === 2 ? (
            <>
              <h4>Men's Bowling Rankings</h4>
              <hr></hr>
              <div
                style={{
                  maxWidth: "3000px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
                  <div className="card-body">
                    <RankTablePlayer
                      format="test"
                      category="bowlers"
                      setLoadPage={setLoadPage}
                    />
                  </div>
                </div>

                <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
                  <div className="card-body">
                    <RankTablePlayer
                      format="odi"
                      category="bowlers"
                      setLoadPage={setLoadPage}
                    />
                  </div>
                </div>

                <div className="card" style={{ minWidth: "32%", margin: "auto" }}>
                  <div className="card-body">
                    <RankTablePlayer
                      format="t20"
                      category="bowlers"
                      setLoadPage={setLoadPage}
                    />
                  </div>
                </div>
              </div>
              <br />
            </>
          ) : (
            ""
          )}
          {loadMore === 2 ? (
            <>
              <br />
              <div id="all-rounders">
                <h4>Men's All-Rounders Rankings</h4>
                <hr></hr>
                <div
                  style={{
                    maxWidth: "3000px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="card"
                    style={{ minWidth: "32%", margin: "auto" }}
                  >
                    <div className="card-body">
                      <RankTablePlayer
                        format="test"
                        category="allrounders"
                        setLoadPage={setLoadPage}
                      />
                    </div>
                  </div>

                  <div
                    className="card"
                    style={{ minWidth: "32%", margin: "auto" }}
                  >
                    <div className="card-body">
                      <RankTablePlayer
                        format="odi"
                        category="allrounders"
                        setLoadPage={setLoadPage}
                      />
                    </div>
                  </div>

                  <div
                    className="card"
                    style={{ minWidth: "32%", margin: "auto" }}
                  >
                    <div className="card-body">
                      <RankTablePlayer
                        format="t20"
                        category="allrounders"
                        setLoadPage={setLoadPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          <button
            id="load-button"
            onClick={onLoadMore}
            style={{ display: "block" }}
          >
            Load More
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
