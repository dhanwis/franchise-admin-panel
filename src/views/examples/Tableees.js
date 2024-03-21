import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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

function createData(id, name, Phone, Email, address, restaurant, deliveryboy, status) {
  return { id, name, Phone, Email, address, restaurant, deliveryboy, status };
}

const rows = [
  createData('1', 'Ram', '9876564567', 'demo@gmail.com', 'pizza'),
  createData('2', 'Ram', '8976456756', 'demo@gmail.com', 'pizza'),
 
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ backgroundColor: 'rgb(130, 78, 210)', color: 'white' }}>ID</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'rgb(130, 78, 210)', color: 'white' }} align="right">Name</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'rgb(130, 78, 210)', color: 'white' }} align="right">Phone</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'rgb(130, 78, 210)', color: 'white' }} align="right">Email</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'rgb(130, 78, 210)', color: 'white' }} align="right">Address</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
