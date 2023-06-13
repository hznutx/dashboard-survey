import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(age, cantravel, withhelper, nontravel, total) {
  return {
    age,
    cantravel,
    withhelper,
    nontravel,
    total,
  };
}

const rows = [
  createData("น้อยกว่า 22 ปี", "97%", "0%", "3%", "100%"),
  createData("22-60 ปี", "99%", "0%", "1%", "100%"),
  createData("60 ปีขึ้นไป", "86%", "9%", "6%", "100%"),
  createData("เฉลี่ย", "97%", "1%", "1%", "100%"),
];

export default function TableTravelPossibly() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">อายุ</TableCell>
            <TableCell align="right">เดินทางได้ปกติ</TableCell>
            <TableCell align="right">
              ต้องมีอุปกรณ์ช่วยเหลือหรือผู้ร่วมเดินทาง
            </TableCell>
            <TableCell align="right">ไม่สามารถเดินทางได้</TableCell>
            <TableCell align="right">รวม</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ margin: 0, paddingInline: 0, fontSize: "14px" }}>
          {rows.map((row) => (
            <TableRow key={row.age}>
              <TableCell component="th" scope="row">
                {row.age}
              </TableCell>
              <TableCell align="right">{row.cantravel}</TableCell>
              <TableCell align="right">{row.withhelper}</TableCell>
              <TableCell align="right">{row.nontravel}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
