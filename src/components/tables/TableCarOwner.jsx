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
  createData("กรุงเทพมหานคร", "12%", "27%", "31%", "31%", "100%"),
  createData("นนทบุรี", "8%", "22%", "9%", "27%", "100%"),
  createData("ปทุมธานี", "6%", "22%", "4%", "15%", "100%"),
  createData("สมุทรปราการ", "6%", "25%", "5%", "23%", "100%"),
  createData("สมุทรสาคร", "6%", "23%", "10%", "24%", "100%"),
  createData("นครปฐม", "4%", "25%", "4%", "16%", "100%"),
  createData("ฉะเชิงเทรา", "1%", "31%", "3%", "31%", "100%"),
  createData("พระนครศรีอยุธยา", "9%", "26%", "3%", "8%", "100%"),
];

export default function TableImmigration() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell style={{ fontSize: 14 }}>ไม่มีรถ</TableCell>
            <TableCell style={{ fontSize: 14 }}>มีจักรยานยนต์</TableCell>
            <TableCell style={{ fontSize: 14 }}> มีรถยนต์</TableCell>
            <TableCell style={{ fontSize: 14 }}> มีรถทั้งสองชนิด</TableCell>
            <TableCell style={{ fontSize: 14 }}>รวม</TableCell>
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
                style={{ fontSize: 14, color: "darkmagenta" }}
              >
                {row.province}
              </TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.nocar}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.biker}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.car}</TableCell>
              <TableCell style={{ fontSize: 14 }}>{row.both}</TableCell>
              <TableCell style={{ fontSize: 14 }}>
                {row.totalPercentage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
