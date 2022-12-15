import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "../Fetch/axios";
import { useNavigate } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#063970",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(rank, player, points) {
  return { rank, player, points };
}

export default function RankTable(props) {
  let navigate = useNavigate();
  const [teamRanks, setTeamRanks] = useState();
  async function fetchTeamRanks() {
    try {
      let teamRanks = {};
      props.setLoadPage(true);
      const testTeam = await axios.get(
        `/stats/get-icc-rankings?category=${props.category}&isWomen=0&formatType=${props.format}`
      );

      props.setLoadPage(false);
      teamRanks.rank = testTeam?.data?.rank;

      return teamRanks;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    async function getResponse() {
      const team = await fetchTeamRanks();
      setTeamRanks(team);
    }
    getResponse();
  }, []);
  let rows = [];
  let i = 1;
  let header;
  if (teamRanks !== undefined) {
    if (props.format === "test") {
      header = "Test Rankings";
    } else if (props.format === "odi") {
      header = "ODI Rankings";
    } else {
      header = "T-20 Rankings";
    }
    for (let testRank of teamRanks?.rank) {
      if (i === 6) {
        break;
      }
      rows.push(createData(testRank.rank, testRank.name, testRank.points));
      i++;
    }
  } else {
    rows = [
      createData("", "", ""),
      createData("", "", ""),
      createData("", "", ""),
      createData("", "", ""),
    ];
  }
  const onViewTable = () => {
    const path = `/rank-table/${props.category}/${props.format}`
    navigate(path);
  }
  return (
    <>
      <TableContainer component={Paper}>
        <h3>{header}</h3>
        <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Rank</StyledTableCell>
              <StyledTableCell align="left">Player</StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row?.rank}</StyledTableCell>
                <StyledTableCell align="left">{row?.player}</StyledTableCell>
                <StyledTableCell align="left">{row?.points}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            width: "97%",
            borderRadius: "5px",
            backgroundColor: "#063970",
            color: "white",
            height: "45px",
            margin: "5px auto",
          }}
          onClick={onViewTable}
        >
          View Full Table
        </button>
      </div>
    </>
  );
}
