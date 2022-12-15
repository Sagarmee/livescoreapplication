import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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

function createData(rank, team, Ranking, Points) {
  return { rank, team, Ranking, Points };
}

export default function RankTable(props) {
  let navigate = useNavigate();
  let header;
  let rows = [];
  let i = 1;
  if (props.teamRanks !== undefined) {
    if (props.format === "test") {
      header = "Test Rankings";
      for (let testRank of props?.teamRanks?.testTeam) {
        if (i === 6) {
          break;
        }
        rows.push(
          createData(
            testRank.rank,
            testRank.name,
            testRank.rating,
            testRank.points
          )
        );
        i++;
      }
    } else if (props.format === "odi") {
      header = "ODI Rankings";
      for (let odiRank of props?.teamRanks?.odiTeam) {
        if (i === 6) {
          break;
        }
        rows.push(
          createData(odiRank.rank, odiRank.name, odiRank.rating, odiRank.points)
        );
        i++;
      }
    } else {
      header = "T-20 Rankings";
      for (let t20Rank of props?.teamRanks?.t20Team) {
        if (i === 6) {
          break;
        }
        rows.push(
          createData(t20Rank.rank, t20Rank.name, t20Rank.rating, t20Rank.points)
        );
        i++;
      }
    }
  } else {
    rows = [
      createData(``, "", "", ""),
      createData(``, "", "", ""),
      createData(``, "", "", ""),
      createData(``, "", "", ""),
    ];
  }
  const onViewTable = () => {
    const path = `/team/rank-table/${props.format}`
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
              <StyledTableCell align="left">Team</StyledTableCell>
              <StyledTableCell align="left">Ranking </StyledTableCell>
              <StyledTableCell align="left">Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row?.rank}</StyledTableCell>
                <StyledTableCell align="left">{row?.team}</StyledTableCell>
                <StyledTableCell align="left">{row?.Ranking}</StyledTableCell>
                <StyledTableCell align="left">{row?.Points}</StyledTableCell>
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
