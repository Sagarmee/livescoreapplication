import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../Fetch/axios";
import LinerSpinner from "../Components/LinerSpinner";

export default function ScoreCard() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [scoreBoard, setScoreBoard] = useState();
  async function scoreCard(id) {
    setIsLoading(true);
    const series = await axios.get(`/matches/get-scorecard?matchId=${id}`);
    setIsLoading(false);
    return series.data;
  }
  useEffect(() => {
    async function getResponse() {
      const scoreCardResponse = await scoreCard(params.id);
      setScoreBoard(scoreCardResponse);
    }
    getResponse();
  }, []);
  return (
    <>
      <div id="accordion">
        {isLoading && <LinerSpinner />}

        <div className="card my-4">
          {scoreBoard?.scorecard ? (
            <>
              <div>
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn "
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
                      {scoreBoard?.scorecard[0]?.batTeamName}
                    </button>

                    <span
                      style={{
                        float: "right",
                        marginTop: "7px",
                        color: "#063970",
                      }}
                    >{`${scoreBoard?.scorecard[0]?.score || ""}-${
                      scoreBoard?.scorecard[0]?.wickets || ""
                    } (${scoreBoard?.scorecard[0]?.overs || ""})`}</span>
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
                          <th scope="col">Batters</th>
                          <th scope="col">R</th>
                          <th scope="col">B</th>
                          <th scope="col">4s</th>
                          <th scope="col">6s</th>
                          <th scope="col">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[0]?.batsman?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.name}</th>
                              <td>{player.runs || 0}</td>
                              <td>{player.balls || 0}</td>
                              <td>{player.fours || 0}</td>
                              <td>{player.sixes || 0}</td>
                              <td>{player.strkRate || 0}</td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colspan="6">
                            Extra {scoreBoard?.scorecard[0]?.extras?.total} runs
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Bowlers</th>
                          <th scope="col">O</th>
                          <th scope="col">M</th>
                          <th scope="col">R</th>
                          <th scope="col">W</th>
                          <th scope="col">ER</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[0]?.bowler?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.name}</th>
                              <td>{player.overs || 0}</td>
                              <td>{player.balls || 0}</td>
                              <td>{player.runs || 0}</td>
                              <td>{player.wickets || 0}</td>
                              <td>{player.economy || 0}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Fall of Wickets</th>
                          <th scope="col">Score</th>
                          <th scope="col">Over</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[0]?.fow[0]?.fow.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.batsmanName}</th>
                              <td>{player.runs || 0}</td>
                              <td>{player.overNbr || 0}</td>
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
                      {scoreBoard?.scorecard[1]?.batTeamName}
                    </button>
                    <span
                      style={{
                        float: "right",
                        marginTop: "7px",
                        color: "#063970",
                      }}
                    >{`${scoreBoard?.scorecard[1]?.score || ""}-${
                      scoreBoard?.scorecard[1]?.wickets || ""
                    } (${scoreBoard?.scorecard[1]?.overs || ""})`}</span>
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
                          <th scope="col">Batters</th>
                          <th scope="col">R</th>
                          <th scope="col">B</th>
                          <th scope="col">4s</th>
                          <th scope="col">6s</th>
                          <th scope="col">SR</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[1]?.batsman?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.name}</th>
                              <td>{player.runs || 0}</td>
                              <td>{player.balls || 0}</td>
                              <td>{player.fours || 0}</td>
                              <td>{player.sixes || 0}</td>
                              <td>{player.strkRate || 0}</td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td colspan="6">
                            Extra {scoreBoard?.scorecard[1]?.extras?.total} runs
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Bowlers</th>
                          <th scope="col">O</th>
                          <th scope="col">M</th>
                          <th scope="col">R</th>
                          <th scope="col">W</th>
                          <th scope="col">ER</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[1]?.bowler?.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.name}</th>
                              <td>{player.overs || 0}</td>
                              <td>{player.balls || 0}</td>
                              <td>{player.runs || 0}</td>
                              <td>{player.wickets || 0}</td>
                              <td>{player.economy || 0}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <table class="table">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Fall of Wickets</th>
                          <th scope="col">Score</th>
                          <th scope="col">Over</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreBoard?.scorecard[1]?.fow[0]?.fow.map((player) => {
                          return (
                            <tr>
                              <th scope="row">{player.batsmanName}</th>
                              <td>{player.runs || 0}</td>
                              <td>{player.overNbr || 0}</td>
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
