import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
} from "@mui/material";

function createData(
  name,
  age,
  toddler,
  baby,
  teenage,
  young,
  adult,
  daddy,
  uncle,
  granpa,
  total
) {
  return {
    name,
    age,
    toddler,
    baby,
    teenage,
    young,
    adult,
    daddy,
    uncle,
    granpa,
    total,
  };
}

const rows = [
  createData("5-12", "3%", "3%", "3%", "4%", "4%", "4%", "5%", "2%", "5%"),
  createData("13-21", "6%", "7%", "5%", "5%", "5%", "6%", "5%", "3%", "6%"),
  createData(
    "22-30",
    "17%",
    "19%",
    "16%",
    "14%",
    "16%",
    "15%",
    "13%",
    "19%",
    "12%"
  ),
  createData(
    "31-40",
    "25%",
    "25%",
    "25%",
    "24%",
    "26%",
    "25%",
    "24%",
    "30%",
    "24%"
  ),
  createData(
    "41-50",
    "21%",
    "20%",
    "21%",
    "22%",
    "20%",
    "22%",
    "22%",
    "20%",
    "22%"
  ),
  createData(
    "51-60",
    "14%",
    "14%",
    "15%",
    "15%",
    "14%",
    "15%",
    "16%",
    "12%",
    "16%"
  ),
  createData(
    "61-70",
    "10%",
    "9%",
    "12%",
    "12%",
    "11%",
    "9%",
    "11%",
    "11%",
    "11%"
  ),
  createData("71-80", "3%", "3%", "3%", "3%", "3%", "3%", "3%", "2%", "3%"),
  createData("≥81", "1%", "1%", "1%", "1%", "1%", "1%", "1%", "0%", "1%"),
  createData(
    "Total",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%",
    "100%"
  ),
];

const StyledTableCell = styled(TableCell)({});

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>อายุ</StyledTableCell>
            <StyledTableCell>ทั้งพื้นที่</StyledTableCell>
            <StyledTableCell>กรุงเทพมหานคร</StyledTableCell>
            <StyledTableCell>นนทบุรี</StyledTableCell>
            <StyledTableCell>ปทุมธานี</StyledTableCell>
            <StyledTableCell>สมุทรปราการ</StyledTableCell>
            <StyledTableCell>สมุทรสาคร</StyledTableCell>
            <StyledTableCell>นครปฐม</StyledTableCell>
            <StyledTableCell>พระนครศรีอยุธยา</StyledTableCell>
            <StyledTableCell>ฉะเชิงเทรา</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell>{row.toddler}</StyledTableCell>
              <StyledTableCell>{row.baby}</StyledTableCell>
              <StyledTableCell>{row.teenage}</StyledTableCell>
              <StyledTableCell>{row.young}</StyledTableCell>
              <StyledTableCell>{row.adult}</StyledTableCell>
              <StyledTableCell>{row.daddy}</StyledTableCell>
              <StyledTableCell>{row.uncle}</StyledTableCell>
              <StyledTableCell>{row.granpa}</StyledTableCell>
              <StyledTableCell>{row.total}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
