import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(people, total, percent) {
  return {
    people,
    total,
    percent,
  };
}

const rows = [
  createData("เฉลี่ย", "36 "),
  createData("กรุงเทพมหานคร", "32"),
  createData("นนทบุรี", "39"),
  createData("ปทุมธานี", "43 "),
  createData("สมุทรปราการ", "39"),
  createData("สมุทรสาคร", "44"),
  createData("นครปฐม", "37"),
  createData("ฉะเชิงเทรา", "33"),
  createData("พระนครศรีอยุธยา", "27"),
];

export default function TableImmigration2() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>จำแนก</TableCell>
            <TableCell align="right">จำนวนทั้งหมด</TableCell>
            <TableCell align="right">คิดเป็นร้อยละ</TableCell>
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
            <TableRow key={row.people}>
              <TableCell component="th" scope="row">
                {row.people}
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">{row.percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
