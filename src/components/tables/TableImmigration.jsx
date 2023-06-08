import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  totalArea,
  ageRange5to21,
  ageRange22to60,
  ageRangeOver60,
  totalPercentage
) {
  return {
    totalArea,
    ageRange5to21,
    ageRange22to60,
    ageRangeOver60,
    totalPercentage,
  };
}

const rows = [
  createData("ทุกพื้นที่", "29%", "39%", "11%", "33%"),
  createData("กรุงเทพมหานคร", "49%", "55%", "18%", "48%"),
  createData("นนทบุรี", "19%", "32%", "9%", "27%"),
  createData("ปทุมธานี", "8%", "19%", "4%", "15%"),
  createData("สมุทรปราการ", "7%", "29%", "5%", "23%"),
  createData("สมุทรสาคร", "15%", "28%", "10%", "24%"),
  createData("นครปฐม", "15%", "19%", "4%", "16%"),
  createData("ฉะเชิงเทรา", "23%", "38%", "3%", "31%"),
  createData("พระนครศรีอยุธยา", "10%", "9%", "3%", "8%"),
];

export default function TableImmigration() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>จังหวัด</TableCell>
            <TableCell align="right">5-21 ปี</TableCell>
            <TableCell align="right">22-60 ปี</TableCell>
            <TableCell align="right">60 ปีขึ้นไป</TableCell>
            <TableCell align="right">รวม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            lineHeight: "10px",
            margin: 0,
            paddingInline: 0,
            fontSize: "14px",
          }}
        >
          {rows.map((row) => (
            <TableRow key={row.totalArea}>
              <TableCell component="th" scope="row">
                {row.totalArea}
              </TableCell>
              <TableCell align="right">{row.ageRange5to21}</TableCell>
              <TableCell align="right">{row.ageRange22to60}</TableCell>
              <TableCell align="right">{row.ageRangeOver60}</TableCell>
              <TableCell align="right">{row.totalPercentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
