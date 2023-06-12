import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(province, nocar, biker, car, both, totalPercentage) {
  return {
    province,
    nocar,
    biker,
    car,
    both,
    totalPercentage,
  };
}

const rows = [
  createData("> 100,001", "1%", "4%", "39%", "57%", "100%"),
  createData("70,001-100,000", "1%", "9%", "32%", "58%", "100%"),
  createData("50,001-70,000", "2%", "9%", "30%", "59%", "100%"),
  createData("30,001-50,000", "4%", "18%", "30%", "47%", "100%"),
  createData("15,001-30,000", "10%", "37%", "29%", "23%", "100%"),
  createData("5,001-15,000", "22%", "49%", "17%", "12%", "100%"),
  createData("< 5,000", "37%", "32%", "20%", "12%", "100%"),
];
export default function TableImmigration() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>รายได้ครัวเรือน</TableCell>
            <TableCell>ไม่มีรถ</TableCell>
            <TableCell>มีจักรยานยนต์</TableCell>
            <TableCell> มีรถยนต์</TableCell>
            <TableCell> มีรถทั้งสองชนิด</TableCell>
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
            <TableRow key={row.province}>
              <TableCell
                style={{ fontSize: 14, color: "crimson" }}
                component="th"
                scope="row"
              >
                {row.province}
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
