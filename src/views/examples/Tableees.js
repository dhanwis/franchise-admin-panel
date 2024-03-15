import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'reactstrap';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, date,location,item,address,restaurant,deliveryboy,status) {
  return { id,date,location,item,address,restaurant,deliveryboy,status };
}


const rows = [
  createData('1','09-12-2024','kannur', 'pizza', 'pizza','pizza','pizza','Out for Delivery'),
  createData('2','09-12-2024', 'kannur', 'pizza', 'pizza','pizza','pizza','Order Placed'),
  createData('3','09-12-2024', 'kannur', 'pizza', 'pizza','pizza','pizza','Out for Delivery')

];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Item</StyledTableCell>

            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Restaurant</StyledTableCell>
            <StyledTableCell align="right">Delivery Boy</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>

            

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.item}</StyledTableCell>
              <StyledTableCell align="right">{row.address}</StyledTableCell>
              <StyledTableCell align="right">{row.restaurant}</StyledTableCell>
              <StyledTableCell align="right">{row.deliveryboy}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>



            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}