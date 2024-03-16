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

<<<<<<< HEAD
function createData(id, name,Phone,Email,address) {
  return { id,name,Phone,Email,address};
=======
function createData(
  id,
  date,
  location,
  item,
  address,
  restaurant,
  deliveryboy,
  status
) {
  return { id, date, location, item, address, restaurant, deliveryboy, status };
>>>>>>> 15af199e0d8f66c215e155efbbb4a5bff98d6406
}

const rows = [
<<<<<<< HEAD
  createData('1','Ram','9876564567', 'demo@gmail.com', 'pizza'),
  createData('2','Ram', '8976456756', 'demo@gmail.com', 'pizza'),

=======
  createData(
    "1",
    "09-12-2024",
    "kannur",
    "pizza",
    "pizza",
    "pizza",
    "pizza",
    "Out for Delivery"
  ),
  createData(
    "2",
    "09-12-2024",
    "kannur",
    "pizza",
    "pizza",
    "pizza",
    "pizza",
    "Order Placed"
  ),
  createData(
    "3",
    "09-12-2024",
    "kannur",
    "pizza",
    "pizza",
    "pizza",
    "pizza",
    "Out for Delivery"
  ),
>>>>>>> 15af199e0d8f66c215e155efbbb4a5bff98d6406
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

<<<<<<< HEAD

           
            

=======
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Restaurant</StyledTableCell>
            <StyledTableCell align="right">Delivery Boy</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
>>>>>>> 15af199e0d8f66c215e155efbbb4a5bff98d6406
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.Email}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
<<<<<<< HEAD
              
             



=======
              <StyledTableCell align="right">{row.restaurant}</StyledTableCell>
              <StyledTableCell align="right">{row.deliveryboy}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
>>>>>>> 15af199e0d8f66c215e155efbbb4a5bff98d6406
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
