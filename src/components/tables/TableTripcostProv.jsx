import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(province, cost, biker, car, both, totalPercentage) {
  return {
    province,
    cost,
    biker,
    car,
    both,
    totalPercentage,
  };
}

const rows = [
  createData("กรุงเทพมหานคร", 32),
  createData("นนทบุรี", 39),
  createData("ปทุมธานี", 43),
  createData("สมุทรปราการ", 39),
  createData("สมุทรสาคร", 44),
  createData("นครปฐม", 37),
  createData("ฉะเชิงเทรา", 33),
  createData("พระนครศรีอยุธยา", 27),
];

export default function Tabletripcost() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>จังหวัด</TableCell>
            <TableCell>ค่าเดินทาง</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
            lineHeight: "10px",
            margin: 0,
            paddingInline: 0,
          }}
        >
          {rows.map((row) => (
            <TableRow key={row.province}>
              <TableCell
                component="th"
                scope="row"
                style={{ color: "darkgreen" }}
              >
                {row.province}
              </TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
