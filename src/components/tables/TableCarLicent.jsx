import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(age, nocar, biker, car, both, totalPercentage) {
  return {
    age,
    nocar,
    biker,
    car,
    both,
    totalPercentage,
  };
}

const rows = [
  createData("< 22 ปี", "82%", "14%", "2%", "2%", "100%"),
  createData("22-60 ปี", "18%", "23%", "29%", "30%", "100%"),
  createData("> 60 ปี", "56%", "8%", "22%", "15%", "100%"),
];

export default function TableImmigration() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>อายุ</TableCell>
            <TableCell>ไม่มีใบขับขี่</TableCell>
            <TableCell> จักรยานยนต์</TableCell>
            <TableCell> รถยนต์</TableCell>
            <TableCell> มีใบขับขี่ทั้งสองชนิด</TableCell>
            <TableCell>รวม</TableCell>
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
            <TableRow key={row.age}>
              <TableCell
                component="th"
                scope="row"
                style={{ fontSize: 14, color: "darkmagenta" }}
              >
                {row.age}
              </TableCell>
              <TableCell>{row.nocar}</TableCell>
              <TableCell>{row.biker}</TableCell>
              <TableCell>{row.car}</TableCell>
              <TableCell>{row.both}</TableCell>
              <TableCell>{row.totalPercentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
