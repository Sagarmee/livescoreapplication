import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../Fetch/axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinerSpinner from "../Components/LinerSpinner";


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

export default function RankTable() {
  const params = useParams();
  const [ranks, setRanks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  async function fetchTeamRanks() {
    try {
      setIsLoading(true);
      const ranks = await axios.get(
        `/stats/get-icc-rankings?category=teams&isWomen=0&formatType=${params.format}`
      );
      setIsLoading(false);
      return ranks?.data?.rank;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    async function getResponse() {
      const matchInfoResponse = await fetchTeamRanks(params.id);
      setRanks(matchInfoResponse);
    }
    getResponse();
  }, []);
  return (
    <>
      {/* <h3 style={{margin: "10px 5px", color: '#063970'}}>{`${params.format.toUpperCase()} - ${params.category.toUpperCase()}`}</h3> */}
      <div className="card my-4" style={{ width: "95%", margin: "auto" }}>
      {isLoading && <LinerSpinner />}
        <div className="card-body">
          <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Rank</StyledTableCell>
                <StyledTableCell align="left">Team</StyledTableCell>
                <StyledTableCell align="left">Matches</StyledTableCell>
                <StyledTableCell align="left">Points</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ranks?.map((rank) => (
                <StyledTableRow key={rank.name}>
                  <StyledTableCell align="left">{rank?.rank || '&nbsp;'} </StyledTableCell>
                  <StyledTableCell align="left">{rank?.name || '&nbsp;'} </StyledTableCell>
                  <StyledTableCell align="left">
                    {rank?.matches || '&nbsp;'} 
                  </StyledTableCell>
                  <StyledTableCell align="left">{rank?.points || '&nbsp;'} </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
