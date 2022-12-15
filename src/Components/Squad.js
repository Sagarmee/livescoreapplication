import { useOutletContext } from "react-router-dom";
import axios from "../Fetch/axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LinerSpinner from "../Components/LinerSpinner";


export default function Squad() {
  const matchInfo = useOutletContext();
  const team1Id = matchInfo?.team1?.teamId;
  const team2Id = matchInfo?.team2?.teamId;
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  async function fetchTeam(teamId) {
    setIsLoading(true);
    const team = await axios.get(
      `/matches/get-team?matchId=${params.id}&teamId=${teamId}`
    );
    setIsLoading(false);
    return team.data;
  }
  const [team1Player, setTeam1] = useState();
  const [team2Player, setTeam2] = useState();

  useEffect(() => {
    async function getResponse() {
      const team1Response = await fetchTeam(team1Id);
      const team2Response = await fetchTeam(team2Id);
      setTeam1(
        team1Response?.player?.filter(
          (player) => player.category === "playing XI"
        )
      );
      setTeam2(
        team2Response?.player?.filter(
          (player) => player.category === "playing XI"
        )
      );
    }
    getResponse();
  }, []);
  return (
    <>
      <div id="accordion">
      {isLoading && <LinerSpinner />}

        <div className="card my-4">
          {team1Player ? (
            <>
              <div>
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        border: "white",
                        color: "#063970",
                        fontSize: "20px",
                      }}
                    >
                      {matchInfo?.team1?.teamName}
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {team1Player[0]?.player?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{`${player.name} ${player?.captain === true ? '(c)' : ''}`}</th>
                              <td>{player.role}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      style={{
                        border: "white",
                        color: "#063970",
                        fontSize: "20px",
                      }}
                    >
                      {matchInfo?.team2?.teamName}
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                  <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {team2Player[0]?.player?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{`${player.name} ${player?.captain === true ? '(c)' : 'sfsf'}`}</th>
                              <td>{player.role}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>Not available</div>
          )}
        </div>
      </div>
    </>
  );
}
