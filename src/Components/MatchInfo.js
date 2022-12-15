import React from "react";
import { useOutletContext } from "react-router-dom";

export default function MatchInfo() {
  const matchInfo = useOutletContext();
  return (
    <div>
      <div style={{textAlign: 'center', fontSize: '50px', marginBottom: '10px', color: '#063970'}}>
        {matchInfo?.team1?.teamSName} VS {matchInfo?.team2?.teamSName}{" "}
      </div>
      <table class="table">
        <tbody>
          <tr>
            <td colspan="6"><b>Series:</b></td>
            <td colspan="6">{matchInfo?.seriesName}</td>
          </tr>
          <tr>
            <td colspan="6"><b>Match:</b></td>
            <td colspan="6">{matchInfo?.matchFormat}</td>
          </tr>
          <tr>
            <td colspan="6"><b>Date & Time:</b></td>
            <td colspan="6">
              {new Date(Number(matchInfo?.startDate)).toLocaleString()}
            </td>
          </tr>
          <tr>
            <td colspan="6"><b>Venue:</b></td>
            <td colspan="6">{`${matchInfo?.venueInfo?.ground}, ${matchInfo?.venueInfo?.city}, ${matchInfo?.venueInfo?.country}`}</td>
          </tr>
          <tr>
            <td colspan="6"><b>Toss:</b></td>
            <td colspan="6">{matchInfo?.toss}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
